import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet,RouterLink, RouterLinkActive } from '@angular/router';
import { IStaticMethods } from 'preline/preline';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  ngOnInit() {
    setTimeout(() => {
      window.HSStaticMethods.autoInit();
    }, 100)
  }
}
