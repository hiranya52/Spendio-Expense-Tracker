import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor() { }

  private toastSource = new BehaviorSubject<string | null>(null);
  toast$ = this.toastSource.asObservable();

  show(message: string) {
    this.toastSource.next(message);

    setTimeout(() => {
      this.toastSource.next(null);
    }, 2500);
  }

}
