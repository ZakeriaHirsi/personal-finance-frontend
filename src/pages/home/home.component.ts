import { Component } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { NavbarComponent } from '../../components/navbar/navbar.component'; 
import { Router, RouterOutlet,RouterLink, RouterLinkActive } from '@angular/router';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [NavbarComponent, FooterComponent],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
  })
  export class Home {
    
  }
  