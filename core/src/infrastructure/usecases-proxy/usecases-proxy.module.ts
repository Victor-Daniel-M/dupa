import { DynamicModule, Module } from '@nestjs/common';

import { UserRepositoryImpl } from '../repositories/user-repository';
import { PropertyRepositoryImpl } from '../repositories/property-repository';
import { UseCaseProxy } from './usecases-proxy';
import { NotificationService } from '../services/notificationService';
import { EmailService } from '../services/emailService';
import { LoginBrokerViaSystemUsecase } from '@core/application/usecases/loginBrokerViaSystem';

@Module({})
export class UsecasesProxyModule {
  // Auth
  static LOGIN_BROKER_VIA_SYSTEM = 'loginBrokerViaSystem';
  static LOGIN_SEARCHER_VIA_SYSTEM = 'loginSearcherViaSystem';
  static RECORD_LISTING_BY_BROKER = 'recordListingByBroker';
  static REGISTER_AS_BROKER_VIA_SYSTEM = 'registerAsBrokerViaSystem';
  static REGISTER_AS_SEARCHER_VIA_SYSTEM = 'registerAsSearcherViaSystem';
  static SEARCH_LISTINGS = 'searchListings';

  static register(): DynamicModule {
    return {
      module: UsecasesProxyModule,
      providers: [
        {
          inject: [
            NotificationService,
            EmailService,
            PropertyRepositoryImpl,
            UserRepositoryImpl,
          ],
          provide: UsecasesProxyModule.LOGIN_BROKER_VIA_SYSTEM,
          useFactory: (data: {
            userRepository: UserRepositoryImpl;
            emailService: EmailService;
          }) => new UseCaseProxy(new LoginBrokerViaSystemUsecase(data)),
        },
      ],
      exports: [UsecasesProxyModule.LOGIN_BROKER_VIA_SYSTEM],
    };
  }
}
