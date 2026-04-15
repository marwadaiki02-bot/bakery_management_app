import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Cake {
  id?: number;
  name: string;
  category: string;
  price: number;
  stock: number;
}

@Injectable({
  providedIn: 'root'
})
export class CakeService {
  private apiUrl = 'http://localhost:3000/cakes';

  constructor(private http: HttpClient) {}

  getCakes(): Observable<Cake[]> {
    return this.http.get<Cake[]>(this.apiUrl);
  }

  addCake(cake: Cake): Observable<Cake> {
    return this.http.post<Cake>(this.apiUrl, cake);
  }

  updateCake(id: number, cake: Partial<Cake>): Observable<any> {
    return this.http.patch(`${this.apiUrl}/${id}`, cake);
  }

  deleteCake(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
