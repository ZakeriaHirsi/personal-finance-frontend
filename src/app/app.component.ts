import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from '../components/home/home.component';
import { Nav } from '../components/nav/nav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Home, Nav],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'big boss';
}
