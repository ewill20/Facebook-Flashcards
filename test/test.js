"use strict";

const expect = require("chai").expect;
const server = require("../server.js");


describe("email field", () => {
    it("should contain an '@' symbol in the input field");
    it('should refuse empty submissions');
    it('should refuse submissions without "@"');
    it('should refuse invalid emails');
    it('should accept complete submissions');
})




