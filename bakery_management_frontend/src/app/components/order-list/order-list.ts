import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Order, OrderService } from '../../services/order';

@Component({
  selector: 'app-order-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './order-list.html',
  styleUrl: './order-list.css',
})
export class OrderList implements OnInit {
  orders: Order[] = [];
  newOrder: Order = { client: '', quantity: 1, cakeId: 0 };

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.loadOrders();
  }

  loadOrders() {
    this.orderService.getOrders().subscribe(data => this.orders = data);
  }

  addOrder() {
    this.orderService.addOrder(this.newOrder).subscribe(() => {
      this.loadOrders();
      this.newOrder = { client: '', quantity: 1, cakeId: 0 };
      alert('🧾 New order added / Nouvelle commande ajoutée');
    });
  }
}
