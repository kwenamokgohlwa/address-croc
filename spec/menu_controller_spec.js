const MenuController = require("../controllers/MenuController.js");

describe("MenuController", () => {

  beforeEach(() => {
    this.menu = new MenuController();
  });

  describe("#remindMe()", () => {
    it('should return \"Learning is a life-long pursuit\"', () => {
      expect(this.menu.remindMe()).toBe("Learning is a life-long pursuit");
    });
  });
});
