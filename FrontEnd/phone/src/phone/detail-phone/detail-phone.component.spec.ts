import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPhoneComponent } from './detail-phone.component';

describe('DetailPhoneComponent', () => {
  let component: DetailPhoneComponent;
  let fixture: ComponentFixture<DetailPhoneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailPhoneComponent]
    });
    fixture = TestBed.createComponent(DetailPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
