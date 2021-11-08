import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../shared/material-module'
import { AngularRoutingModule } from './angular-routing.module';
import { AngularComponent } from './angular.component';


@NgModule({
  declarations: [
    AngularComponent
  ],
  imports: [
    CommonModule,
    AngularRoutingModule,
    MaterialModule
  ]
})
export class AngularModule {
  static getComponent(): typeof AngularComponent {
		return AngularComponent;
	}
 }
