import { NextFunction, Request, Response } from "express";
import { checkAuthenticate } from "../../middleware/checks";
import { validate } from "./middleware/check";
import { CONSTANTS } from "../../../config/configuration";
import { createSurveySubmission, deleteSurveySubmissionById, findAllSurveySubmissionByUser, findAllSurveySubmissions, getSurveySubmissionById } from "./controller";
const basePath = CONSTANTS.BASE_PATH;
const currentPath = "survey-submission/";
const currentPathURL = basePath + currentPath;

export default [
  {
    path: currentPathURL + "create",
    method: "post",
    handler: [
      validate,
      async (req: Request, res: Response, next: NextFunction) => {
        const result = await createSurveySubmission( req, next);
        res.status(200).send(result);
      },
    ],
  },
  {
    path: currentPathURL + 'getAllSurveySubmissions',
    method: "get",
    handler: [
      async (req: Request, res: Response, next: NextFunction) => {
        const result = await findAllSurveySubmissions( req, next);
        res.status(200).send(result);
      },
    ],
  },
  {
    path: currentPathURL + '/user/:id',
    method: "get",
    handler: [
      async (req: Request, res: Response, next: NextFunction) => {
        const result = await findAllSurveySubmissionByUser( req, next);
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
        const result = await getSurveySubmissionById(req, next);
        res.status(200).send(result);
      },
    ],
  },
  {
    path: currentPathURL + ":id",
    method: "delete",
    handler: [
      async (req: Request, res: Response, next: NextFunction) => {
        const result = await deleteSurveySubmissionById( req, next);
        res.status(200).send(result);
      },
    ],
  },
  
];
