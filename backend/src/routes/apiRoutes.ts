import { Router } from 'express';
import appointmentsRouter from './appointmentsRouter';
import healthRouter from './healthRouter';

const apiRouter = Router();

apiRouter.use('/appointments', appointmentsRouter);
apiRouter.use('/health', healthRouter);

export default apiRouter;
