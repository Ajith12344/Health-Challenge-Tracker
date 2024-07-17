import { Component, Input, OnInit } from '@angular/core';
import { WorkoutService } from '../workout.service';
import { TableModule } from 'primeng/table';
@Component({
  selector: 'app-workout-list',
  templateUrl: './workout-list.component.html',
  styleUrls: ['./workout-list.component.css']
})
export class WorkoutListComponent implements OnInit {
  workouts: any[] = [];

  constructor(private workoutService: WorkoutService) {}

  ngOnInit(): void {
    this.workouts = this.workoutService.getWorkouts();
  }
}
