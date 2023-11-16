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

