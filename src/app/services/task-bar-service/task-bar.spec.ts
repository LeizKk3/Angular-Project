import { TestBed } from '@angular/core/testing';
import { TaskBar } from './task-bar';

describe('TaskBar', () => {
  let service: TaskBar;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskBar);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
