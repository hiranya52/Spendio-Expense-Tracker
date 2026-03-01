import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ExpenseTrackerComponent } from './pages/expense-tracker/expense-tracker.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { LogInComponent } from './pages/log-in/log-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'logIn',
    component: LogInComponent,
  },
  {
    path: 'signUp',
    component: SignUpComponent,
  },
  {
    path: 'expenseTracker',
    component: ExpenseTrackerComponent,
  },
  {
    path: 'contactUs',
    component: ContactUsComponent,
  },
];
