import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonTitleColumnComponent } from './common-title-column.component';

describe('CommonTitleColumnComponent', () => {
  let component: CommonTitleColumnComponent;
  let fixture: ComponentFixture<CommonTitleColumnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CommonTitleColumnComponent]
    });
    fixture = TestBed.createComponent(CommonTitleColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
