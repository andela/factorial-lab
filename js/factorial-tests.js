(function(){
  'use strict';
  describe("Factorial", function() {
    it("5 Factorial should be 120", function() {
      expect(Factorial(5)).toBe(120);
    });

    it("2 Factorial should be 2", function() {
      expect(Factorial(2)).toBe(2);
    });

    it("10 Factorial should be 3628800", function() {
      expect(Factorial(10)).toBe(3628800);
    });
  });
})();