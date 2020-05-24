import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter, Inject } from '@angular/core';
import { ToastrItem } from '../../models/ToastrItem';
import { CLOSE_TIME } from '../../models/Token';

@Component({
  selector: 'ts-success-item',
  templateUrl: './success-item.component.html',
  styleUrls: ['./success-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SuccessItemComponent implements OnInit {

  @Input() item: ToastrItem = { isSuccessMessage: true, message: '' };
  @Output() closed = new EventEmitter<ToastrItem>();

  constructor(@Inject(CLOSE_TIME)private timeout: number = 300) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.closed.emit(this.item);
    }, this.timeout);
  }

}
