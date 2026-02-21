import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, NgIf } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { TransactionService } from '../../service/transaction/transaction.service';
import { ExpenseTrackerComponent } from '../../pages/expense-tracker/expense-tracker.component';
import { ViewService } from '../../service/viewService/view.service';

@Component({
  selector: 'app-add-income',
  imports: [CommonModule, NgIf, ReactiveFormsModule],
  templateUrl: './add-income.component.html',
  styleUrl: './add-income.component.css'
})
export class AddIncomeComponent {

  @Input() email!: string;
  addIncomeForm: FormGroup;
  isOpen = false;

  private transactionService = inject(TransactionService);
  private expenseTracker = inject(ExpenseTrackerComponent);

  constructor(
    private addService: ViewService,
    private formBuilder: FormBuilder
  ){
    this.addService.isOpen('income').subscribe(open => this.isOpen = open);

    this.addIncomeForm = formBuilder.group({
      title: [''],
      category: [''],
      amount: [''],
      date: [''],
      type: ['INCOME']
    })

  }

  onClose() {
    this.addService.close('income');
  }

  onSubmit(){

    const transaction = this.addIncomeForm.value;

    this.transactionService.addTransaction(transaction,this.email).subscribe( res => {
      this.expenseTracker.addNewTransaction(res);
      this.onClose();
      this.expenseTracker.calculateTotalBalance();
    })

  }


}
