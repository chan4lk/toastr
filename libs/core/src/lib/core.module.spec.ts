import { async, TestBed } from '@angular/core/testing';
import { ToastrCoreModule } from './core.module';

describe('CoreModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ToastrCoreModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ToastrCoreModule).toBeDefined();
  });
});
