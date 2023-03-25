export const TYPES = {
  services: {
    EmailService: 'EmailService',
    S3Provider: 'S3Provider',
  },
  databases: {
    // _: {
    //   connectionName: '_',
    // },
  },
  repositories: {
    Repository: 'Repository',
    UsersRepositoryImpl: 'UsersRepositoryImpl',
    PropertyRepositoryImpl: 'PropertyRepositoryImpl',
    ReactionRepositoryImpl: 'ReactionRepositoryImpl',
    ScheduleRepositoryImpl: 'ScheduleRepositoryImpl',
    UserPropertyRepositoryImpl: 'UserPropertyRepositoryImpl',
    UserTenancyAgreementRepositoryImpl: 'UserTenancyAgreementRepositoryImpl',
    TenancyAgreementRepositoryImpl: 'TenancyAgreementRepositoryImpl',
    PaymentRepositoryImpl: 'PaymentRepositoryImpl',
    PaymentMethodRepositoryImpl: 'PaymentMethodRepositoryImpl',
    PaymentCategoryRepositoryImpl: 'PaymentCategoryRepositoryImpl',
    ApplicationRepositoryImpl: 'ApplicationRepositoryImpl',
    ComplaintRepositoryImpl: 'ComplaintRepositoryImpl',
  },
  useCases: {
    OwnerRegisterUsecase: 'OwnerRegisterUsecase',
    RealtorRegisterUsecase: 'RealtorRegisterUsecase',
    SearcherRegisterUsecase: 'SearcherRegisterUsecase',
    SearcherLoginUsecase: 'SearcherLoginUsecase',
    AssignPropertyByOwnerUsecase: 'AssignPropertyByOwnerUsecase',
  },
};
