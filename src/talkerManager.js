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

const getAllTalkers = async () => {
  const file = await readTalkerManagerFile();
  return file;
};

const getTalkerById = async (id) => {
  const file = await readTalkerManagerFile();
  return file.find((p) => p.id === parseInt(id, 10));
};

module.exports = { getAllTalkers, getTalkerById };