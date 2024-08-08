import { Routes } from '@angular/router';
import { Home } from '../pages/home/home.component';
import { AuthComponent } from '../pages/login/auth/auth.component';
import { AuthRegisterComponent } from '../pages/login/auth-register/auth-register.component';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
export const routes: Routes = [
  { path: '', component: Home },
  { path: 'login', component: AuthComponent },
  { path: 'register', component: AuthRegisterComponent},
  { path: 'dashboard', component: DashboardComponent},
];
