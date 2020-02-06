import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor() {}

  public getItem(name: string) {
    if (!name) {
      return null;
    }

    return localStorage.getItem(name) || null;
  }

  public deleteItem(name: string) {
    localStorage.removeItem(name);
  }

  public setItem(name: string, value: string) {
    localStorage.setItem(name, value);
  }
}
