import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet,RouterLink, RouterLinkActive } from '@angular/router';
import { IStaticMethods } from 'preline/preline';
@Component({
  selector: 'app-navbar-dark',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './navbar-dark.component.html',
  styleUrl: './navbar-dark.component.scss'
})
export class NavbarDarkComponent implements OnInit {
  ngOnInit() {
    setTimeout(() => {
      window.HSStaticMethods.autoInit();
    }, 100)
  }
}
