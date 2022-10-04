const validateName = (request, response, next) => {
  const { name } = request.body;
  if (!name) {
    return response
      .status(400).json({ message: 'O campo "name" é obrigatório' }); 
}
  if (name.length < 3) {
    return response
      .status(400).json({ message: 'O "name" deve ter pelo menos 3 caracteres' }); 
  }
  next();
};

module.exports = validateName;