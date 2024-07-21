import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashboardComponent } from "./dashboard/dashboard.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  public title: string = '';
  public display = true; 
  public list: Array<string> = []

  public ngOnInit(): void {
    this.title = 'shush';
    this.list.push('zakaria', 'hanad', 'ak');
    console.log(this.list);
  }

}
