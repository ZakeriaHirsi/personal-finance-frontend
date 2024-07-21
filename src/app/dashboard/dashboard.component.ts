import { Component, EventEmitter, Input, input, OnInit, Output } from '@angular/core';
import { CustomerService } from '../services/customer.service'

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit{
  @Input() listChild: Array<string> = ['default'];
  @Output() listChildChange = new EventEmitter<Array<string>>();

  constructor(private customerService: CustomerService) {}

  public ngOnInit(): void {
    this.listChild.push('ronaldo', 'messi');

    this.updateList();
  }

  public updateList(): void {
      this.listChildChange.emit(this.listChild);
  }

}