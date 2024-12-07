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


const upload: any = multer({ dest: "temp/" });
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

