export class ShippingNoteGenerator {
    generateShippingNote(
        customerFirstName,
        customerLastName,
        addressLine1,
        addressLine2,
        city,
        postcode,
        country,
        orderId,
        itemDescription,
        quantity
    ) {
        const fullName = `${customerFirstName} ${customerLastName}`;

        const address =
            `${addressLine1}, ` +
            (addressLine2 ? `${addressLine2}, ` : "") +
            `${city}, ${postcode}, ${country}`;

        return `SHIPPING NOTE
Order: ${orderId}
Customer: ${fullName}
Ship To: ${address}
Item: ${itemDescription}
Quantity: ${quantity}`;
    }
}