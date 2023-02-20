// Notifications
export class NotificationStrategy {
  id: string;
  name: string;
  code: string;
  desc: string;
  createdAt: string;
  updatedAt: string;
}

export class NotificationFrequency {
  id: string;
  name: string;
  code: string;
  desc: string;
  createdAt: string;
  updatedAt: string;
}

export class NotificationSubscribable {
  id: string;
  actionId: string;
  createdAt: string;
  updatedAt: string;
  notificationStrategyId: string;
  notificationFrequencyId: string;
}

export class NotificationSubscriber {
  id: string;
  entityId: string;
  entityName: string;
  createdAt: string;
  updatedAt: string;
  notificationSubscribableId: string;
}
