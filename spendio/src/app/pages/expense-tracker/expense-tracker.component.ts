import { TransactionService } from './../../service/transaction/transaction.service';
import { Component, inject } from '@angular/core';
import { FooterComponent } from "../../components/footer/footer.component";
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { user } from '../../../model/user.model';

@Component({
  selector: 'app-expense-tracker',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './expense-tracker.component.html',
  styleUrl: './expense-tracker.component.css'
})
export class ExpenseTrackerComponent {

  private transactionService = inject(TransactionService);

  user!: user

  constructor(private router: Router) {}

  ngOnInit() {
    this.user = history.state.user;




  }



}
