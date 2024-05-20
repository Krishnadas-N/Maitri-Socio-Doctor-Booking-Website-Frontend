/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ScritptService } from './scritpt.service';

describe('Service: Scritpt', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ScritptService]
    });
  });

  it('should ...', inject([ScritptService], (service: ScritptService) => {
    expect(service).toBeTruthy();
  }));
});
