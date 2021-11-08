import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../shared/material-module'
import { EducationRoutingModule } from './education-routing.module';
import { EducationComponent } from './education.component';


@NgModule({
  declarations: [
    EducationComponent
  ],
  imports: [
    CommonModule,
    EducationRoutingModule,
    MaterialModule
  ]
})
export class EducationModule { }
