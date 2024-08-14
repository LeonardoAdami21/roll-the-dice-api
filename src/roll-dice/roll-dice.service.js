import { rollDiceRepository } from "./repositories/roll-dice.repository.js";

const createRollDice = async (diceType) => {
  try {
    const sides = parseInt(diceType.substring(1));
    if (isNaN(sides) || sides <= 1) {
      throw new Error("Invalid dice");
    }
    const result = Math.floor(Math.random() * sides) + 1;
    await rollDiceRepository.create(diceType, result);
    return result;
  } catch (error) {
    throw new Error({ error: error.message });
  }
};

const getRollDice = async () => {
  try {
    const dice = await rollDiceRepository.getRollDice();
    return dice;
  } catch (error) {
    throw new Error({ error: error.message });
  }
};

export const rollDiceService = {
  createRollDice,
  getRollDice,
};
