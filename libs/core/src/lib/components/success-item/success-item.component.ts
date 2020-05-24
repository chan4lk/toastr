import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter, Inject, ChangeDetectorRef } from '@angular/core';
import { ToastrItem } from '../../models/ToastrItem';
import { CLOSE_TIME } from '../../models/Token';
import { SlideInOut } from '../animations';

@Component({
  selector: 'ts-success-item',
  templateUrl: './success-item.component.html',
  styleUrls: ['./success-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    SlideInOut
  ],
})
export class SuccessItemComponent implements OnInit {

  @Input() item: ToastrItem = { isSuccessMessage: true, message: '' };
  @Output() closed = new EventEmitter<ToastrItem>();
  
  state = 'visible';
  constructor(@Inject(CLOSE_TIME)private timeout: number = 300, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.close();
    }, this.timeout);
  }

  close() {
    this.state = 'hidden';
    this.cdr.markForCheck();
    setTimeout(() => {
      this.closed.emit(this.item);
    }, 300);
  }

}
