import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './components/container/container.component';
import { WarningItemComponent } from './components/warning-item/warning-item.component';
import { SuccessItemComponent } from './components/success-item/success-item.component';
import { CLOSE_LABEL, CLOSE_TIME } from './models/Token';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [CommonModule, BrowserModule, BrowserAnimationsModule],
  declarations: [ContainerComponent, WarningItemComponent, SuccessItemComponent],
  exports: [ContainerComponent, WarningItemComponent, SuccessItemComponent],
  providers: [
    {
      provide: CLOSE_LABEL,
      useValue: 'close'
    },
    {
      provide: CLOSE_TIME,
      useValue: 3000
    }
  ]
})
export class ToastrCoreModule {}
