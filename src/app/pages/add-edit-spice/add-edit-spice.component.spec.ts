import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditSpiceComponent } from './add-edit-spice.component';

describe('AddEditSpiceComponent', () => {
  let component: AddEditSpiceComponent;
  let fixture: ComponentFixture<AddEditSpiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddEditSpiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditSpiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
