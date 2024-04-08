import { isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, inject } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private readonly tokenKey = 'AuthToken';

  constructor() { }
  platformId = inject(PLATFORM_ID);
   storage = isPlatformBrowser(this.platformId) ? localStorage : {
    getItem: (key: string) => null,
    setItem: (key: string, value: string) => null,
    removeItem: (key: string) => null,
    clear: () => null,
    length: 0,
    key: (index: number) => null,
  };
  
  setToken(token: string) {
    this.storage.setItem(this.tokenKey, token);
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
  }

}
