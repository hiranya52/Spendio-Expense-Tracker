import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddExpenseService {

  constructor() { }

  private _isOpen = new BehaviorSubject(false);
  isOpen$ = this._isOpen.asObservable();

  open() { this._isOpen.next(true); }
  close() { this._isOpen.next(false);}


}
