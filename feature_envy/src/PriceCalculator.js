export class PriceCalculator {
    calculateFinalPrice(product) {
        return product.getFinalPrice()
    }
}

export class Product {
    constructor(price, onSale) {
        this.price = price;
        this.onSale = onSale;
    }

    getFinalPrice() {
        let price = this.getPrice();

        if (this.isOnSale()) {
            price = price * 0.8;
        }

        return price;
    }

    getPrice() {
        return this.price;
    }

    isOnSale() {
        return this.onSale;
    }
}
