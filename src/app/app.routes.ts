import { Routes } from '@angular/router';
import { Home } from '../pages/home/home.component';
import { AuthComponent } from '../pages/login/auth/auth.component';
import { AuthRegisterComponent } from '../pages/login/auth-register/auth-register.component';
export const routes: Routes = [
  { path: '', component: Home },
  { path: 'login', component: AuthComponent },
  { path: 'register', component: AuthRegisterComponent},
];
