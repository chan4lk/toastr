import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ToastrCoreModule, CLOSE_LABEL } from '@chan4lk/toastr/core';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ToastrCoreModule],
  providers: [{
    provide: CLOSE_LABEL,
    useValue: 'hide'
  },],
  bootstrap: [AppComponent],
})
export class AppModule {}
