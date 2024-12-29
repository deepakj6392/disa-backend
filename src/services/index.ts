import userRoutes from './user/routes';
import commonRoutes from './common/routes';
import brandRoutes from './brand/routes';
import productRoutes from './product/routes';
import retailChainRoutes from './retail-chain/routes';
import skusRoutes from './skus/routes';
import storeRoutes from './store/routes';
import storeFormatRoutes from './store-format/routes';
import surveyRoutes from './survey/routes';
import visitRoutes from './visit/routes';
import questionRoutes from './question/routes';
import surveyQuestionRoutes from './survey-question/routes';
import surveySubmissionRoutes from './survey-submission/routes';

export default [
    ...userRoutes,
    ...commonRoutes,
    ...brandRoutes,
    ...productRoutes,
    ...retailChainRoutes,
    ...skusRoutes,
    ...storeRoutes,
    ...storeFormatRoutes,
    ...surveyRoutes,
    ...visitRoutes,
    ...questionRoutes,
    ...surveyQuestionRoutes,
    ...surveySubmissionRoutes,  
];
