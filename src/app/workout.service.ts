import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

interface Workout {
  username: string;
  workoutType: string;
  workoutMinutes: number;
}

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {
  private workouts: Workout[] = [];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    const initialData = [
      { username: 'John Doe', workoutType: 'Running', workoutMinutes: 30 },
      { username: 'Jane Smith', workoutType: 'Cycling', workoutMinutes: 45 },
      { username: 'Alex Johnson', workoutType: 'Swimming', workoutMinutes: 60 }
    ];

    if (isPlatformBrowser(this.platformId)) {
      const storedWorkouts = localStorage.getItem('workouts');
      this.workouts = storedWorkouts ? JSON.parse(storedWorkouts) : initialData;
    } else {
      this.workouts = initialData;
    }
  }

  getWorkouts() {
    return this.workouts;
  }

  addWorkout(workout: Workout) {
    this.workouts.push(workout);
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('workouts', JSON.stringify(this.workouts));
    }
  }
}