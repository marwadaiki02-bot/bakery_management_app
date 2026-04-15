import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { Dashboard } from './components/dashboard/dashboard';
import { CakeList } from './components/cake-list/cake-list';
import { OrderList } from './components/order-list/order-list';

export const routes: Routes = [
     { path: '', component: Login },
     { path: 'dashboard', component: Dashboard },
     { path: 'cakes', component: CakeList },
     { path: 'orders', component: OrderList },
];
