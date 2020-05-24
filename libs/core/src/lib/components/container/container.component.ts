import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { ToastrItem } from '../../models/ToastrItem';

@Component({
  selector: 'ts-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContainerComponent implements OnInit {

  @Input() items: ToastrItem[] = [];
  @Output() closed = new EventEmitter<ToastrItem>();
  constructor() { }

  ngOnInit(): void {
  }

  close(item: ToastrItem){
    this.closed.emit(item);
  }

}
