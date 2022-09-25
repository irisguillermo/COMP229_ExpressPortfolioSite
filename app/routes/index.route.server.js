import { Router } from "express";
import {  displayMainPage} from "../controllers/index.controller.server.js";

const router = Router ();

router.get('/MainPage', displayMainPage);



export default router;