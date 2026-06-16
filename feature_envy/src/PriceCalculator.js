export class PriceCalculator {
    calculateFinalPrice(product) {
        let price = product.getPrice();

        if (product.isOnSale()) {
            price = price * 0.8;
        }

        return price;
    }
}

export class Product {
    constructor(price, onSale) {
        this.price = price;
        this.onSale = onSale;
    }

    getPrice() {
        return this.price;
    }

    isOnSale() {
        return this.onSale;
    }
}