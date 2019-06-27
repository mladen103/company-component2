import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveCvComponent } from './leave-cv.component';

describe('LeaveCvComponent', () => {
  let component: LeaveCvComponent;
  let fixture: ComponentFixture<LeaveCvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaveCvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaveCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
