import { BaseEntity } from 'base/base.entity';
import { Column, Entity } from 'typeorm';

@Entity('NotificationStrategy')
export class NotificationStrategy extends BaseEntity {
  constructor(o: Object) {
    super();
    Object.assign(this, o);
  }

  @Column()
  name: string;

  @Column()
  code: string;

  @Column()
  desc: string;

  @Column()
  createdAt: string;

  @Column()
  updatedAt: string;
}

@Entity('NotificationFrequency')
export class NotificationFrequency extends BaseEntity {
  constructor(o: Object) {
    super();
    Object.assign(this, o);
  }

  @Column()
  name: string;

  @Column()
  code: string;

  @Column()
  desc: string;

  @Column()
  createdAt: string;

  @Column()
  updatedAt: string;
}

@Entity('NotificationSubscribable')
export class NotificationSubscribable extends BaseEntity {
  constructor(o: Object) {
    super();
    Object.assign(this, o);
  }

  @Column()
  actionId: string;

  @Column()
  createdAt: string;

  @Column()
  updatedAt: string;

  @Column()
  notificationStrategyId: string;

  @Column()
  notificationFrequencyId: string;
}

@Entity('NotificationSubscriber')
export class NotificationSubscriber extends BaseEntity {
  constructor(o: Object) {
    super();
    Object.assign(this, o);
  }

  @Column()
  entityId: string;

  @Column()
  entityName: string;

  @Column()
  createdAt: string;

  @Column()
  updatedAt: string;

  @Column()
  notificationSubscribableId: string;
}
