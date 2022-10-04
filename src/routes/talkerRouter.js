const express = require('express');
const { getAllTalkers, getTalkerById } = require('../talkerManager');

const router = express.Router();

router.get('/talker', async (request, response) => {
  const people = await getAllTalkers();
  response.status(200).json(people);
});

router.get('/talker/:id', async (request, response) => {
  const { id } = request.params;
  const selectedPeople = await getTalkerById(id);
  if (!selectedPeople) {
    return response.status(404).json({ message: 'Pessoa palestrante não encontrada' }); 
  }
  return response.status(200).json(selectedPeople);
});

module.exports = router;