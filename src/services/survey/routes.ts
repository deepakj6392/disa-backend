import { NextFunction, Request, Response } from "express";
import { checkAuthenticate } from "../../middleware/checks";
import { validate } from "./middleware/check";
import { CONSTANTS } from "../../../config/configuration";
import { createSurvey, deleteSurveyById, findAllSurveys, getSurveyById, updateSurveyById } from "./controller";
const basePath = CONSTANTS.BASE_PATH;
const currentPath = "survey/";
const currentPathURL = basePath + currentPath;

export default [
  {
    path: currentPathURL + "create",
    method: "post",
    handler: [
      validate,
      async (req: Request, res: Response, next: NextFunction) => {
        const result = await createSurvey( req, next);
        res.status(200).send(result);
      },
    ],
  },
  {
    path: currentPathURL + 'getAllSurveys',
    method: "get",
    handler: [
      async (req: Request, res: Response, next: NextFunction) => {
        const result = await findAllSurveys( req, next);
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
        const result = await updateSurveyById( req, next);
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
        const result = await getSurveyById(req, next);
        res.status(200).send(result);
      },
    ],
  },
  {
    path: currentPathURL + ":id",
    method: "delete",
    handler: [
      async (req: Request, res: Response, next: NextFunction) => {
        const result = await deleteSurveyById( req, next);
        res.status(200).send(result);
      },
    ],
  },
  
];
