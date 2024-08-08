import {
  Component,
  EventEmitter,
  Input,
  input,
  OnInit,
  Output,
} from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { webSocket } from 'rxjs/webSocket';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [],
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.scss',
})
export class StatsComponent implements OnInit {
  @Input() listChild: Array<string> = ['default'];
  @Output() listChildChange = new EventEmitter<Array<string>>();

  public dataStream: any[] = [];
  public bevSubject = new BehaviorSubject({} as unknown);
  public newPrice :any = null;

  constructor(private customerService: CustomerService) {}

  public ngOnInit(): void {
    this.listChild.push('ronaldo', 'messi');

    this.updateList();

    // this.fetchData();
  }

  public updateList(): void {
    this.listChildChange.emit(this.listChild);
  }

  // public fetchData(): void {
  //   this.customerService.getCustomers().subscribe((res) => {
  //     console.log(res);
  //   });

  //   const subject = webSocket(
  //     'wss://fstream.binance.com/ws/bnbusdt@aggTrade'
  //   );
  
  //  subject.subscribe({
  //     next: (msg) => {
  //       this.dataStream.push(msg);
  //       this.bevSubject.next(msg);
  //       console.log('message received: ');
  //       console.log(msg);
  //     }, // Called whenever there is a message from the server.
  //     error: (err : any) => console.log(err), // Called if at any point WebSocket API signals some kind of error.
  //     complete: () => console.log('complete'), // Called when connection is closed (for whatever reason).
  //   });

  //   this.bevSubject.subscribe(res => {this.newPrice = res})
  // }
}
