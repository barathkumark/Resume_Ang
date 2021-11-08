import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  constructor(private modal_dialog: MatDialog) { }

  ngOnInit(): void {
  }

  async show_angular_certificate() {
    const { AngularModule } = await import('../education/angular/angular.module');
    const select_camp_dialog = this.modal_dialog.open(AngularModule.getComponent(), {
      width: "50vw",
      maxWidth: "40vw",
      disableClose: true,
    });
  }

  async show_react_certificate() {
    const { ReactModule } = await import('../education/react/react.module');
    const select_camp_dialog = this.modal_dialog.open(ReactModule.getComponent(), {
      width: "50vw",
      maxWidth: "40vw",
      disableClose: true,
    });
  }

  async show_bootcamp_certificate() {
    const { BootcampModule } = await import('../education/bootcamp/bootcamp.module');
    const select_camp_dialog = this.modal_dialog.open(BootcampModule.getComponent(), {
      width: "50vw",
      maxWidth: "40vw",
      disableClose: true,
    });
  }

}
