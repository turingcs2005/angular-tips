import { Component, OnInit } from '@angular/core';
import { FormFactoryService } from 'src/app/services/form-factory.service';

@Component({
  selector: 'app-form-to-class',
  templateUrl: './form-to-class.component.html',
  styleUrls: ['./form-to-class.component.scss']
})
export class FormToClassComponent implements OnInit {

  intakeForm = this.formFactory.intakeForm;

  constructor(
    private formFactory: FormFactoryService
  ) { }

  ngOnInit(): void {
  }

  get fullName() {
    return this.intakeForm.controls.firstName.value + ' ' + this.intakeForm.controls.lastName.value;
  }


  onSubmit() {
    console.log('send data to database');
  }

  onCancel() {
    console.log('navigate to another page');
  }

}
