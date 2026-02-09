import { Component } from '@angular/core';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ContactInfoComponent } from "../../components/contact-info/contact-info.component";
import { ContactHeroComponent } from "../../components/contact-hero/contact-hero.component";
import { ContactFormComponent } from "../../components/contact-form/contact-form.component";
import { FaqSectionComponent } from "../../components/faq-section/faq-section.component";

@Component({
  selector: 'app-contact-us',
  imports: [NavBarComponent, FooterComponent, ContactInfoComponent, ContactHeroComponent, ContactFormComponent, FaqSectionComponent],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {

}
