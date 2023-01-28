import * as express from 'express';
import deviceRouter from './device.routes';

const router = express.Router();

router.use('/device', deviceRouter);

export default router;

