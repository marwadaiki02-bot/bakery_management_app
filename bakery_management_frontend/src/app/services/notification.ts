import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private apiUrl = 'http://localhost:3000/notifications';

  constructor(private http: HttpClient) {}

  getNotifications(): Observable<string[]> {
    return this.http.get<string[]>(this.apiUrl);
  }

  addNotification(message: string): Observable<string> {
    return this.http.post<string>(this.apiUrl, { message });
  }
}
