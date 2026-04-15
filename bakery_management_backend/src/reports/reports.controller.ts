import { Controller, Get } from '@nestjs/common';
import { ReportsService } from './reports.service';

@Controller('reports')
export class ReportsController {
  constructor(private readonly reportsService: ReportsService) {}

  @Get('sales')
  getSales() {
    return this.reportsService.getSalesStats();
  }

  @Get('orders')
  getOrders() {
    return this.reportsService.getOrdersStats();
  }

  @Get('deliveries')
  getDeliveries() {
    return this.reportsService.getDeliveriesStats();
  }
}
