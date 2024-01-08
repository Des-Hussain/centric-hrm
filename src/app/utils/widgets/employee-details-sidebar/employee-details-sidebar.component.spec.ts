import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDetailsSidebarComponent } from './employee-details-sidebar.component';

describe('EmployeeDetailsSidebarComponent', () => {
  let component: EmployeeDetailsSidebarComponent;
  let fixture: ComponentFixture<EmployeeDetailsSidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [EmployeeDetailsSidebarComponent]
    });
    fixture = TestBed.createComponent(EmployeeDetailsSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
