import { TestBed } from '@angular/core/testing';

import { ButtonEventService } from './button-event.service';

describe('ButtonEventService', () => {
  let service: ButtonEventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ButtonEventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
