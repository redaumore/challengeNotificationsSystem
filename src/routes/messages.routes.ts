import { Router } from 'express';
import { send } from '../controllers/messages.controller';

const router = Router();
router.post('/messages', send);

export { router };
