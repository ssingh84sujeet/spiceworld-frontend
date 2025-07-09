import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiveTestimonialComponent } from './give-testimonial.component';

describe('GiveTestimonialComponent', () => {
  let component: GiveTestimonialComponent;
  let fixture: ComponentFixture<GiveTestimonialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GiveTestimonialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GiveTestimonialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
