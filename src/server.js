import express from 'express';
import cors from 'cors';
import { appPort } from './env/envoriment';

const app = express();
app.use(cors({
    origin: '*', // add the url of the frontend,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(appPort, () => {
    console.log(`Server running on port http://localhost:${appPort}/api-docs`);
})