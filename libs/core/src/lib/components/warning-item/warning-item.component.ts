import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Inject,
  Output,
  EventEmitter,
} from '@angular/core';
import { CLOSE_LABEL } from '../../models/Token';
import { ToastrItem } from '../../models/ToastrItem';

@Component({
  selector: 'ts-warning-item',
  templateUrl: './warning-item.component.html',
  styleUrls: ['./warning-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WarningItemComponent implements OnInit {

  @Input() item: ToastrItem = { isSuccessMessage: true, message: '' };
  @Output() closed = new EventEmitter<ToastrItem>();

  constructor(@Inject(CLOSE_LABEL)public closeLabel: string = 'close') {
  }

  ngOnInit(): void {

  }

  close() {
    this.closed.emit(this.item);
  }
}
