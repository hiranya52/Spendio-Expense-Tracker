import { CommonModule, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AddExpenseService } from '../../service/addExpense/add-expense.service';

@Component({
  selector: 'app-add-expense',
  imports: [CommonModule, NgIf],
  templateUrl: './add-expense.component.html',
  styleUrl: './add-expense.component.css'
})
export class AddExpenseComponent implements OnInit{

  isOpen = false;

  constructor(private addService: AddExpenseService) {
    // this.addService.isOpen$.subscribe(open => this.isOpen = open);
  }
  ngOnInit(): void {
  this.addService.isOpen$.subscribe(open => this.isOpen = open);
}

onClose() {
  this.addService.close();
}

}
