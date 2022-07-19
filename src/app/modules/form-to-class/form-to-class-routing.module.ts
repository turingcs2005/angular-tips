import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormToClassComponent } from './form-to-class.component';

const routes: Routes = [{ path: '', component: FormToClassComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormToClassRoutingModule { }
