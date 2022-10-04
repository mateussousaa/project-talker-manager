const fs = require('fs').promises;
const { join } = require('path');

const readTalkerManagerFile = async () => {
  try {
    const talkerFile = await fs.readFile(join(__dirname, 'talker.json'), 'utf-8');
    return JSON.parse(talkerFile);
  } catch (e) {
    return null;
  }
};

const getAllPeople = async () => {
  const file = await readTalkerManagerFile();
  return file;
};

module.exports = getAllPeople;