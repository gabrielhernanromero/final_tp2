import { Router} from 'express';
import controller from '../container/container.js';



const router = Router();

router.get('/', controller.getAll);
 


export default router;