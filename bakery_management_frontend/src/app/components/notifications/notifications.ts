import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NotificationService } from '../../services/notification';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-notifications',
   standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './notifications.html',
  styleUrl: './notifications.css',
})
export class Notifications implements OnInit {
  notifications: string[] = [];
  newMessage: string = '';

  constructor(
    private notificationService: NotificationService,
    private themeService: ThemeService
  ) {}

  ngOnInit(): void {
    this.loadNotifications();
  }

  loadNotifications() {
    this.notificationService.getNotifications().subscribe(data => this.notifications = data);
  }

  addNotification() {
    if (this.newMessage.trim()) {
      this.notificationService.addNotification(this.newMessage).subscribe(() => {
        this.loadNotifications();
        this.newMessage = '';
        alert('🔔 Notification added / Notification ajoutée');
      });
    }
  }
   toggleDarkMode() {
    this.themeService.toggleDarkMode();
  }
}
