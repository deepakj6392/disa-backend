import http from "http";
import express from "express";
import { applyMiddleware, applyRoutes } from "./utils";
import middleware from "./middleware";
import errorHandlers from "./middleware/errorHandlers";
import routes from "./services";
import multer from "multer";
import path from "path";
import 'dotenv/config';
import { defaultCreates } from "./middleware/defaultCreate";
import './connection/connection';

const router = express();

router.set('views', path.join(__dirname, 'views'));
router.set("view engine", "ejs");
const upload = multer({
  storage: multer.diskStorage({
      destination: (req, file, cb) => {
          cb(null, "temp/")
      },
      filename: (req, file, cb) => {
          let customFileName =Date.now();
          // get file extension from original file name
          let fileExtension = path.extname(file.originalname).split('.')[1];
          cb(null, customFileName + '.' + fileExtension)
      }
    })
  })
router.use(upload.any());

applyMiddleware(middleware, router);
applyRoutes(routes, router);
applyMiddleware(errorHandlers, router);
defaultCreates();
const PORT = process.env.PORT || 9000;
const server = http.createServer(router);

    server.listen(PORT, () => {
      console.log(`Server is running http://localhost:${PORT}...`);
    });

