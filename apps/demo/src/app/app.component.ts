import { Component } from '@angular/core';
import { ToastrItem } from '@chan4lk/toastr/core';

@Component({
  selector: 'toastr-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'demo';
  items: ToastrItem[] = [
    {
      message: 'Test item 1',
      isSuccessMessage: true,
    },
    {
      message: 'Test item 2',
      isSuccessMessage: true,
    },
    {
      message: 'Test item 3',
      isSuccessMessage: false,
    },
    {
      message: 'Test item 4',
      isSuccessMessage: false,
    },
  ];
}
