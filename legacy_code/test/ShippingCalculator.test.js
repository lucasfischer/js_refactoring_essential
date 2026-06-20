import { strict as assert } from "assert";
import {ShippingCalculator, calculateShippingCost} from "../src/ShippingCalculator.js";

async function orderCost(orderId) {
    const calculator = new ShippingCalculator(mockFetchOrderDetails, calculateShippingCost);
    return await calculator.calculateShipping(orderId);
}

function mockFetchOrderDetails(orderId) {
    let orders = {
        1001: { "orderId": 1001, "shippingType": "STANDARD", "weightKg": 5, "distanceKm": 120, "fragile": false },
        1002: { "orderId": 1002, "shippingType": "EXPRESS", "weightKg": 8.5, "distanceKm": 300, "fragile": true },
        1003: { "orderId": 1003, "shippingType": "OVERNIGHT", "weightKg": 2, "distanceKm": 50, "fragile": false },
        1004: {"orderId":1004,"shippingType":"INTERNATIONAL","weightKg": 2,"distanceKm":50,"fragile":false}
    }
    return orders[orderId]
}

describe("calculateShippingCost", () => {
    it("Order 1001", () => {
        const order = mockFetchOrderDetails(1001)
        const cost = calculateShippingCost(order)
        assert.equal(cost, 2.5);
    })

    it("Order 1002", async () => {
        const order = mockFetchOrderDetails(1002)
        const cost = calculateShippingCost(order)
        assert.equal(cost, 36.8);
    })
    it("Order 1003", async () => {
        const order = mockFetchOrderDetails(1003)
        const cost = calculateShippingCost(order)
        assert.equal(cost, 27.4);
    })
    it("Order 1004", async () => {
        const order = mockFetchOrderDetails(1004)
        const cost = calculateShippingCost(order)
        assert.equal(cost, 3);
    })
})

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
