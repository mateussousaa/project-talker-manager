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
  return file.find((t) => t.id === parseInt(id, 10));
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

const editTalker = async (id, { name, age, talk }) => {
  try {
    const file = await readTalkerManagerFile();
    const index = file.findIndex((t) => t.id === parseInt(id, 10));
    file[index].name = name;
    file[index].age = age;
    file[index].talk = talk;
    await fs.writeFile(pathToTalkerFile, JSON.stringify(file));
    return file[index];
  } catch (e) {
    return null;
  }
};

const deleteTalker = async (id) => {
  try {
    const file = await readTalkerManagerFile();
    const filteredFile = file.filter((t) => t.id !== parseInt(id, 10));
    console.log(filteredFile);
    await fs.writeFile(pathToTalkerFile, JSON.stringify(filteredFile));
    return filteredFile;
  } catch (e) {
    return null;
  }
};  

const searchTalker = async (query) => {
  try {
    const file = await readTalkerManagerFile();
    const talkers = file.filter(({ name }) => name.includes(query));
    return talkers;
  } catch (e) {
    return null;
  }
};

module.exports = { getAllTalkers, getTalkerById, createTalker, editTalker, deleteTalker, searchTalker };