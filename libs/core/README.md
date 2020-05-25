# Toastr

## Install
```bash
npm install @chan4lk/toastr
```

## Configure
```typescript
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
```

## Show Message
```typescript
export class AppComponent {
  constructor(private toastr: ToastrService) {
    this.toastr.show({
      message: 'Test message',
      isSuccessMessage: false,
    });
  }
}
```