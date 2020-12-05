"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _express = _interopRequireDefault(require("express"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

const { UP_STAGE } = process.env;

const Router = _express.default.Router();

Router.get('/test', (request, response) => {
  response.json({
    success: true,
    // logging the deployment stage for clarity
    stage: UP_STAGE });

});var _default =

Router;exports.default = _default;