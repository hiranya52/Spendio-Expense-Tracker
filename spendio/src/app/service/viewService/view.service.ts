import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViewService {

  constructor() { }

  // Map to hold multiple modals by key
  private modals = new Map<string, BehaviorSubject<boolean>>();

  /**
   * Open a modal by key
   * @param key - unique identifier for the modal ('expense', 'income', etc.)
   */
  open(key: string) {
    if (!this.modals.has(key)) {
      this.modals.set(key, new BehaviorSubject(false));
    }
    this.modals.get(key)!.next(true);
  }

  /**
   * Close a modal by key
   * @param key - unique identifier for the modal
   */
  close(key: string) {
    this.modals.get(key)?.next(false);
  }

  /**
   * Get observable to track modal state
   * @param key - unique identifier for the modal
   * @returns observable<boolean>
   */
  isOpen(key: string) {
    if (!this.modals.has(key)) {
      this.modals.set(key, new BehaviorSubject(false));
    }
    return this.modals.get(key)!.asObservable();
  }

}
