import { Component } from '@angular/core';
import { FooterComponent } from "../../components/footer/footer.component";
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-expense-tracker',
  imports: [FooterComponent, RouterLink, CommonModule, FormsModule],
  templateUrl: './expense-tracker.component.html',
  styleUrl: './expense-tracker.component.css'
})
export class ExpenseTrackerComponent {

}
