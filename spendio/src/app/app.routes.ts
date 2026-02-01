import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ExpenseTrackerComponent } from './pages/expense-tracker/expense-tracker.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'expenseTracker',
        component: ExpenseTrackerComponent
    }
];
