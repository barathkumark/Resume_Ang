import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../shared/material-module'
import { ReactRoutingModule } from './react-routing.module';
import { ReactComponent } from './react.component';


@NgModule({
  declarations: [
    ReactComponent
  ],
  imports: [
    CommonModule,
    ReactRoutingModule,
    MaterialModule
  ]
})
export class ReactModule {
  static getComponent(): typeof ReactComponent {
		return ReactComponent;
	}
 }
