//const express = require('express');
//const User = require('../models/user.js');
import { Router } from 'express';
import { getUsers, getUser, createUser, modifyUser, deleteUser, findUser } from '../controllers/user.controllers.js'

const router = Router();

router.get('/', getUsers)

router.get('/:id', getUser)

router.post('/', createUser)

router.put('/:id', modifyUser)

router.delete('/:id', deleteUser)

router.post('/find', findUser)

export default router