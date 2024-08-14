import { rollDiceService } from "./roll-dice.service.js";

const rollDice = async (req, res) => {
  try {
    const { diceType } = req.body;
    const result = await rollDiceService.createRollDice(diceType);
    return res.status(201).json({ result });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const getRollDice = async(req, res) => {
  try {
    const result = await rollDiceService.getRollDice();
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const rollDiceController = {
  rollDice,
  getRollDice,
};
