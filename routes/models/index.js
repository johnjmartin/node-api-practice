const models = require('express').Router();
const all = require('./all');
const single = require('./single');
const cars = require('./cars');
const data = require('../../data.json');


const findObject = require('../../utils/findObject');

models.param('modelId', findObject('model'));



models.get('/', all);
models.get('/:modelId', single);

models.use('/:modelId/cars', cars);

module.exports = models;