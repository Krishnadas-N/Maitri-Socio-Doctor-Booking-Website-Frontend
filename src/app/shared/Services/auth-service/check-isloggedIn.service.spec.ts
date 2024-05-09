/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CheckIsloggedInService } from './check-isloggedIn.service';

describe('Service: CheckIsloggedIn', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CheckIsloggedInService]
    });
  });

  it('should ...', inject([CheckIsloggedInService], (service: CheckIsloggedInService) => {
    expect(service).toBeTruthy();
  }));
});
