import { TransactionService } from './../../service/transaction/transaction.service';
import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { user } from '../../../model/user.model';
import { transaction } from '../../../model/transaction.model';
import { TransactionItemComponent } from "../../components/transaction-item/transaction-item.component";
import { AddExpenseComponent } from "../../components/add-expense/add-expense.component";
import { ViewService } from '../../service/viewService/view.service';
import { AddIncomeComponent } from "../../components/add-income/add-income.component";

@Component({
  selector: 'app-expense-tracker',
  imports: [CommonModule, FormsModule, RouterLink, TransactionItemComponent, AddExpenseComponent, AddIncomeComponent],
  templateUrl: './expense-tracker.component.html',
  styleUrl: './expense-tracker.component.css'
})
export class ExpenseTrackerComponent implements OnInit{

  private transactionService = inject(TransactionService);

  user!: user

  transactionList: transaction[] = [];

  constructor(
    private router: Router,
    private addService: ViewService
  ) { }

  ngOnInit(): void {

    this.user = history.state.user;

    this.transactionService.getUserTransactions(this.user.email).subscribe( res => {
      this.transactionList=res;
    })


  }

  openAddExpense() {
    this.addService.open('expense');
  }

  openAddIncome() {
     this.addService.open('income');
  }


  addNewTransaction(transac: transaction){
    this.transactionList.push(transac);
  }


}
