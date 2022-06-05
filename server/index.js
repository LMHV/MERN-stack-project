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
import session from 'express-session'

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
app.use(session({
    secret: 'secretIDsession',
    cookie: { maxAge: 150000 },
    saveUninitialized: false
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