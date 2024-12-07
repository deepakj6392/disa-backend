import { NextFunction, Request, Response } from "express";
import { fileUpload } from "./controller";
import { CONSTANTS } from "../../../config/config";

const basePath = CONSTANTS.BASE_PATH;
const currentPath = "common/";
const currentPathURL = basePath + currentPath;

export default [
  {
    path: currentPathURL + 'fileUpload',
    method: "post",
    handler: [
      async (req: Request, res: Response, next: NextFunction) => {
        const result = await fileUpload(req.get(CONSTANTS.AUTHORIZATION), req, next);
        res.status(200).send(result);
      }
    ]
  },
];
