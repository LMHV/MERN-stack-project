import { Router } from 'express';
import { findCardOffers, getCards } from '../controllers/card.controller.js'

const router = Router();

router.get('/', getCards)

router.get('/offer', findCardOffers)

export default router;