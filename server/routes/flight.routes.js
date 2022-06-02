import {Router} from 'express'
import { findFlights } from '../controllers/flight.controller.js';

const router = Router();

router.post('/', findFlights)

export default router