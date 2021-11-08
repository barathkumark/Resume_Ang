import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../shared/material-module'
import { ProjectRoutingModule } from './project-routing.module';
import { ProjectComponent } from './project.component';


@NgModule({
  declarations: [
    ProjectComponent
  ],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    MaterialModule
  ]
})
export class ProjectModule { }
