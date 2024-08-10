import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})

export class SidebarComponent implements OnInit {
  ngOnInit() {
    setTimeout(() => {
      window.HSStaticMethods.autoInit();
    }, 100)
  }
}
