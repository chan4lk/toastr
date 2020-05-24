import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from '@chan4lk/toastr/core';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CoreModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
