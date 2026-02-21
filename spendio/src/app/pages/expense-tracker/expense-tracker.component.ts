import { TransactionService } from './../../service/transaction/transaction.service';
import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { user } from '../../../model/user.model';
import { transaction } from '../../../model/transaction.model';
import { TransactionItemComponent } from '../../components/transaction-item/transaction-item.component';
import { AddExpenseComponent } from '../../components/add-expense/add-expense.component';
import { ViewService } from '../../service/viewService/view.service';
import { AddIncomeComponent } from '../../components/add-income/add-income.component';

@Component({
  selector: 'app-expense-tracker',
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    TransactionItemComponent,
    AddExpenseComponent,
    AddIncomeComponent,
  ],
  templateUrl: './expense-tracker.component.html',
  styleUrl: './expense-tracker.component.css',
})
export class ExpenseTrackerComponent implements OnInit {
  private transactionService = inject(TransactionService);
  user!: user;
  transactionList: transaction[] = [];
  totalBalance: number = 0;
  groupedEntries: { key: string; value: transaction[] }[] = [];

  constructor(
    private router: Router,
    private addService: ViewService,
  ) { }

  ngOnInit(): void {
    this.user = history.state.user;

    this.transactionService
      .getUserTransactions(this.user.email)
      .subscribe((res) => {
        this.transactionList = res;
        this.calculateTotalBalance();
        this.groupTransactionsByDate();
      });
  }

  getDateLabel(dateStr: string): string {
    const txDate = new Date(dateStr);
    const today = new Date();

    const tx = new Date(
      txDate.getFullYear(),
      txDate.getMonth(),
      txDate.getDate(),
    );

    const td = new Date(today.getFullYear(), today.getMonth(), today.getDate());

    const diff = (td.getTime() - tx.getTime()) / (1000 * 60 * 60 * 24);

    if (diff === 0) return 'Today';
    if (diff === 1) return 'Yesterday';

    return tx.toLocaleDateString();
  }

  groupTransactionsByDate() {

    const map: { [key: string]: transaction[] } = {};

    const sortedList = [...this.transactionList].sort((a, b) => {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    });

    for (let i = 0; i < sortedList.length; i++) {
      const t = sortedList[i];
      const label = this.getDateLabel(t.date);

      if (!map[label]) {
        map[label] = [];
      }

      map[label].push(t);
    }

    this.groupedEntries = [];

    for (const key in map) {
      this.groupedEntries.push({
        key: key,
        value: map[key]
      });
    }
  }
  openAddExpense() {
    this.addService.open('expense');
  }

  openAddIncome() {
    this.addService.open('income');
  }

  addNewTransaction(transac: transaction) {
    this.transactionList.push(transac);
  }

  calculateTotalBalance() {
    for (var i = 0; i < this.transactionList.length; i++) {
      var t = this.transactionList[i];
      if (t.type === 'INCOME') {
        this.totalBalance = this.totalBalance + t.amount;
      } else if (t.type === 'EXPENSE') {
        this.totalBalance = this.totalBalance - t.amount;
      }
    }
    this.totalBalance = this.totalBalance;
  }
}
