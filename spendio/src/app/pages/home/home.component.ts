import { Component } from '@angular/core';
import { NavBarComponent } from "../../components/nav-bar/nav-bar.component";
import { HeroComponent } from "../../components/hero/hero.component";
import { FeaturesComponent } from "../../components/highlights/highlights.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { AddIncomeComponent } from "../../components/add-income/add-income.component";
import { ContactFormComponent } from "../../components/contact-form/contact-form.component";
import { ContactUsComponent } from "../contact-us/contact-us.component";


@Component({
  selector: 'app-home',
  imports: [NavBarComponent, HeroComponent, FeaturesComponent, FooterComponent, ContactFormComponent, ContactUsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
