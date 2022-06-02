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
import userRoutes from './routes/user.routes.js';
import cardRoutes from './routes/card.routes.js';
import packageRoutes from './routes/package.routes.js';
import flightRoutes from './routes/flight.routes.js'
import cors from 'cors'


const app = express();
connectDB()
// Config
app.set('port', PORT || 3000);

// Middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({
    origin: "*",
    methods: ["GET", "POST", "DELETE", "PUT"]
}))

// Routes
app.use('/api/users', userRoutes );
app.use('/api/cards', cardRoutes);
app.use('/api/packages', packageRoutes);
app.use('/api/flights', flightRoutes)

// Static Files


app.listen(app.get('port'), () => {
    console.log(`Server running on port ${app.get('port')}`)
})