import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnquiryListComponent } from './enquiry-list.component';

describe('EnquiryListComponent', () => {
  let component: EnquiryListComponent;
  let fixture: ComponentFixture<EnquiryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnquiryListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EnquiryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
