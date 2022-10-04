const express = require('express');
const bodyParser = require('body-parser');
const { getAllTalkers, getTalkerById } = require('./talkerManager');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.get('/talker', async (request, response) => {
  const people = await getAllTalkers();
  response.status(HTTP_OK_STATUS).json(people);
});

app.get('/talker/:id', async (request, response) => {
  const { id } = request.params;
  const selectedPeople = await getTalkerById(id);
  if (!selectedPeople) {
    return response.status(404).json({ message: 'Pessoa palestrante não encontrada' }); 
  }
  return response.status(HTTP_OK_STATUS).json(selectedPeople);
});

app.listen(PORT, () => {
  console.log('Online');
});
