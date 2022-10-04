const { getAllTalkers } = require('../talkerManager');

const generateID = async () => {
  const takers = await getAllTalkers();
  const amount = takers.length;
  const lastTaker = takers[amount - 1];
  console.log(lastTaker.id);
  return lastTaker.id + 1;
};

module.exports = generateID;