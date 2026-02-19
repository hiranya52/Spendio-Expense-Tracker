import { Component } from '@angular/core';
import { NavBarComponent } from "../../components/nav-bar/nav-bar.component";
import { HeroComponent } from "../../components/hero/hero.component";
import { FeaturesComponent } from "../../components/highlights/highlights.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { ExpenseTrackerComponent } from "../expense-tracker/expense-tracker.component";
import { LogInComponent } from "../log-in/log-in.component";
import { SignUpComponent } from "../sign-up/sign-up.component";

@Component({
  selector: 'app-home',
  imports: [NavBarComponent, HeroComponent, FeaturesComponent, FooterComponent, ExpenseTrackerComponent, LogInComponent, SignUpComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
