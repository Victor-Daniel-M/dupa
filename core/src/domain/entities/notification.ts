import { BaseEntity } from 'base/base.entity';
import { Column, Entity } from 'typeorm';

@Entity('NotificationStrategy')
export class NotificationStrategy extends BaseEntity {
  constructor(o: Object) {
    super();
    Object.assign(this, o);
  }

  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  code: string;

  @Column({ nullable: true })
  desc: string;

  @Column({ nullable: true })
  createdAt: string;

  @Column({ nullable: true })
  updatedAt: string;
}

@Entity('NotificationFrequency')
export class NotificationFrequency extends BaseEntity {
  constructor(o: Object) {
    super();
    Object.assign(this, o);
  }

  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  code: string;

  @Column({ nullable: true })
  desc: string;

  @Column({ nullable: true })
  createdAt: string;

  @Column({ nullable: true })
  updatedAt: string;
}

@Entity('NotificationSubscribable')
export class NotificationSubscribable extends BaseEntity {
  constructor(o: Object) {
    super();
    Object.assign(this, o);
  }

  @Column({ nullable: true })
  actionId: string;

  @Column({ nullable: true })
  createdAt: string;

  @Column({ nullable: true })
  updatedAt: string;

  @Column({ nullable: true })
  notificationStrategyId: string;

  @Column({ nullable: true })
  notificationFrequencyId: string;
}

@Entity('NotificationSubscriber')
export class NotificationSubscriber extends BaseEntity {
  constructor(o: Object) {
    super();
    Object.assign(this, o);
  }

  @Column({ nullable: true })
  entityId: string;

  @Column({ nullable: true })
  entityName: string;

  @Column({ nullable: true })
  createdAt: string;

  @Column({ nullable: true })
  updatedAt: string;

  @Column({ nullable: true })
  notificationSubscribableId: string;
}
