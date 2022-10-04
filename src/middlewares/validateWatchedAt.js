const verifyDateFormat = (date) => {
  // supplied by regexr.com
  const regex = /^(0[1-9]|[12]\d|3[01])[/](0[1-9]|1[0-2])[/](19|20)\d{2}$/gm;
  return date.match(regex);
};

const validateWatchedAt = (request, response, next) => {
  const { talk: { watchedAt } } = request.body;
  if (!watchedAt) {
    return response.status(400)
      .json({ message: 'O campo "watchedAt" é obrigatório' });
  }
  const isInDateFormat = verifyDateFormat(watchedAt);
  if (!isInDateFormat) {
    return response.status(400)
      .json({ message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' });
  }
  next();
};

module.exports = validateWatchedAt;