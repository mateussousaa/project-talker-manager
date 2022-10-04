const validateAge = (request, response, next) => {
  const { age } = request.body;
  if (age === undefined) {
    return response
      .status(400).json({ message: 'O campo "age" é obrigatório' });
  }
  if (parseInt(age, 10) < 18) {
    return response
      .status(400).json({ message: 'A pessoa palestrante deve ser maior de idade' });
  }
  next();
};

module.exports = validateAge;