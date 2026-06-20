export class WeatherReport {
    formatDailyReport(forecasts, output) {
        for (const forecast of forecasts) {

            const temp = forecast.getTemperature().toFixed(1);
            const condition = forecast.getCondition();
            const wind = forecast.getWindSpeed();

            if (forecast.isMorning()) {
                output.push(
                    `Morning: ${temp}°C, ${condition}, wind ${wind}km/h`
                );
            }

            if (forecast.isAfternoon()) {
                output.push(
                    `Afternoon: ${temp}°C, ${condition}, wind ${wind}km/h`
                );
            }

            if (forecast.isEvening()) {
                output.push(
                    `Evening: ${temp}°C, ${condition}, wind ${wind}km/h`
                );
            }

            if (forecast.isNight()) {
                output.push(
                    `Night: ${temp}°C, ${condition}, wind ${wind}km/h`
                );
            }
        }
    }
}

export class Forecast {
    constructor(period, temperature, condition, windSpeed) {
        this.period = period; // "morning", "afternoon", "evening", "night"
        this.temperature = temperature;
        this.condition = condition;
        this.windSpeed = windSpeed;
    }

    getTemperature() {
        return this.temperature;
    }

    getCondition() {
        return this.condition;
    }

    getWindSpeed() {
        return this.windSpeed;
    }

    getPeriod() {
        return this.period;
    }

    isMorning() {
        return this.period === "morning";
    }

    isAfternoon() {
        return this.period === "afternoon";
    }

    isEvening() {
        return this.period === "evening";
    }

    isNight() {
        return this.period === "night";
    }
}