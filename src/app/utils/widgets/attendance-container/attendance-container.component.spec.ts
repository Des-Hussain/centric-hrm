import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendanceContainerComponent } from './attendance-container.component';

describe('AttendanceContainerComponent', () => {
  let component: AttendanceContainerComponent;
  let fixture: ComponentFixture<AttendanceContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AttendanceContainerComponent]
    });
    fixture = TestBed.createComponent(AttendanceContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
