const ensureAuthenticated = (request, response, next) => {
  const token = request.headers.authorization;
  if (!token) {
    return response
      .status(401).json({ message: 'Token não encontrado' }); 
  } 
  if (token.length !== 16) {
    return response
      .status(401).json({ message: 'Token inválido' }); 
  }
  next();
};

module.exports = ensureAuthenticated;