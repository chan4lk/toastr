import { Component, OnInit } from '@angular/core';
import { ToastrItem, ToastrService } from '@chan4lk/toastr/core';

@Component({
  selector: 'toastr-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  
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

  constructor(private toastr: ToastrService){

  }



  ngOnInit(): void {
    this.toastr.show(this.items);
  }
}
