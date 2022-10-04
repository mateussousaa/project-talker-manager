const validateTalk = (request, response, next) => {
  const { talk } = request.body;
  if (!talk) {
    return response
      .status(400).json({ message: 'O campo "talk" é obrigatório' });
  }
  next();
};

module.exports = validateTalk;