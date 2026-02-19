import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Component } from '@angular/core';


@Component({
  selector: 'app-tracker-header',
  imports: [RouterLink, CommonModule],
  templateUrl: './tracker-header.component.html',
  styleUrl: './tracker-header.component.css'
})
export class TrackerHeaderComponent {

  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

}
