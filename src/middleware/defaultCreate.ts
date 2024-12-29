import { createDefaultQuestions } from "../services/question/controller";
import { createDefaultUsers } from "../services/user/controller";


export const defaultCreates = async () => {
    await Promise.all([createDefaultUsers(),createDefaultQuestions()])
};