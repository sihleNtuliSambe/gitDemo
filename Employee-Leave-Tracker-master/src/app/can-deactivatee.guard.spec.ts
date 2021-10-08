import { TestBed } from '@angular/core/testing';

import { CanDeactivateeGuard } from './can-deactivatee.guard';

describe('CanDeactivateeGuard', () => {
  let guard: CanDeactivateeGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanDeactivateeGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
