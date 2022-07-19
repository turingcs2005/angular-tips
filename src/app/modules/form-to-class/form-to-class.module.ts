import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormToClassRoutingModule } from './form-to-class-routing.module';
import { FormToClassComponent } from './form-to-class.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    FormToClassComponent
  ],
  imports: [
    CommonModule,
    FormToClassRoutingModule,
    SharedModule
  ]
})
export class FormToClassModule { }
