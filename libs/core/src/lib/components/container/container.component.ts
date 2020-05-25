import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
  ChangeDetectorRef,
} from '@angular/core';
import { ToastrItem } from '../../models/ToastrItem';

@Component({
  selector: 'ts-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContainerComponent implements OnInit {
  @Input() items: ToastrItem[] = [];
  @Output() closed = new EventEmitter<ToastrItem>();
  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit(): void {}

  show(items: ToastrItem[] | ToastrItem) {
    if (Array.isArray(items)) {
      this.addItems(items);
    } else {
      this.addItems([items]);
    }
  }

  private addItems(items: ToastrItem[]) {
    this.items = [...this.items, ...items];
    this.changeDetectorRef.markForCheck();
  }

  close(item: ToastrItem) {
    const index = this.items.findIndex((i) => i === item);
    this.items.splice(index, 1);
    this.items = this.items;
    this.changeDetectorRef.markForCheck();
    this.closed.emit(item);
  }
}
