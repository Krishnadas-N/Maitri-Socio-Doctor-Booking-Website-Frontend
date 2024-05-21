import { TestBed } from '@angular/core/testing';

import { CheckIsAuthenticatedService } from './check-is-authenticated.service';

describe('CheckIsAuthenticatedService', () => {
  let service: CheckIsAuthenticatedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckIsAuthenticatedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
