import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class CustomerService {
 public customers = ['ronaldo', 'messi', 'neymar'];

  getCars(): string[] {
    return this.customers;
  }

  getCar(id: number) {
    return this.customers[id];
  }
}