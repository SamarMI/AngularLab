import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses.component';

import { CoursesDetailsComponent } from './courses-details/courses-details.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { CoursesListComponent } from './courses-list/courses-list.component';



const routes: Routes = [{
  path: '', component: CoursesComponent,
  children: [
    {
      path: '', component: CoursesListComponent
    },
    {
      path: 'new', component: CourseFormComponent
    },
    {
      path: ':id', component: CoursesDetailsComponent
    }
   
  ]
},

{
  path: '**', redirectTo: ''
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
