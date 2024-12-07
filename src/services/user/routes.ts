import { NextFunction, Request, Response } from "express";
import { checkAuthenticate } from "../../middleware/checks";
import { validate, validateLogin } from "./middleware/check";
import { createUser, deleteById, findAllUsers, getUserById, loginUser, updateById } from "./controller";
import { CONSTANTS } from "../../../config/configuration";
const basePath = CONSTANTS.BASE_PATH;
const currentPath = "user/";
const currentPathURL = basePath + currentPath;

export default [
  {
    path: currentPathURL + "create",
    method: "post",
    handler: [
      validate,
      async (req: Request, res: Response, next: NextFunction) => {
        const result = await createUser( req, next);
        res.status(200).send(result);
      },
    ],
  },
  {
    path: currentPathURL + "login",
    method: "post",
    handler: [
      validateLogin,
      async (req: Request, res: Response, next: NextFunction) => {
        const result = await loginUser( req, next);
        res.status(200).send(result);
      },
    ],
  },
  {
    path: currentPathURL + 'getAllUsers',
    method: "get",
    handler: [
      async (req: Request, res: Response, next: NextFunction) => {
        const result = await findAllUsers( req, next);
        res.status(200).send(result);
      },
    ],
  },
  // update profile by user
  {
    path: currentPathURL + "profileUpdate",
    method: "put",
    handler: [
      checkAuthenticate,
      async (req: Request, res: Response, next: NextFunction) => {
        const result = await updateById( req, next);
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
        const result = await getUserById(req, next);
        res.status(200).send(result);
      },
    ],
  },
  {
    path: currentPathURL + "deleteUser" + "/:id",
    method: "delete",
    handler: [
      async (req: Request, res: Response, next: NextFunction) => {
        const result = await deleteById( req, next);
        res.status(200).send(result);
      },
    ],
  },
  
];
