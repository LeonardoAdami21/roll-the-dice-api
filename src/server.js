import express from 'express';
import cors from 'cors';
import { appPort } from './env/envoriment.js';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../swagger.json' assert { type: "json" };
import rollDiceRouter from './roll-dice/roll-dice.router.js';

const app = express();
app.use(cors({
    origin: '*', // add the url of the frontend,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/roll', rollDiceRouter);

app.listen(appPort, () => {
    console.log(`Server running on port http://localhost:${appPort}/api-docs`);
})