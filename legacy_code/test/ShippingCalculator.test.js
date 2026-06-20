import { strict as assert } from "assert";
import {ShippingCalculator, fetchOrderDetails} from "../src/ShippingCalculator.js";

async function orderCost(orderId) {
    const calculator = new ShippingCalculator(fetchOrderDetails);
    return await calculator.calculateShipping(orderId);
}

describe("ShippingCalculator", () => {
    it("Order 1001", async () => {
        const cost = await orderCost(1001);
        assert.equal(cost, 2.5);
    })

    it("Order 1002", async () => {
        const cost = await orderCost(1002);
        assert.equal(cost, 36.8);
    })
    it("Order 1003", async () => {
        const cost = await orderCost(1003);
        assert.equal(cost, 27.4);
    })

})
