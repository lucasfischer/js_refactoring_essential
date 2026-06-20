export class X1 {
    static sum_of_squares(lower_bound, upper_bound) {
        let sum = 0;

        for (const i of range(lower_bound, upper_bound)) {
            sum += Math.pow(i, 2)
        }

        return sum;
    }
}

function* range(lower_bound, upper_bound) {
    for (let i = lower_bound; i <= upper_bound; i++) {
        yield i
    }
}