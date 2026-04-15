import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Delivery, DeliveryService } from '../../services/delivery';

@Component({
  selector: 'app-delivery-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './delivery-list.html',
  styleUrl: './delivery-list.css',
})
export class DeliveryList implements OnInit {
  deliveries: Delivery[] = [];
  newDelivery: Delivery = { address: '', status: 'pending', orderId: 0 };

  constructor(private deliveryService: DeliveryService) {}

  ngOnInit(): void {
    this.loadDeliveries();
  }

  loadDeliveries() {
    this.deliveryService.getDeliveries().subscribe(data => this.deliveries = data);
  }

  addDelivery() {
    this.deliveryService.addDelivery(this.newDelivery).subscribe(() => {
      this.loadDeliveries();
      this.newDelivery = { address: '', status: 'pending', orderId: 0 };
      alert('🚚 New delivery added / Nouvelle livraison ajoutée');
    });
  }
  updateStatus(id: number, status: string) {
    this.deliveryService.updateDelivery(id, { status }).subscribe(() => {
      this.loadDeliveries();
      alert(`✅ Status updated to ${status} / Statut mis à jour`);
    });
  }
}