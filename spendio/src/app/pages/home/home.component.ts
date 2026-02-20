import { Component } from '@angular/core';
import { NavBarComponent } from "../../components/nav-bar/nav-bar.component";
import { HeroComponent } from "../../components/hero/hero.component";
import { FeaturesComponent } from "../../components/highlights/highlights.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { SignUpComponent } from "../sign-up/sign-up.component";
import { AddExpenseComponent } from "../../components/add-expense/add-expense.component";

@Component({
  selector: 'app-home',
  imports: [NavBarComponent, HeroComponent, FeaturesComponent, FooterComponent, SignUpComponent, AddExpenseComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
