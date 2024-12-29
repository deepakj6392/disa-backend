import { NextFunction, Request, Response } from "express";
import { checkAuthenticate } from "../../middleware/checks";
import { validate } from "./middleware/check";
import { CONSTANTS } from "../../../config/configuration";
import { createQuestion, deleteQuestionById, findAllQuestions, getQuestionById, updateQuestionById } from "./controller";
const basePath = CONSTANTS.BASE_PATH;
const currentPath = "question/";
const currentPathURL = basePath + currentPath;

export default [
  {
    path: currentPathURL + "create",
    method: "post",
    handler: [
      validate,
      async (req: Request, res: Response, next: NextFunction) => {
        const result = await createQuestion( req, next);
        res.status(200).send(result);
      },
    ],
  },
  {
    path: currentPathURL + 'getAllQuestions',
    method: "get",
    handler: [
      async (req: Request, res: Response, next: NextFunction) => {
        const result = await findAllQuestions( req, next);
        res.status(200).send(result);
      },
    ],
  },
  {
    path: currentPathURL + ":id",
    method: "put",
    handler: [
      checkAuthenticate,
      async (req: Request, res: Response, next: NextFunction) => {
        const result = await updateQuestionById( req, next);
        res.status(200).send(result);
      },
    ],
  },
  {
    path: currentPathURL,
    method: "get",
    handler: [
      checkAuthenticate,
      async (req: Request, res: Response, next: NextFunction) => {
        const result = await getQuestionById(req, next);
        res.status(200).send(result);
      },
    ],
  },
  {
    path: currentPathURL + ":id",
    method: "delete",
    handler: [
      async (req: Request, res: Response, next: NextFunction) => {
        const result = await deleteQuestionById( req, next);
        res.status(200).send(result);
      },
    ],
  },
  
];
