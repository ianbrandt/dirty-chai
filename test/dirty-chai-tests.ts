/// <reference types="mocha" />
/// <reference path="../lib/dirty-chai.d.ts" />

const expect = chai.expect;

import dirtyChai = require("../lib/dirty-chai");

chai.use(dirtyChai);

describe('dirty-chai', function () {

  // TODO: These won't work until dirty-chai.d.ts issues are resolved.
  // describe('#ok()', function () {
  //   it('should assert as a function', function () {
  //     expect(true).to.be.ok();
  //   });
  // });
  //
  // describe('#true()', function () {
  //   it('should assert as a function', function () {
  //     expect(true).to.be.true();
  //   });
  // });
  //
  // describe('#false()', function () {
  //   it('should assert as a function', function () {
  //     expect(false).to.be.false();
  //   });
  // });
  //
  // describe('#null()', function () {
  //   it('should assert as a function', function () {
  //     expect(null).to.be.null();
  //   });
  // });
  //
  // describe('#undefined()', function () {
  //   it('should assert as a function', function () {
  //     expect(undefined).to.be.undefined();
  //   });
  // });
  //
  // describe('#NaN()', function () {
  //   it('should assert as a function', function () {
  //     expect(NaN).to.be.NaN();
  //   });
  // });
  //
  // describe('#exist()', function () {
  //   it('should assert as a function', function () {
  //     expect(1).to.exist();
  //   });
  // });
  //
  // describe('#empty()', function () {
  //   it('should assert as a function', function () {
  //     expect([]).to.be.empty();
  //   });
  // });
  //
  // describe('#arguments()', function () {
  //   it('should assert as a function', function () {
  //     expect(arguments).to.be.arguments();
  //   });
  // });
  //
  // describe('#Arguments()', function () {
  //   it('should assert as a function', function () {
  //     expect(arguments).to.be.Arguments();
  //   });
  // });
  //
  // describe('#extensible()', function () {
  //   it('should assert as a function', function () {
  //     expect({}).to.be.extensible();
  //   });
  // });
  //
  // describe('#sealed()', function () {
  //   it('should assert as a function', function () {
  //     const sealedObject = Object.seal({});
  //     expect(sealedObject).to.be.sealed();
  //   });
  // });
  //
  // describe('#frozen()', function () {
  //   it('should assert as a function', function () {
  //     const frozenObject = Object.freeze({});
  //     expect(frozenObject).to.be.frozen();
  //   });
  // });

  describe('#finite()', function () {
    it('should assert as a function', function () {
      expect(1).to.be.finite();
    });
  });
});