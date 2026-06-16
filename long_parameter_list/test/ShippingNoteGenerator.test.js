import assert from "assert";
import {ShippingNoteGenerator} from "../src/ShippingNoteGenerator.js";

describe("ShippingNoteGenerator", () => {
    const shippingNoteGenerator = new ShippingNoteGenerator();

    it("should generate shipping note with all input fields", () => {
        const result = shippingNoteGenerator.generateShippingNote(
            "Jane",
            "Doe",
            "12 Baker Street",
            "Flat 4B",
            "London",
            "NW1 6XE",
            "UK",
            "ORD-123",
            "Wireless Headphones",
            2
        );

        assert.ok(result.includes("Order: ORD-123"));
        assert.ok(result.includes("Customer: Jane Doe"));
        assert.ok(result.includes("Item: Wireless Headphones"));
        assert.ok(result.includes("Quantity: 2"));

        assert.ok(result.includes("12 Baker Street"));
        assert.ok(result.includes("Flat 4B"));
        assert.ok(result.includes("London"));
        assert.ok(result.includes("NW1 6XE"));
        assert.ok(result.includes("UK"));
    });

    it("should include customer full name", () => {
        const result = shippingNoteGenerator.generateShippingNote(
            "John",
            "Smith",
            "1 High Street",
            "Apt 2",
            "Manchester",
            "M1 2AB",
            "UK",
            "ORD-999",
            "Laptop",
            1
        );

        assert.ok(result.includes("Customer: John Smith"));
    });

    it("should include order id and item details", () => {
        const result = shippingNoteGenerator.generateShippingNote(
            "Alice",
            "Brown",
            "50 King Street",
            "Unit 3",
            "Birmingham",
            "B1 1AA",
            "UK",
            "ORD-555",
            "Tablet",
            5
        );

        assert.ok(result.includes("Order: ORD-555"));
        assert.ok(result.includes("Item: Tablet"));
        assert.ok(result.includes("Quantity: 5"));
    });

    it("should include full address across all fields", () => {
        const result = shippingNoteGenerator.generateShippingNote(
            "Emma",
            "Jones",
            "99 High Road",
            "Floor 2",
            "Leeds",
            "LS1 4AB",
            "UK",
            "ORD-777",
            "Monitor",
            3
        );

        assert.ok(result.includes("99 High Road"));
        assert.ok(result.includes("Floor 2"));
        assert.ok(result.includes("Leeds"));
        assert.ok(result.includes("LS1 4AB"));
        assert.ok(result.includes("UK"));
    });

    it("should include quantity correctly", () => {
        const result = shippingNoteGenerator.generateShippingNote(
            "Tom",
            "White",
            "10 Market Street",
            "",
            "Liverpool",
            "L1 8JQ",
            "UK",
            "ORD-321",
            "Keyboard",
            10
        );

        assert.ok(result.includes("Quantity: 10"));
    });
});