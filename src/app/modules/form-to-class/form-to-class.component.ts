import { Component, OnInit } from '@angular/core';
import { FormFactoryService } from 'src/app/services/form-factory.service';
import { FormToolsService } from 'src/app/services/form-tools.service';
import { Purchase } from './app-models';

@Component({
  selector: 'app-form-to-class',
  templateUrl: './form-to-class.component.html',
  styleUrls: ['./form-to-class.component.scss']
})
export class FormToClassComponent implements OnInit {

  intakeForm = this.formFactory.intakeForm;

  constructor(
    private formFactory: FormFactoryService,
    private formTools: FormToolsService
  ) { }

  ngOnInit(): void {
  }

  get fullName() {
    return this.intakeForm.controls.firstName.value + ' ' + this.intakeForm.controls.lastName.value;
  }

  get purchase() {
    const o: any = {};
    Object.assign(o, this.intakeForm.value);
    this.formTools.currencyStringToNumberTree(o);
    return new Purchase(o.firstName, o.lastName, o.apple, o.orange, o.bread);
  }


  onSubmit() {
    console.log('send data to database');
  }

  onCancel() {
    console.log('navigate to another page');
  }

}
