/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CheckPlatformService } from './checkPlatform.service';

describe('Service: CheckPlatform', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CheckPlatformService]
    });
  });

  it('should ...', inject([CheckPlatformService], (service: CheckPlatformService) => {
    expect(service).toBeTruthy();
  }));
});
