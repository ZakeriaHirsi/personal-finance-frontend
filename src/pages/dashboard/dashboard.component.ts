import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { SidebarComponent } from '../../components/sidebar/sidebar/sidebar.component';
import { StatsComponent } from '../../components/stats/stats.component';
import { TableComponent } from '../../components/table/table.component';
import { ScoreComponent } from '../../components/score/score.component';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NavbarComponent, SidebarComponent, StatsComponent, TableComponent, ScoreComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
