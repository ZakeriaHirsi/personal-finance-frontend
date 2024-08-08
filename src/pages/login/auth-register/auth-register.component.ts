import { Component } from '@angular/core';
import { RegisterComponent } from '../../../components/register/register.component';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-auth-register',
  standalone: true,
  imports: [RegisterComponent, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './auth-register.component.html',
  styleUrl: './auth-register.component.scss',
})
export class AuthRegisterComponent {}
