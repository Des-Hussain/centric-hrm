import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeSidebarCardComponent } from './employee-sidebar-card.component';

describe('EmployeeSidebarCardComponent', () => {
  let component: EmployeeSidebarCardComponent;
  let fixture: ComponentFixture<EmployeeSidebarCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [EmployeeSidebarCardComponent]
    });
    fixture = TestBed.createComponent(EmployeeSidebarCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
