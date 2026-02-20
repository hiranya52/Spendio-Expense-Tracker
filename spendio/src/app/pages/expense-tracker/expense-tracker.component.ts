import { TransactionService } from './../../service/transaction/transaction.service';
import { Component, inject } from '@angular/core';
import { FooterComponent } from "../../components/footer/footer.component";
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { user } from '../../../model/user.model';
import { transaction } from '../../../model/transaction.model';
import { TransactionItemComponent } from "../../components/transaction-item/transaction-item.component";
import { AddExpenseService } from '../../service/addExpense/add-expense.service';
import { AddExpenseComponent } from "../../components/add-expense/add-expense.component";

@Component({
  selector: 'app-expense-tracker',
  imports: [CommonModule, FormsModule, RouterLink, TransactionItemComponent, AddExpenseComponent],
  templateUrl: './expense-tracker.component.html',
  styleUrl: './expense-tracker.component.css'
})
export class ExpenseTrackerComponent {

  private transactionService = inject(TransactionService);

  user!: user

  transactionList:transaction[] = [];

  constructor(
    private router: Router,
    private addService: AddExpenseService
  ) {}

  ngOnInit() {
    this.user = history.state.user;

    this.transactionService.getUserTransactions(this.user.email).subscribe(res => {
      this.transactionList=res;
    })



  }
  openAddExpense() {
  this.addService.open();
}

}
