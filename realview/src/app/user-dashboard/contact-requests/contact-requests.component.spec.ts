import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactRequestsComponent } from './contact-requests.component';

describe('ContactRequestsComponent', () => {
  let component: ContactRequestsComponent;
  let fixture: ComponentFixture<ContactRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactRequestsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
