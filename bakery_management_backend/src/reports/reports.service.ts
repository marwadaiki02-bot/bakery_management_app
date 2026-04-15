import { Injectable } from '@nestjs/common';

@Injectable()
export class ReportsService {
  getSalesStats() {
    return [
      { cake: 'Tarte aux pommes', total: 120 },
      { cake: 'Cheesecake', total: 85 },
    ];
  }

  getOrdersStats() {
    return [
      { month: 'March', orders: 45 },
      { month: 'April', orders: 60 },
    ];
  }

  getDeliveriesStats() {
    return [
      { status: 'pending', count: 10 },
      { status: 'in-progress', count: 5 },
      { status: 'delivered', count: 40 },
    ];
  }
}
