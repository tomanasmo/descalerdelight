import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class M1TopMenuService {

  private hideMenu = true;

  constructor() { }

  getToggle(): boolean {
    return this.hideMenu;
  }

  doToggle() {
    this.hideMenu = !this.hideMenu;
  }

}
