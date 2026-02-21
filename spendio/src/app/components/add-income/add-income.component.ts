import { transaction } from './../../../model/transaction.model';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, NgIf } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { AddExpenseService } from '../../service/addExpense/add-expense.service';
import { TransactionService } from '../../service/transaction/transaction.service';
import { ExpenseTrackerComponent } from '../../pages/expense-tracker/expense-tracker.component';

@Component({
  selector: 'app-add-income',
  imports: [CommonModule, NgIf, ReactiveFormsModule],
  templateUrl: './add-income.component.html',
  styleUrl: './add-income.component.css'
})
export class AddIncomeComponent {

  @Input() email!: string;

  addIncomeForm: FormGroup;

  private transactionService = inject(TransactionService);
  private expenseTracker = inject(ExpenseTrackerComponent);

  constructor(
    private addService: AddExpenseService,
    private formBuilder: FormBuilder
  ){
    this.addService.isOpen$.subscribe(open => this.isOpen = open);

    this.addIncomeForm = formBuilder.group({
      title: [''],
      category: [''],
      amount: [''],
      date: [''],
      type: ['INCOME']
    })

  }

  isOpen = false;

  onClose() {
  this.addService.close();
  }

  onSubmit(){

    const transaction = this.addIncomeForm.value;

    this.transactionService.addTransaction(transaction,this.email).subscribe( res => {
      console.log(res);

    })

  }


}
