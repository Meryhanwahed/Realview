import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyfilterComponent } from './propertyfilter.component';

describe('PropertyfilterComponent', () => {
  let component: PropertyfilterComponent;
  let fixture: ComponentFixture<PropertyfilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PropertyfilterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertyfilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
