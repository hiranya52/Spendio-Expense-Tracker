import { Component } from '@angular/core';
import { FooterComponent } from "../../components/footer/footer.component";
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { expense } from '../../../model/expense.model';
import { TrackerHeaderComponent } from "../../components/tracker-header/tracker-header.component";
import { user } from '../../../model/user.model';

@Component({
  selector: 'app-expense-tracker',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './expense-tracker.component.html',
  styleUrl: './expense-tracker.component.css'
})
export class ExpenseTrackerComponent {

  user!: user

  constructor(private router: Router) {}

  ngOnInit() {
    this.user = history.state.user;
  }

  

}
