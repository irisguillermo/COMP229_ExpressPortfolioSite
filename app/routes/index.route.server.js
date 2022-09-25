import { Router } from "express";
import { helloHTML, helloJSON, helloNODEJs } from "../controllers/index.server.js";

const router = Router ();

router.get('/hello1', helloNODEJs);
router.get('/html', helloHTML);
router.get('/json', helloJSON)

export default router;