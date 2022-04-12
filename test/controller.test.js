const assert = require("assert");
const Controller = require("../src/controller");

describe('Controller', () => {
    it('should be truthy', () => {
        const controller = new Controller();
        assert(controller);
    });
});
