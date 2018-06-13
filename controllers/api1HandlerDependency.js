'use strict';

const correlator = require('express-correlation-id');

/**
 * Does some work as a dependency
 */
class Dependency {
  /**
   * Do some work as a dependency sync
   */
  doWorkSync() {
    console.log(`API 1 sync dependency correlation id: ${correlator.getId()}`);
  }

  /**
   * Do some work as a dependency async
   * @return {Promise<any>}
   */
  doWork() {
    return new Promise((resolve, reject) => {
      console.log(`API 1 async dependency correlation id: ${correlator.getId()}`);
      return resolve();
    });
  }
  
  /**
   * Do some work as a dependency async
   * @return {Promise<any>}
   */
  doFailingWork() {
    return new Promise((resolve, reject) => {
      console.log(`API 1 async dependency correlation id: ${correlator.getId()}`);
      return reject();
    });
  }
}

module.exports = new Dependency();
