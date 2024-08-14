import express from "express";
import { rollDiceController } from "./roll-dice.controller.js";
const rollDiceRouter = express.Router();

rollDiceRouter.post("/", rollDiceController.rollDice);
rollDiceRouter.get("/history", rollDiceController.getRollDice);

export default rollDiceRouter;
