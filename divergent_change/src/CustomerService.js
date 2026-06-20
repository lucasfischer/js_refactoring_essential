export class EmailValidator {
    static isValid(email) {
        if (email === null) {
            return false;
        }

        const emailRegex = /^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+$/;
        return emailRegex.test(email);
    }
}

export class CustomerDisplayFormatter {
    static name(firstName, lastName) {
        return firstName.trim() + " " + lastName.trim().toUpperCase();
    }
}

export class AccountStatusService {
    static calculateStatus(daysSinceLastLogin) {
        if (daysSinceLastLogin > 365) {
            return "INACTIVE";
        } else if (daysSinceLastLogin > 30) {
            return "DORMANT";
        }

        return "ACTIVE";
    }
}

function calculateLoyaltyPoints(numberOfPurchases) {
    return numberOfPurchases * 10;
}

export class CustomerService {
    isValidEmail(email) {
        return EmailValidator.isValid(email);
    }

    formatDisplayName(firstName, lastName) {
        return CustomerDisplayFormatter.name(firstName, lastName);
    }

    calculateLoyaltyPoints(numberOfPurchases) {
        return calculateLoyaltyPoints(numberOfPurchases);
    }

    determineAccountStatus(daysSinceLastLogin) {
        return AccountStatusService.calculateStatus(daysSinceLastLogin);
    }
}