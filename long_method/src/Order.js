export class Order {
    #items;
    #customer;

    constructor(items, customer) {
        this.#items = items;
        this.#customer = customer;
    }

    validate() {
        if (this.#items == null) {
            throw new Error("Items cannot be null");
        }
        if (this.#items.length === 0) {
            throw new Error("Order must contain items");
        }
    }

    calculateSubtotal() {
        let subtotal = 0.0;
        for (const item of this.#items) {
            subtotal += item.getPrice() * item.getQuantity();
        }
        return subtotal
    }

    calculateDiscount(subtotal) {
        let discount = 0.0;
        if (this.#customer.isLoyal()) {
            discount = subtotal * 0.10;
        } else if (subtotal > 100) {
            discount = subtotal * 0.05;
        }
        return discount
    }

    summarise() {
        this.validate()

        const subtotal = this.calculateSubtotal()
        const discount = this.calculateDiscount(subtotal)

        // Tax calculation
        const taxableAmount = subtotal - discount;
        const tax = taxableAmount * 0.20;

        // Total calculation
        const total = taxableAmount + tax;

        return new OrderSummary(subtotal, discount, tax, total);
    }
}

export class Customer {
    #loyal;

    constructor(loyal) {
        this.#loyal = loyal;
    }

    isLoyal() {
        return this.#loyal;
    }
}

export class OrderItem {
    #price;
    #quantity;

    constructor(price, quantity) {
        this.#price = price;
        this.#quantity = quantity;
    }

    getPrice() {
        return this.#price;
    }

    getQuantity() {
        return this.#quantity;
    }
}

export class OrderSummary {
    #subtotal;
    #discount;
    #tax;
    #total;

    constructor(subtotal, discount, tax, total) {
        this.#subtotal = subtotal;
        this.#discount = discount;
        this.#tax = tax;
        this.#total = total;
    }

    getSubtotal() {
        return this.#subtotal;
    }

    getDiscount() {
        return this.#discount;
    }

    getTax() {
        return this.#tax;
    }

    getTotal() {
        return this.#total;
    }
}
