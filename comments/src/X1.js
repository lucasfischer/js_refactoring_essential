export class X1 {
    static m(lower_bound, upper_bound) {
        let p = 0;

        // Iterate from lower bound (q) to upper bound (z)
        for (let i = lower_bound; i <= upper_bound; i++) {
            // Add square of each number in the range
            p += X1.square(i);
        }

        // Return accumulated sum
        return p;
    }

    static square(value) {
        return value * value;
    }
}