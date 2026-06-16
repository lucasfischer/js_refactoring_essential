import { strict as assert } from "assert";
import { PriceCalculator, Product } from "../src/PriceCalculator.js";

describe("PriceCalculator", () => {
    const calculator = new PriceCalculator();

    it("should apply discount when product is on sale", () => {
        const product = new Product(100.0, true);

        const result = calculator.calculateFinalPrice(product);

        assert.equal(result, 80.0);
    });

    it("should not apply discount when product is not on sale", () => {
        const product = new Product(100.0, false);

        const result = calculator.calculateFinalPrice(product);

        assert.equal(result, 100.0);
    });

    it("should return zero when price is zero even if on sale", () => {
        const product = new Product(0.0, true);

        const result = calculator.calculateFinalPrice(product);

        assert.equal(result, 0.0);
    });
});