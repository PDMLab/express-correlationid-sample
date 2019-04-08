'use strict';
const handler = require('./api1Handler');

/**
 * Controller for API 1
 */
class Api1Controller {
  /**
   *
   * @param {Object} app
   */
  constructor(app) {
    this.logger = app.get('logger');
    app.get('/api1/hello', (req, res) => {
      this.logger.debug('some test');
      console.log(`API 1 controller correlation id: ${req.correlationId()}`);
      return handler.handle(req, res);
    });

    app.get('/api1/hellofail', (req, res) => {
      console.log(`API 1 controller fail correlation id: ${req.correlationId()}`);
      return handler.handleFail(req, res);
    });
  }
}

module.exports = Api1Controller;
