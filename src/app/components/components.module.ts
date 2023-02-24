import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FormInputComponent } from './form-input/form-input.component';


@NgModule({
  declarations: [
    FormInputComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    FormInputComponent
  ]
})
export class ComponentsModule { }