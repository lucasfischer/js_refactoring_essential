import { strict as assert } from "assert";
import {ShippingCalculator, fetchOrderDetails} from "../src/ShippingCalculator.js";

async function orderCost(orderId) {
    const calculator = new ShippingCalculator(mockFetchOrderDetails);
    return await calculator.calculateShipping(orderId);
}

async function mockFetchOrderDetails(orderId) {
    let orders = {
        1001: { "orderId": 1001, "shippingType": "STANDARD", "weightKg": 5, "distanceKm": 120, "fragile": false },
        1002: { "orderId": 1002, "shippingType": "EXPRESS", "weightKg": 8.5, "distanceKm": 300, "fragile": true },
        1003: {"orderId":1003,"shippingType":"OVERNIGHT","weightKg":2,"distanceKm":50,"fragile":false}
    }
    return orders[orderId]
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
