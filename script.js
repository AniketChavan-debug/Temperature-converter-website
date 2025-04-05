function convertTemperature() {
    // Get the input temperature and selected unit
    const temperature = parseFloat(document.getElementById("temperature").value);
    const unit = document.getElementById("unit").value;
    const resultArea = document.getElementById("result");

    // Validate input
    if (isNaN(temperature)) {
        resultArea.innerHTML = "Please enter a valid number!";
        return;
    }

    let convertedTemp;
    let unitLabel;

    // Convert based on the selected unit
    if (unit === "celsius") {
        convertedTemp = (temperature * 9/5) + 32; // Celsius to Fahrenheit
        unitLabel = "°F";
    } else if (unit === "fahrenheit") {
        convertedTemp = (temperature - 32) * 5/9; // Fahrenheit to Celsius
        unitLabel = "°C";
    } else if (unit === "kelvin") {
        convertedTemp = temperature + 273.15; // Celsius to Kelvin
        unitLabel = "K";
    }

    // Display the result
    resultArea.innerHTML = `${convertedTemp.toFixed(2)} ${unitLabel}`;
}
