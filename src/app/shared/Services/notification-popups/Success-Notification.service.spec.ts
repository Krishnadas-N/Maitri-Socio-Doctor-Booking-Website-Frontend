/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SuccessNotificationService } from './Success-Notification.service';

describe('Service: SuccessNotification', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SuccessNotificationService]
    });
  });

  it('should ...', inject([SuccessNotificationService], (service: SuccessNotificationService) => {
    expect(service).toBeTruthy();
  }));
});
