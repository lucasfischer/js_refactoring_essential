export class ShippingCalculator {

    #fetchOrderDetails
    
    constructor(fetchOrderDetails) {
        this.#fetchOrderDetails = fetchOrderDetails
    }
    
    async calculateShipping(orderId) {
        try {
            const order = await this.#fetchOrderDetails(orderId);

            return calculateShippingCost(order);
        } catch (e) {
            console.log(e);
            return -1;
        }
    }
}

export async function fetchOrderDetails(orderId) {
    const response = await fetch(
        `https://codemanship.co.uk/api/orders.php?orderId=${orderId}`
    );

    if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
    }

    return await response.json();
}

export function calculateShippingCost(order) {
    switch (order.shippingType) {
        case "STANDARD":
            return order.weightKg * 0.5;

        case "EXPRESS":
            return order.weightKg * 0.8 + order.distanceKm * 0.1;

        case "OVERNIGHT":
            return order.weightKg * 1.2 + 25;

        case "INTERNATIONAL":
            return order.weightKg * 1.5;

        default:
            throw new Error(`Unknown shipping type: ${order.shippingType}`);
    }
}
