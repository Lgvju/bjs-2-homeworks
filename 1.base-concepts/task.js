"use strict"
function solveEquation(a, b, c) {
    let discriminant = [];
    discriminant = ((Math.pow(b, 2)) - (4 * a * c));
    if (discriminant > 0) {
        let solve = [];
        solve[0] = ((-b + Math.sqrt(discriminant)) / (2 * a));
        solve[1] = ((-b - Math.sqrt(discriminant)) / (2 * a));
        discriminant = solve;

    } else if (discriminant === 0) {
               let solve = [];
               solve[0] = (-b / (2 * a));
               discriminant = solve;
    } else {
        discriminant = [];
    }
    return discriminant;
}
    //let result = solveEquation(1, -4, 3);
    //console.log(result);
function calculateTotalMortgage(percent, contribution, amount, countMonths) {
    let monthlyRate = percent / 100;
    let loanBody = amount - contribution;
    let currentRate = monthlyRate / 12;
    let monthlyPayment = loanBody * (currentRate + (currentRate / ((Math.pow((1 + currentRate), countMonths)) - 1)));
    let totalAmount = monthlyPayment * countMonths;
    totalAmount = totalAmount.toFixed(2);
    let currentTotalAmount = parseFloat(totalAmount);
    return currentTotalAmount;
}
let calc = calculateTotalMortgage(10,0,50000,12);
console.log(calc);

