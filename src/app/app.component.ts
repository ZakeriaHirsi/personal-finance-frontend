import { Component } from '@angular/core';
import { Home } from '../components/home/home.component';
import { Nav } from '../components/nav/nav.component';

import { Router, RouterOutlet, Event, NavigationEnd } from '@angular/router';

import { IStaticMethods } from 'preline/preline';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Home, Nav, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'big boss';
}
