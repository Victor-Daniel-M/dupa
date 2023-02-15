import { CString } from '../value-objects/string';

// Notifications
export class NotificationStrategy {
  id: CString;
  name: CString;
  code: CString;
  desc: CString;
  createdAt: CString;
  updatedAt: CString;
}

export class NotificationFrequency {
  id: CString;
  name: CString;
  code: CString;
  desc: CString;
  createdAt: CString;
  updatedAt: CString;
}

export class NotificationSubscribable {
  id: CString;
  actionId: CString;
  createdAt: CString;
  updatedAt: CString;
  notificationStrategyId: CString;
  notificationFrequencyId: CString;
}

export class NotificationSubscriber {
  id: CString;
  entityId: CString;
  entityName: CString;
  createdAt: CString;
  updatedAt: CString;
  notificationSubscribableId: CString;
}
