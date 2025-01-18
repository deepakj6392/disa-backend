import { createDefaultBrands } from "../services/brand/controller";
import { createDefaultProducts } from "../services/product/controller";
import { createDefaultQuestions } from "../services/question/controller";
import { createDefaultRetailChain } from "../services/retail-chain/controller";
import { createDefaultSKUS } from "../services/skus/controller";
import { createDefaultStoreFormat } from "../services/store-format/controller";
import { createDefaultStores } from "../services/store/controller";
import { createDefaultSurveyQuestions } from "../services/survey-question/controller";
import { createDefaultSurveys } from "../services/survey/controller";
import { createDefaultUsers } from "../services/user/controller";
import { createDefaultVisits } from "../services/visit/controller";


export const defaultCreates = async () => {
    const v1 = await createDefaultUsers();
    const v2 = await createDefaultBrands();
    const v3 = await createDefaultProducts();
    const v4 = await createDefaultQuestions();
    const v5 = await createDefaultRetailChain();
    const v6 = await createDefaultSKUS();
    const v7 = await createDefaultStoreFormat();
    const v8 = await createDefaultStores();
    const v10 = await createDefaultSurveys();
    const v9 = await createDefaultVisits();
    const v11 = await createDefaultSurveyQuestions();
};