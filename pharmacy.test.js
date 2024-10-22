// import { Drug, Pharmacy } from "./pharmacy.js";
require("@babel/register");
import { Drug, Pharmacy } from "./pharmacy.js";


describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 2)],
    );
  });

  // More fue tests

  it("should not decrease the benefit below 0", () => {
    expect(new Pharmacy([new Drug("test", 2, 0)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 0)]
    );
  });

  it("should increase the benefit of Herbal Tea", () => {
    expect(new Pharmacy([new Drug("Herbal Tea", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("Herbal Tea", 1, 4)]
    );
  });

  it("should increase the benefit of Herbal Tea twice as fast after expiration", () => {
    expect(new Pharmacy([new Drug("Herbal Tea", 0, 3)]).updateBenefitValue()).toEqual(
      [new Drug("Herbal Tea", -1, 5)]
    );
  });

  it("should not increase the benefit above 50", () => {
    expect(new Pharmacy([new Drug("Herbal Tea", 2, 50)]).updateBenefitValue()).toEqual(
      [new Drug("Herbal Tea", 1, 50)]
    );
  });

  it("should never decrease Magic Pill's benefit or expiresIn", () => {
    expect(new Pharmacy([new Drug("Magic Pill", 15, 40)]).updateBenefitValue()).toEqual(
      [new Drug("Magic Pill", 15, 40)]
    );
  });

  it("should handle Fervex benefit increases correctly", () => {
    expect(new Pharmacy([new Drug("Fervex", 10, 35)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", 9, 37)]
    );
  });

  it("should drop Fervex benefit to 0 after expiration", () => {
    expect(new Pharmacy([new Drug("Fervex", 0, 35)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", -1, 0)]
    );
  });

  it("should degrade Dafalgan benefit twice as fast", () => {
    expect(new Pharmacy([new Drug("Dafalgan", 2, 6)]).updateBenefitValue()).toEqual(
      [new Drug("Dafalgan", 1, 4)]
    );
  });

});
