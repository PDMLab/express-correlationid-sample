'use strict';

require('should');

describe('SUT', () => {
  beforeEach((done) => {
    return done();
  });

  describe('When being invoked', () => {
    it('should do stuff', (done) => {
      (true).should.be.false();
      return done();
    });
  });
});
