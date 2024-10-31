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
