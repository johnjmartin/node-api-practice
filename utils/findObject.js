const data = require('../data.json');

module.exports = type => {
  return (req, res, next, value) => {
    const typePlural = `${type}s`;
    const obj = data[typePlural].find(t => t.id === (value * 1));

   //passes model into request so is accessible in later route handlers
    if (obj) {
      req[type] = obj;
      next();
    } else {
      res.status(404).send(`Invalid ${type} ID`);
    }
  };
};