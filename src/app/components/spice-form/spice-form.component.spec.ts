import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpiceFormComponent } from './spice-form.component';

describe('SpiceFormComponent', () => {
  let component: SpiceFormComponent;
  let fixture: ComponentFixture<SpiceFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpiceFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpiceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
