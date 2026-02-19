import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor() { }

  private toastSource = new BehaviorSubject<string | null>(null);
  toast$ = this.toastSource.asObservable();

   private timeoutId: any; // store setTimeout so we can cancel it


  show(message: string) {
    // clear any previous timeout
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }

    this.toastSource.next(message);

    // auto hide after 2.5s
    this.timeoutId = setTimeout(() => {
      this.toastSource.next(null);
    }, 2500);
  }

  // manually close toast
  close() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
    this.toastSource.next(null);
  }

}
