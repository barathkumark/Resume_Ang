import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) }, { path: 'skills', loadChildren: () => import('./skills/skills.module').then(m => m.SkillsModule) }, { path: 'education', loadChildren: () => import('./education/education.module').then(m => m.EducationModule) }, { path: 'education/angular', loadChildren: () => import('./education/angular/angular.module').then(m => m.AngularModule) }, { path: 'education/react', loadChildren: () => import('./education/react/react.module').then(m => m.ReactModule) }, { path: 'education/bootcamp', loadChildren: () => import('./education/bootcamp/bootcamp.module').then(m => m.BootcampModule) }, { path: 'experience', loadChildren: () => import('./experience/experience.module').then(m => m.ExperienceModule) }, { path: 'project', loadChildren: () => import('./project/project.module').then(m => m.ProjectModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
