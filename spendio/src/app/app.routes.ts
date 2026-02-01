import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ExpenseTrackerComponent } from './pages/expense-tracker/expense-tracker.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'expenseTracker',
        component: ExpenseTrackerComponent
    },
    {
      path: 'contactUs',
      component: ContactUsComponent
    }
];
