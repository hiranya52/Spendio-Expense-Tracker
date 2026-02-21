import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { AddExpenseService } from '../../service/addExpense/add-expense.service';

@Component({
  selector: 'app-add-income',
  imports: [CommonModule, NgIf, ReactiveFormsModule],
  templateUrl: './add-income.component.html',
  styleUrl: './add-income.component.css'
})
export class AddIncomeComponent {

  addIncomeForm: FormGroup;

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

    

  }


}
