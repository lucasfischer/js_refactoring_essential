export class PriceCalculator {
    calculateFinalPrice(product) {
        return product.getFinalPrice()
    }
}

export class Product {
    #price
    #onSale
    
    constructor(price, onSale) {
        this.#price = price;
        this.#onSale = onSale;
    }

    getFinalPrice() {
        let price = this.#price;

        if (this.#onSale) {
            price = price * 0.8;
        }

        return price;
    }

}
