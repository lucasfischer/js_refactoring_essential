import { strict as assert } from "assert";
import {ShippingCalculator} from "../src/ShippingCalculator.js";

describe("ShippingCalculator", () => {
    it("Order 1001", async () => {
        const calculator = new ShippingCalculator();
        const cost = await calculator.calculateShipping(1001);

        assert.equal(cost, 2.5);
    })
})