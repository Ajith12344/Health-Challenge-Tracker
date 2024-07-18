// app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkoutChartComponent } from './workout-chart/workout-chart.component'; // Adjust path as per your project structure
import { WorkoutListComponent } from './workout-list/workout-list.component';
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Check this line for circular redirection
  { path: 'home', component: WorkoutListComponent },
  { path: 'chart', component: WorkoutChartComponent },
  // other routes
  { path: '**', redirectTo: '/home' } // Wildcard route for unknown routes
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
