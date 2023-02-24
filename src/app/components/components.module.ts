import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormInputComponent } from './form-input/form-input.component';


@NgModule({
  declarations: [
    FormInputComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FormInputComponent
  ]
})
export class ComponentsModule { }