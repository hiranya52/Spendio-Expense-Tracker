import { ExpenseTrackerComponent } from './../../pages/expense-tracker/expense-tracker.component';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, NgIf } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import { TransactionService } from '../../service/transaction/transaction.service';
import { ViewService } from '../../service/viewService/view.service';

@Component({
  selector: 'app-add-expense',
  imports: [CommonModule, NgIf, ReactiveFormsModule],
  templateUrl: './add-expense.component.html',
  styleUrl: './add-expense.component.css'
})
export class AddExpenseComponent{

  @Input() userEmail!: string;

  private transactionService = inject(TransactionService);

  private expenseTracker = inject(ExpenseTrackerComponent);

  isOpen = false;

  addExpForm: FormGroup;

  constructor(
    private addService: ViewService,
    private formBuilder: FormBuilder
  ) {
    this.addService.isOpen('expense').subscribe(open => this.isOpen = open);

    this.addExpForm = formBuilder.group({
      title: [''],
      category: [''],
      amount: [''],
      date: [''],
      type: ['EXPENSE']
    })

  }

onClose() {
  this.addService.close('expense');
}


onSubmit(){

  const transaction = this.addExpForm.value;

  this.transactionService.addTransaction(transaction, this.userEmail).subscribe(res => {
    this.expenseTracker.addNewTransaction(res);
    this.onClose();
  })


}

}
