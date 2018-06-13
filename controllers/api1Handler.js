'use strict';

const correlator = require('express-correlation-id');
const dependency = require('./api1HandlerDependency');

/**
 * Handler for API 1
 */
class Api1Handler {
  /**
   *
   * @param {Object} req
   * @param {Object} res
   */
  handle(req, res) {
    console.log(`API 1 handler correlation id: ${req.correlationId()}`);
    dependency.doWorkSync();
    dependency.doWork()
      .then(() => res.status(200).send('hello world!'));
  }

  /**
   *
   * @param {Object} req
   * @param {Object} res
   */
  handleFail(req, res) {
    console.log(`API 1 fail handler correlation id: ${req.correlationId()}`);
    dependency.doWorkSync();
    dependency.doFailingWork()
      .then(() => res.status(200).send('hello world!'))
      .catch((err) => {
        console.log(`API 1 fail handler catch correlation id: ${correlator.getId()}`);
        return res.status(500).send(err);
      });
  }
}

module.exports = new Api1Handler();
