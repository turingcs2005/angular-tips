import { Injectable } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { TitleStrategy } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FormFactoryService {

  intakeForm: FormGroup = this.getIntakeForm();

  constructor(
    private fb: FormBuilder
  ) { }

  getIntakeForm() {
    return this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      apple: [null],
      orange: [null],
      bread: [null]
    });
  }
}
