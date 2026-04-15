import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Delivery {
  id?: number;
  address: string;
  status: string;
  orderId: number;
}

@Injectable({
  providedIn: 'root'
})
export class DeliveryService {
  private apiUrl = 'http://localhost:3000/deliveries';

  constructor(private http: HttpClient) {}

  getDeliveries(): Observable<Delivery[]> {
    return this.http.get<Delivery[]>(this.apiUrl);
  }

  addDelivery(delivery: Delivery): Observable<Delivery> {
    return this.http.post<Delivery>(this.apiUrl, delivery);
  }

  updateDelivery(id: number, delivery: Partial<Delivery>): Observable<any> {
    return this.http.patch(`${this.apiUrl}/${id}`, delivery);
  }
}
