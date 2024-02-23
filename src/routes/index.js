import { Router } from "express";
import { home, login, registro, insertUsers, showUsers, deleteUsers } from "../controllers/controllers.js";


const router = Router();

router.get('/', home);
router.get('/login', login );
router.get('/registro', registro);

router.get('/connect', showUsers);

router.post('/insertUsers', insertUsers)

router.post('/deleteUsers', deleteUsers)
export default router;