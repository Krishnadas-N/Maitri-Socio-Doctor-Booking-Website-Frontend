/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SharedStoreExceptionService } from './sharedStoreException.service';

describe('Service: SharedStoreException', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SharedStoreExceptionService]
    });
  });

  it('should ...', inject([SharedStoreExceptionService], (service: SharedStoreExceptionService) => {
    expect(service).toBeTruthy();
  }));
});
