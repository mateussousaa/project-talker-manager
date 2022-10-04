const verifyEmailValid = (email) => {
  // supplied by regexr.com
  const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  return email.match(regex);
};

const validateEmail = (request, response, next) => {
  const { email } = request.body;
  if (!email) {
    return response.status(400)
      .json({ message: 'O campo "email" é obrigatório' }); 
  }
  const emailIsValid = verifyEmailValid(email);
  if (!emailIsValid) {
    return response.status(400)
      .json({ message: 'O "email" deve ter o formato "email@email.com"' }); 
  }
  next();
};

module.exports = validateEmail;