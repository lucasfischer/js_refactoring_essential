import assert from "assert";
import { WeatherReport, Forecast } from "../src/WeatherReport.js";

describe("WeatherReportTest", () => {

    it("formatsMorningForecastCorrectly", () => {
        const report = new WeatherReport();

        const forecast = new Forecast("morning", 12.5, "Cloudy", 10);

        const output = [];
        report.formatDailyReport([forecast], output);

        assert.strictEqual(output.length, 1);
        assert.strictEqual(
            output[0],
            "Morning: 12.5°C, Cloudy, wind 10km/h"
        );
    });

    it("formatsAfternoonForecastCorrectly", () => {
        const report = new WeatherReport();

        const forecast = new Forecast("afternoon", 8.0, "Rain", 20);

        const output = [];
        report.formatDailyReport([forecast], output);

        assert.strictEqual(output.length, 1);
        assert.strictEqual(
            output[0],
            "Afternoon: 8.0°C, Rain, wind 20km/h"
        );
    });

    it("formatsEveningForecastCorrectly", () => {
        const report = new WeatherReport();

        const forecast = new Forecast("evening", 8.0, "Rain", 20);

        const output = [];
        report.formatDailyReport([forecast], output);

        assert.strictEqual(output.length, 1);
        assert.strictEqual(
            output[0],
            "Evening: 8.0°C, Rain, wind 20km/h"
        );
    });

    it("formatsMultipleForecastsInOrder", () => {
        const report = new WeatherReport();

        const forecasts = [
            new Forecast("morning", 10.0, "Sunny", 5),
            new Forecast("night", 3.0, "Clear", 2),
        ];

        const output = [];
        report.formatDailyReport(forecasts, output);

        assert.strictEqual(output.length, 2);

        assert.strictEqual(
            output[0],
            "Morning: 10.0°C, Sunny, wind 5km/h"
        );

        assert.strictEqual(
            output[1],
            "Night: 3.0°C, Clear, wind 2km/h"
        );
    });

});