import prismaDB from "../../config/prisma.config.js";

const create = async (diceType, result) => {
  const sides = parseInt(diceType.substring(1));
  const dice = await prismaDB.diceType.upsert({
    where: {
      name: diceType,
    },
    update: {},
    create: {
      name: diceType,
      sides: sides,
    },
  });

  const data = await prismaDB.rolls.create({
    data: {
      diceTypeId: dice.id,
      result: result,
    },
  });

  return data;
};

const getRollDice = async () => {
  const result = await prismaDB.rolls.findMany({
    include: {
      diceType: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return result;
};

export const rollDiceRepository = {
  create,
  getRollDice,
};
