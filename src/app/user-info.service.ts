import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {
  //store city and state info
  private cityInfo = new BehaviorSubject<string>('');
  private stateInfo = new BehaviorSubject<string>('');

  city$ = this.cityInfo.asObservable();
  state$ = this.stateInfo.asObservable();

  setCity(city:string) {
    this.cityInfo.next(city);
  }

  setState(state:string) {
    this.stateInfo.next(state);
  }

  constructor() { }
}
