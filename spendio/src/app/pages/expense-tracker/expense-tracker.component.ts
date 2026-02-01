import { Component } from '@angular/core';
import { FooterComponent } from "../../components/footer/footer.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-expense-tracker',
  imports: [FooterComponent, RouterLink],
  templateUrl: './expense-tracker.component.html',
  styleUrl: './expense-tracker.component.css'
})
export class ExpenseTrackerComponent {

}
