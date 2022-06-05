import { Router } from 'express';
import { getPackages, findPackageOffers } from '../controllers/package.controller.js'


const router = Router();

router.get('/', getPackages)

router.get('/offer', findPackageOffers)

export default router;