const express = require('express');
const { getAllTalkers, getTalkerById, createTalker,
  editTalker, deleteTalker } = require('../talkerManager');
const ensureAuthenticated = require('../middlewares/ensureAuthenticated');
const validateName = require('../middlewares/validateName');
const validateAge = require('../middlewares/validateAge');
const validateTalk = require('../middlewares/validateTalk');
const validateWatchedAt = require('../middlewares/validateWatchedAt');
const validateRate = require('../middlewares/validateRate');
const generateID = require('../utils/generateId');

const router = express.Router();

router.get('/talker', async (request, response) => {
  const people = await getAllTalkers();
  return response.status(200).json(people);
});

router.get('/talker/:id', async (request, response) => {
  const { id } = request.params;
  const selectedPeople = await getTalkerById(id);
  if (!selectedPeople) {
    return response.status(404).json({ message: 'Pessoa palestrante não encontrada' }); 
  }
  return response.status(200).json(selectedPeople);
});

router.post('/talker',
 ensureAuthenticated, 
 validateName, 
 validateAge,
 validateTalk,
 validateWatchedAt,
 validateRate, async (request, response) => {
  try {
    const { name, age, talk } = request.body;
    const id = await generateID();
    const talker = { name, age, id, talk };
    await createTalker(talker);
    return response.status(201).json(talker);
  } catch (e) {
    return response.status(400).json({ message: 'error' });
  }
});

router.put('/talker/:id',
ensureAuthenticated, 
validateName, 
validateAge,
validateTalk,
validateWatchedAt,
validateRate, async (request, response) => {
  try {
  const { id } = request.params;
  const { name, age, talk } = request.body;
  const talker = await editTalker(id, { name, age, talk });
  return response.status(200).json(talker);
  } catch (e) {
    return response.status(400).json({ message: 'error' });
  }
});

router.delete('/talker/:id', 
ensureAuthenticated, async (request, response) => {
  try {
  const { id } = request.params;
  console.log(id);
  await deleteTalker(id);
  return response.status(204).json();
  } catch (e) {
    return response.status(400).json({ message: 'error' });
  }
});

module.exports = router;