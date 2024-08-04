import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from '../home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Home],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'big boss';
}
