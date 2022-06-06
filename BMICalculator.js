
function BMICalculator(height, weight) {
    let BMI = weight / (height * height);
    
    if (BMI < 18.5) {
        result = ("Your BMI is " + BMI + " , indicate your weight is UnderWeight");
    } else if (BMI > 18.5 && BMI < 24.9) {
        result = ("Your BMI is " + BMI + " , indicate your weight is Normal Weight");
    } else if (BMI > 24.9 && BMI < 29.9) {
        result = ("Your BMI is " + BMI + " , indicate your weight is Over Weight");
    } else {
        result = ("Your BMI is " + BMI + " , This considered Obesity");
    }
    return result;
}
console.log(BMICalculator(1.7, 90));