import { Component } from '@angular/core';
import { NavBarComponent } from "../../components/nav-bar/nav-bar.component";
import { HeroComponent } from "../../components/hero/hero.component";

@Component({
  selector: 'app-home',
  imports: [NavBarComponent, HeroComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
