import {
  Injectable,
  ComponentRef,
  ComponentFactoryResolver,
  ApplicationRef,
  Injector,
  EmbeddedViewRef,
  Inject,
} from '@angular/core';
import { ToastrItem } from '../models/ToastrItem';
import { ContainerComponent } from '../components/container/container.component';
import { DOCUMENT } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class ToastrService {
  static WRAPPER_ID = 'toaster-wrapper';

  private componentRef: ComponentRef<ContainerComponent>;
  private items: ToastrItem[] = [];

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector,
    @Inject(DOCUMENT) private document: Document
  ) {}

  show(items: ToastrItem[] | ToastrItem) {
    this.addContainer();
    if(Array.isArray(items)){
        this.addItems(items);
    }else {
        this.addItems([items]);
    }
  }

  private addItems(items: ToastrItem[]){
     this.items = [...this.items, ...items];
     this.componentRef.instance.items = this.items;
  }

  private addContainer() {
    const isInserted = this.document.getElementById(ToastrService.WRAPPER_ID);
    if (!isInserted) {
      const container = document.createElement('div');
      container.id = ToastrService.WRAPPER_ID;
      this.document.body.insertBefore(container, this.document.body.firstChild);
      this.createComponent(container);
    }
  }

  private createComponent(container: Element) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      ContainerComponent
    );
    const componentRef = componentFactory.create(this.injector);
    this.appRef.attachView(componentRef.hostView);

    const domElem = (componentRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;

    container.appendChild(domElem);

    this.componentRef = componentRef;
    this.componentRef.instance.items = this.items;
    this.componentRef.instance.closed.subscribe(item => {
        const index = this.items.findIndex(i => i === item);
        this.items.splice(index, 1);
        this.componentRef.instance.items = this.items;
    })
  }
}
