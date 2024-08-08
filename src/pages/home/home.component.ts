import { Component } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { NavbarComponent } from '../../components/navbar/navbar.component'; 
import { EarlyAccessComponent } from '../../components/early-access/early-access.component';
import { Router, RouterOutlet,RouterLink, RouterLinkActive } from '@angular/router';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [NavbarComponent, FooterComponent, EarlyAccessComponent],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
  })
  export class Home {
    
  }
  