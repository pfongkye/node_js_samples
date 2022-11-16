import dotenv from 'dotenv';
import express from 'express';
import seedController from './controllers/seedController.js';

import todosController from './controllers/todosController.js';
import vanillaController from './controllers/vanillaController.js';
import getCollection from './infrastructure/mongo.js';

dotenv.config();

const port = process.env.PORT || 3000;

const app = express();

const collection = await getCollection();
//NOTE: how to close connection to DB

seedController(app, collection);
todosController(app, collection);
vanillaController(app);

app.listen(port, ()=> {
    console.log('Server running on port:' + port);
})
