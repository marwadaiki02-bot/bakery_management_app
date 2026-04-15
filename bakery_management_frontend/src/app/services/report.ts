import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  private apiUrl = 'http://localhost:3000/reports';

  constructor(private http: HttpClient) {}

  getSales(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/sales`);
  }

  getOrders(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/orders`);
  }

  getDeliveries(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/deliveries`);
  }
}
