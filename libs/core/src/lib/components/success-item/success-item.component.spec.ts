import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessItemComponent } from './success-item.component';

describe('SuccessItemComponent', () => {
  let component: SuccessItemComponent;
  let fixture: ComponentFixture<SuccessItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
