// Notifications
export interface INotificationStrategy {
  id?: string;
  name: string;
  code: string;
  desc: string;
  createdAt: string;
  updatedAt: string;
}

export interface INotificationFrequency {
  id?: string;
  name: string;
  code: string;
  desc: string;
  createdAt: string;
  updatedAt: string;
}

export interface INotificationSubscribable {
  id?: string;
  actionId: string;
  createdAt: string;
  updatedAt: string;
  notificationStrategyId: string;
  notificationFrequencyId: string;
}

export interface INotificationSubscriber {
  id?: string;
  entityId: string;
  entityName: string;
  createdAt: string;
  updatedAt: string;
  notificationSubscribableId: string;
}
