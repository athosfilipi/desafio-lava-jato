import { Router } from 'express';
import {
  createAppointment,
  listAppointments,
  confirmAppointment,
  cancelAppointment,
  getNextAppointment
} from '../controllers/appointmentsController';

const router = Router();

router.get('/next', getNextAppointment);
router.post('/', createAppointment);
router.get('/', listAppointments);
router.put('/:id/confirm', confirmAppointment);
router.delete('/:id/cancel', cancelAppointment);

export default router;
