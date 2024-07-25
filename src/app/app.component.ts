import { Component, OnInit } from '@angular/core';
import { DashboardComponent } from "./dashboard/dashboard.component";

import { Router, RouterOutlet, Event, NavigationEnd } from '@angular/router';

import { IStaticMethods } from 'preline/preline';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DashboardComponent, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  public title: string = '';
  public display = true; 
  public list: Array<string> = []

  constructor(private router: Router) {
    
  }

  public ngOnInit(): void {
    // this.title = 'shush';
    // this.list.push('zakaria', 'hanad', 'ak');
    // console.log(this.list);
  }

  public ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.

    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        setTimeout(() => {
          if (typeof window !== "undefined") {
            window.HSStaticMethods.autoInit();
         }
        }, 100);
      }
    });
    
  }

}
