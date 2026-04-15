import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { Dashboard } from './components/dashboard/dashboard';
import { CakeList } from './components/cake-list/cake-list';
import { OrderList } from './components/order-list/order-list';
import { DeliveryList } from './components/delivery-list/delivery-list';
import { Reports } from './components/reports/reports';
import { Settings } from './components/settings/settings';
import { Notifications } from './components/notifications/notifications';
import { Demo } from './components/demo/demo';

export const routes: Routes = [
     { path: '', component: Login },
     { path: 'dashboard', component: Dashboard },
     { path: 'cakes', component: CakeList },
     { path: 'orders', component: OrderList },
     { path: 'deliveries', component: DeliveryList },
     { path: 'reports', component: Reports },
     { path: 'settings', component: Settings },
     { path: 'notifications', component: Notifications },
     { path: 'demo', component: Demo },
];
