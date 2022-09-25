import { Router } from "express";
import { helloHTML, helloNODEJs } from "../controllers/index.server.js";

const router = Router ();

router.get('/hello1', helloNODEJs);
router.get('/html', helloHTML);


export default router;