import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormToClassComponent } from './form-to-class.component';

describe('FormToClassComponent', () => {
  let component: FormToClassComponent;
  let fixture: ComponentFixture<FormToClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormToClassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormToClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
