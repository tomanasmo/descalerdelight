import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OneService {

  private showMenu = false;  
  
  constructor() {}

  getToggle(): boolean {
    return this.showMenu;
  }

  doToggle() {
    this.showMenu = !this.showMenu;
  }
  
}
