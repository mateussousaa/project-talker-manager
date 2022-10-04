const validatePassword = (request, response, next) => {
  const { password } = request.body;
  if (!password) {
    return response.status(400)
      .json({ message: 'O campo "password" é obrigatório' }); 
  }
  if (password.length < 6) {
    return response.status(400)
    .json({ message: 'O "password" deve ter pelo menos 6 caracteres' }); 
  }

  next();
};

module.exports = validatePassword;