'use strict';

const Api1Controller = require('./api1Controller');

/**
 * Initialize controllers
 */
class Controllers {
  /**
   * @param {Object} app
   */
  init(app) {
    new Api1Controller(app);
  }
}

module.exports = new Controllers();