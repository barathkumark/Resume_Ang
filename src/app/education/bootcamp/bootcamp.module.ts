import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../shared/material-module'
import { BootcampRoutingModule } from './bootcamp-routing.module';
import { BootcampComponent } from './bootcamp.component';


@NgModule({
  declarations: [
    BootcampComponent
  ],
  imports: [
    CommonModule,
    BootcampRoutingModule,
    MaterialModule
  ]
})
export class BootcampModule {
  static getComponent(): typeof BootcampComponent {
		return BootcampComponent;
	}
 }
