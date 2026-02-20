import { transaction } from './../../../model/transaction.model';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AddExpenseService } from '../../service/addExpense/add-expense.service';

@Component({
  selector: 'app-add-expense',
  imports: [CommonModule, NgIf, ReactiveFormsModule, CommonModule],
  templateUrl: './add-expense.component.html',
  styleUrl: './add-expense.component.css'
})
export class AddExpenseComponent{

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

  console.log(transaction);


}





}
