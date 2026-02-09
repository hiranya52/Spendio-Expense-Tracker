import { Component } from '@angular/core';
import { FooterComponent } from "../../components/footer/footer.component";
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { expense } from '../../../model/expense.model';
import { TrackerHeaderComponent } from "../../components/tracker-header/tracker-header.component";

@Component({
  selector: 'app-expense-tracker',
  imports: [FooterComponent, RouterLink, CommonModule, FormsModule, TrackerHeaderComponent],
  templateUrl: './expense-tracker.component.html',
  styleUrl: './expense-tracker.component.css'
})
export class ExpenseTrackerComponent {

  salary = 0;
  balance = 0;

  plannedExpenses: expense[] = [];
  completedExpenses: expense[] = [];

  salaryInput = 0;

  expName = '';
  expAmount: number | null = null;
  expCategory = 'Utilities';

  setSalary() {
    if (isNaN(this.salaryInput)) return;

    this.salary = this.salaryInput;
    this.salaryInput = 0;

    this.updateCalculations();
  }

  planExpense() {

    if (!this.expName || this.expAmount === null) {
      alert('Please fill all fields');
      return;
    }

    const expense: expense = {
      id: Date.now(),
      name: this.expName,
      amount: this.expAmount,
      category: this.expCategory
    };

    this.plannedExpenses.push(expense);

    this.expName = '';
    this.expAmount = null;
    this.expCategory = 'Utilities';

    this.updateCalculations();
  }

  completeExpense(id: number) {

    const index = this.plannedExpenses.findIndex(e => e.id === id);
    if (index === -1) return;

    const item = this.plannedExpenses[index];

    this.completedExpenses.push(item);
    this.plannedExpenses.splice(index, 1);

    this.updateCalculations();
  }

  get totalPlanned() {
    return this.plannedExpenses.reduce((s, e) => s + e.amount, 0);
  }

  get totalSpent() {
    return this.completedExpenses.reduce((s, e) => s + e.amount, 0);
  }

  updateCalculations() {
    this.balance = this.salary - this.totalSpent;
  }

}
