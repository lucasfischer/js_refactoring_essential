export class X1 {
    static m(lower_bound, upper_bound) {
        let sum = 0;

        for (let i = lower_bound; i <= upper_bound; i++) {
            // Add square of each number in the range
            sum += Math.pow(i, 2)
        }

        // Return accumulated sum
        return sum;
    }
}