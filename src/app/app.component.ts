import { Component } from '@angular/core';
import { Home } from '../pages/home/home.component';
import { AuthComponent } from '../pages/login/auth/auth.component';

import { Router, RouterOutlet,RouterLink, RouterLinkActive } from '@angular/router';

import { IStaticMethods } from 'preline/preline';
import { FooterComponent } from '../components/footer/footer.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Home, AuthComponent, RouterLink, RouterLinkActive ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'big boss';
}
