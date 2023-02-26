import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class M6StickyBarService {
  private readonly shouldStickSub = new BehaviorSubject<boolean>(false);
  readonly shouldStick$ = this.shouldStickSub.asObservable();

  addClass(value: boolean) {
    this.shouldStickSub.next(value);
  }
}
