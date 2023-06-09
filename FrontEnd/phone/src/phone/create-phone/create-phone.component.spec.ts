import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneCreateComponent } from './create-phone.component';

describe('PhoneCreateComponent', () => {
  let component: PhoneCreateComponent;
  let fixture: ComponentFixture<PhoneCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhoneCreateComponent]
    });
    fixture = TestBed.createComponent(PhoneCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
