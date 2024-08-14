const rollDice = (req, res) => {
  try {
    const { dice } = req.body;
    const sides = parseInt(dice.substring(1));
    if (isNaN(sides) || sides <= 1) {
      return res.status(400).json("Invalid dice");
    }
    const result = Math.floor(Math.random() * sides) + 1;
    return res.status(201).json({ result });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const rollDiceController = {
  rollDice,
};
