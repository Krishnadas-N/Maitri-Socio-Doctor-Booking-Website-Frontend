import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { checkProfileIsCompleteGuard } from './check-profile-is-complete.guard';

describe('checkProfileIsCompleteGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => checkProfileIsCompleteGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
