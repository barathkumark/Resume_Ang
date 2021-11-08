import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../shared/material-module'
import { ExperienceRoutingModule } from './experience-routing.module';
import { ExperienceComponent } from './experience.component';


@NgModule({
  declarations: [
    ExperienceComponent
  ],
  imports: [
    CommonModule,
    ExperienceRoutingModule,
    MaterialModule
  ]
})
export class ExperienceModule { }
