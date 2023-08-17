import { REAL_ESTATE_TYPES } from '@real-estate/types';
import {
  StatisticsCountsGraphsUsecase,
  StatisticsCountsViewUsecase,
} from './index'; // Update the path

const statisticsCountsGraphsUsecase = {
  provide: REAL_ESTATE_TYPES.useCases.StatisticsCountsGraphsUsecase,
  useClass: StatisticsCountsGraphsUsecase,
};

const statisticsCountsViewUsecase = {
  provide: REAL_ESTATE_TYPES.useCases.StatisticsCountsViewUsecase,
  useClass: StatisticsCountsViewUsecase,
};

export const statisticsUsecaseProviders = [
  statisticsCountsGraphsUsecase,
  statisticsCountsViewUsecase,
];
