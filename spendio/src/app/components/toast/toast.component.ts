import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NotificationService } from '../../service/notification/notification.service';

@Component({
  selector: 'app-toast',
  imports: [CommonModule],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.css'
})
export class ToastComponent {

  message: string | null = null;

  constructor(private toast: NotificationService) {
    this.toast.toast$.subscribe(m => this.message = m);
  }

}
