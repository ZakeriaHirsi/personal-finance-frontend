import { Component } from '@angular/core';
import { NavbarDarkComponent } from '../../components/navbar-dark/navbar-dark.component';
import { SidebarComponent } from '../../components/sidebar/sidebar/sidebar.component';
import { StatsComponent } from '../../components/stats/stats.component';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NavbarDarkComponent, SidebarComponent, StatsComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
