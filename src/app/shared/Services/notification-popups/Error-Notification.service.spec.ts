/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ErrorNotificationService } from './Error-Notification.service';

describe('Service: ErrorNotification', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ErrorNotificationService]
    });
  });

  it('should ...', inject([ErrorNotificationService], (service: ErrorNotificationService) => {
    expect(service).toBeTruthy();
  }));
});
