export class EmailValidator {
    static isValid(email) {
        if (email === null) {
            return false;
        }

        const emailRegex = /^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+$/;
        return emailRegex.test(email);
    }
}

export class CustomerService {
    isValidEmail(email) {
        return EmailValidator.isValid(email);
    }

    formatDisplayName(firstName, lastName) {
        return firstName.trim() + " " + lastName.trim().toUpperCase();
    }

    calculateLoyaltyPoints(numberOfPurchases) {
        return numberOfPurchases * 10;
    }

    determineAccountStatus(daysSinceLastLogin) {
        if (daysSinceLastLogin > 365) {
            return "INACTIVE";
        } else if (daysSinceLastLogin > 30) {
            return "DORMANT";
        }

        return "ACTIVE";
    }
}