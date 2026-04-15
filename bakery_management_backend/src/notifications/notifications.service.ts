import { Injectable } from '@nestjs/common';

@Injectable()
export class NotificationsService {
  private notifications: string[] = [];

  findAll(): string[] {
    return this.notifications;
  }

  add(message: string): string {
    this.notifications.push(message);
    return message;
  }
}
