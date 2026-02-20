import { user } from './../../../model/user.model';
import { transaction } from './../../../model/transaction.model';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, NgIf } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import { AddExpenseService } from '../../service/addExpense/add-expense.service';
import { TransactionService } from '../../service/transaction/transaction.service';

@Component({
  selector: 'app-add-expense',
  imports: [CommonModule, NgIf, ReactiveFormsModule, CommonModule],
  templateUrl: './add-expense.component.html',
  styleUrl: './add-expense.component.css'
})
export class AddExpenseComponent{

  @Input() userEmail!: string;

  private transactionService = inject(TransactionService);

  isOpen = false;

  addExpForm: FormGroup;

  constructor(
    private addService: AddExpenseService,
    private formBuilder: FormBuilder
  ) {
    this.addService.isOpen$.subscribe(open => this.isOpen = open);

    this.addExpForm = formBuilder.group({
      title: [''],
      category: [''],
      amount: [''],
      date: [''],
      type: ['EXPENSE'],
    })

  }

onClose() {
  this.addService.close();
}


onSubmit(){

  const transaction = this.addExpForm.value;

  this.transactionService.addTransaction(transaction, this.userEmail).subscribe(res => {
    console.log(res);

  })

}




}
