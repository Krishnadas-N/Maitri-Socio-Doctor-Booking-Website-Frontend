import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CheckPlatformService {
  constructor(@Inject(PLATFORM_ID) public platformId: object) {}
  isBrowser(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      return true;
    } else {
      return false;
    }
  }

  isServer(): boolean {
    if (isPlatformServer(this.platformId)) {
      return true;
    } else {
      return false;
    }
  }
}
