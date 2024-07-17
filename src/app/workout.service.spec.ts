import { TestBed } from '@angular/core/testing';
import { WorkoutService } from './workout.service';

describe('WorkoutService', () => {
  let service: WorkoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have initial data', () => {
    const workouts = service.getWorkouts();
    expect(workouts.length).toBe(3);
  });

  it('should add a new workout', () => {
    const newWorkout = { username: 'Test User', workoutType: 'Running', workoutMinutes: 25 };
    service.addWorkout(newWorkout);
    const workouts = service.getWorkouts();
    expect(workouts.length).toBe(4);
    expect(workouts[3]).toEqual(newWorkout);
  });
});
