import { strict as assert } from "assert";
import {ShippingCalculator} from "../src/ShippingCalculator.js";

async function orderCost(orderId) {
    const calculator = new ShippingCalculator();
    return await calculator.calculateShipping(1001);
}

describe("ShippingCalculator", () => {
    it("Order 1001", async () => {
        const cost = await orderCost(1001);

        assert.equal(cost, 2.5);
    })
})