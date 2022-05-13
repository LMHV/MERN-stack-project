//const express = require('express');
//const morgan = require('morgan'); // Print in console what is being required to the server
//const path = require('path');
//const { connectDB } = require('./db.js');
//const { PORT } = require('./config.js');
//const { getUsers, getUser, createUser, deleteUser, modifyUser } = require('./routes/user.routes.js');
import express from 'express';
import morgan from 'morgan'; // Print in console what is being required to the server
import path from 'path';
import { connectDB } from './db.js';
import { PORT } from './config.js';
import usersRoutes from './routes/user.routes.js';

const app = express();
connectDB()
// Config
app.set('port', PORT || 3000);

// Middleware
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api/users', usersRoutes );

// Static Files


app.listen(app.get('port'), () => {
    console.log(`Server running on port ${app.get('port')}`)
})