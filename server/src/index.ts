// libreries
import express from 'express';
// db
import { dbSequelize } from './db';
// middlewares
import { logsMiddw } from './middlewares';

// PORT
const PORT = process.env.PORT || 3000;

// app
const app = express();
app.use(express.json());
app.use(logsMiddw);

(async () => {
    try {
        await dbSequelize.authenticate();
        console.log('Connection with databse has been established successfully.');
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        })
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})();


