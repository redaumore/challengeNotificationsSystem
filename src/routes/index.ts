import { Router } from 'express';
import { router as messageRoutes } from '../routes/messages.routes';
import { router as homeRoutes } from '../routes/home.routes';

const router = Router();

router.use(homeRoutes);
router.use(messageRoutes);
export { router };
