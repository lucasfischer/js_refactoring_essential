export class X1 {
    static sum_of_squares(lower_bound, upper_bound) {
        let sum = 0;

        for (let i = lower_bound; i <= upper_bound; i++) {
            sum += Math.pow(i, 2)
        }

        // Return accumulated sum
        return sum;
    }
}