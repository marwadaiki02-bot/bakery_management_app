import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReportService } from '../../services/report';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reports.html',
  styleUrl: './reports.css',
})
export class Reports implements OnInit {
  sales: any[] = [];
  orders: any[] = [];
  deliveries: any[] = [];

  constructor(private reportService: ReportService) {}

  ngOnInit(): void {
    this.reportService.getSales().subscribe(data => this.sales = data);
    this.reportService.getOrders().subscribe(data => this.orders = data);
    this.reportService.getDeliveries().subscribe(data => this.deliveries = data);
  }
}