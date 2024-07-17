import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { WorkoutService } from '../workout.service';

@Component({
  selector: 'app-workout-search',
  templateUrl: './workout-search.component.html',
  styleUrls: ['./workout-search.component.css']
})
export class WorkoutSearchComponent implements OnInit {
  @Output() searchResults = new EventEmitter<any[]>();
  
  searchTerm: string = '';
  filterType: string = '';
  workoutTypes: string[] = ['Running', 'Cycling', 'Swimming'];
  workouts: any[] = [];
  filteredWorkouts: any[] = [];

  constructor(private workoutService: WorkoutService) {}

  ngOnInit(): void {
    this.workouts = this.workoutService.getWorkouts();
    this.filteredWorkouts = this.workouts;
    this.emitSearchResults();
  }

  onSearch(): void {
    this.filteredWorkouts = this.workouts.filter(workout => 
      workout.username.toLowerCase().includes(this.searchTerm.toLowerCase()));
    this.applyFilter();
    this.emitSearchResults();
  }

  onFilter(): void {
    this.applyFilter();
    this.emitSearchResults();
  }

  private applyFilter(): void {
    if (this.filterType) {
      this.filteredWorkouts = this.filteredWorkouts.filter(workout => 
        workout.workoutType === this.filterType);
    }
  }

  private emitSearchResults(): void {
    this.searchResults.emit(this.filteredWorkouts);
  }
}
