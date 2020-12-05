"use strict";var _express = _interopRequireDefault(require("express"));

var _routes = _interopRequireDefault(require("./routes"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

const { PORT } = process.env;

const app = (0, _express.default)();

app.use('/api', _routes.default);

app.listen(PORT, () =>
console.log('Listening on port: ', PORT));