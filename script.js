//// Leap Year Checker

function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return `${year} is a leap year.`;
    } else {
        return `${year} is not a leap year.`;
    }
}


console.log(isLeapYear(2024)); 
//console.log(isLeapYear(2023)); 


///////////Ticket Price

function ticketPrice(age) {
    if (age <= 12) {
        return "Ticket price is $10.";
    } else if (age >= 13 && age <= 17) {
        return "Ticket price is $15.";
    } else {
        return "Ticket price is $20.";
    }
}

console.log(ticketPrice(10)); 
//console.log(ticketPrice(15)); 
//console.log(ticketPrice(25)); 



///////////////// Fibonacci Sequence

function fibonacci(n) {
    if (n < 0) return undefined; 
    if (n === 0) return 0;
    if (n === 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}


console.log(fibonacci(6)); 



////////////////////////// Power function


function power(base, exponent) {
    if (exponent < 0) return 1 / power(base, -exponent); 
    if (exponent === 0) return 1; 
    return base * power(base, exponent - 1);
}


console.log(power(2, 3)); 
