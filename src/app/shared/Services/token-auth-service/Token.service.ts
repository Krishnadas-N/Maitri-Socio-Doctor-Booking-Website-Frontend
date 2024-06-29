import { isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, inject } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class TokenService {
  private readonly tokenKey = 'AuthToken';

  constructor() {}
  platformId = inject(PLATFORM_ID);
  storage = isPlatformBrowser(this.platformId)
    ? localStorage
    : {
        getItem: (key: string) => null,
        setItem: (key: string, value: string) => null,
        removeItem: (key: string) => null,
        clear: () => null,
        length: 0,
        key: (index: number) => null,
      };

  private _SetCookie(token: string) {
    let cookieStr =
      encodeURIComponent('CrCookie') +
      '=' +
      encodeURIComponent(JSON.stringify(token));
    const dtExpires = new Date();
    dtExpires.setTime(dtExpires.getTime() + 24 * 60 * 60 * 1000);
    cookieStr += ';expires=' + dtExpires.toUTCString();
    cookieStr += ';path=/';
    cookieStr += ';samesite=lax'; // lax | strict | none
    document.cookie = cookieStr;
  }

  setToken(token: string) {
    this.storage.setItem(this.tokenKey, token);
    this._SetCookie(token);
  }

  getToken() {
    return this.storage.getItem(this.tokenKey);
  }

  isAuthenticated() {
    const token = this.getToken();
    return !!token;
  }

  logout() {
    this.storage.removeItem(this.tokenKey);
    this._DeleteCookie();
  }

  setAccessToken(token: string) {
    this.storage.setItem('access_Token', token);
  }
  accessRevokeToken() {
    return this.storage.getItem('access_Token');
  }

  private _DeleteCookie(): void {
    // void accessToken but more importantly expire
    const dtExpires = new Date();
    dtExpires.setTime(dtExpires.getTime() - 24 * 60 * 60 * 1000);
    let cookieStr =
      encodeURIComponent('CrCookie') +
      '=;expires=' +
      dtExpires.toUTCString() +
      ';path=/';
    document.cookie = cookieStr;
  }
}
