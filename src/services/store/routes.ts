import { NextFunction, Request, Response } from "express";
import { checkAuthenticate } from "../../middleware/checks";
import { validate } from "./middleware/check";
import { CONSTANTS } from "../../../config/configuration";
import { createStore, deleteStoreById, findAllStores, getStoreById, updateStoreById } from "./controller";
const basePath = CONSTANTS.BASE_PATH;
const currentPath = "store/";
const currentPathURL = basePath + currentPath;

export default [
  {
    path: currentPathURL + "create",
    method: "post",
    handler: [
      validate,
      async (req: Request, res: Response, next: NextFunction) => {
        const result = await createStore( req, next);
        res.status(200).send(result);
      },
    ],
  },
  {
    path: currentPathURL + 'getAllStores',
    method: "get",
    handler: [
      async (req: Request, res: Response, next: NextFunction) => {
        const result = await findAllStores( req, next);
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
        const result = await updateStoreById( req, next);
        res.status(200).send(result);
      },
    ],
  },
  {
    path: currentPathURL+':id',
    method: "get",
    handler: [
      checkAuthenticate,
      async (req: Request, res: Response, next: NextFunction) => {
        const result = await getStoreById(req, next);
        res.status(200).send(result);
      },
    ],
  },
  {
    path: currentPathURL + ":id",
    method: "delete",
    handler: [
      async (req: Request, res: Response, next: NextFunction) => {
        const result = await deleteStoreById( req, next);
        res.status(200).send(result);
      },
    ],
  },
  
];
