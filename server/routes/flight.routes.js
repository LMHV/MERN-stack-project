import {Router} from 'express'
import { findFlights } from '../controllers/flight.controller';

const router = Router();

router.get('/', findFlights)

export default router