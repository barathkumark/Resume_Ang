import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../shared/material-module'
import { SkillsRoutingModule } from './skills-routing.module';
import { SkillsComponent } from './skills.component';


@NgModule({
  declarations: [
    SkillsComponent
  ],
  imports: [
    CommonModule,
    SkillsRoutingModule,
    MaterialModule
  ]
})
export class SkillsModule { }
