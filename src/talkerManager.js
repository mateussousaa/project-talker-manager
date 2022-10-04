const fs = require('fs').promises;
const { join } = require('path');

const pathToTalkerFile = join(__dirname, 'talker.json');

const readTalkerManagerFile = async () => {
  try {
    const talkerFile = await fs.readFile(pathToTalkerFile, 'utf-8');
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

const createTalker = async (talker) => {
  try {
    const file = await readTalkerManagerFile();
    const newFile = [...file, talker];
    await fs.writeFile(pathToTalkerFile, JSON.stringify(newFile));
    return talker;
  } catch (e) {
    return null;
  }
};

module.exports = { getAllTalkers, getTalkerById, createTalker };