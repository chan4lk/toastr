import { Component, OnInit } from '@angular/core';
import { ToastrItem, ToastrService } from '@chan4lk/toastr/core';

@Component({
  selector: 'toastr-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private toastr: ToastrService) {
    this.toastr.show({
      message: 'Test message',
      isSuccessMessage: false,
    });
  }

  warning(){
    this.toastr.show({
      message: 'Test warning message',
      isSuccessMessage: false,
    });
  }

  success(){
    this.toastr.show({
      message: 'Test sucess message',
      isSuccessMessage: true,
    });
  }
}
