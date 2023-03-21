import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { DomainEvent } from '../domain/domainEvent';

@Injectable()
export class DomainEventPublisher {
  constructor(private eventEmitter: EventEmitter2) {}

  publishEvent = (domainEvent: DomainEvent) => {
    try {
      return this.eventEmitter.emit(domainEvent.eventKey);
    } catch (error) {
      new InternalServerErrorException();
    }
  };
}
