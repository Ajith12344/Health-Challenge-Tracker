import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-workout-list',
  templateUrl: './workout-list.component.html',
  styleUrls: ['./workout-list.component.css']
})
export class WorkoutListComponent implements OnChanges {
  @Input() workouts: any[] = [];
  paginatedWorkouts: any[] = [];
  pageSize: number = 5;
  pageIndex: number = 0;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['workouts']) {
      this.updatePaginatedWorkouts();
    }
  }

  updatePaginatedWorkouts(): void {
    const startIndex = this.pageIndex * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.paginatedWorkouts = this.workouts.slice(startIndex, endIndex);
  }

  onPageChange(event: PageEvent): void {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.updatePaginatedWorkouts();
  }
}
