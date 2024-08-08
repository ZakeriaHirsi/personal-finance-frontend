import { Component } from '@angular/core';
import { LoginComponent } from '../../../components/login/login.component';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [LoginComponent, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
})
export class AuthComponent {}
