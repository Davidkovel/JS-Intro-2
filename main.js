// TASK 1
function checkNumberIsGreater(num1, num2) {
    if (num1 > num2) {
        return 1;
    } 
    else if (num1 < num2) {
        return -1;
    }
    else {
        return 0;
    }
}

let num1 = parseFloat(prompt("Enter first number:"));
let num2 = parseFloat(prompt("Enter second number:"));
alert(checkNumberIsGreater(num1, num2));

// TASK 2
function factorial(num) {
    if (num < 0) {
        return "undefined";
    } else if (num === 0 || num === 1) {
        return 1;
    } else {
        let result = 1;
        for (let i = 2; i <= num; i++) {
            result *= i;
        }
        return result;
    }
}

let num = parseInt(prompt("Enter a number to calculate its factorial:"));
alert(factorial(num));

// TASK 3
function numberToString(digit1, digit2, digit3) {
    // Проверяем, что все аргументы являются цифрами (0-9)
    if ([digit1, digit2, digit3].every(d => Number.isInteger(d) && d >= 0 && d <= 9)) {
        return digit1.toString() + digit2.toString() + digit3.toString();
    } else {
        return "Invalid input - all parameters should be single digits (0-9)";
    }
}

let d1 = parseInt(prompt("Enter first digit (0-9):"));
let d2 = parseInt(prompt("Enter second digit (0-9):"));
let d3 = parseInt(prompt("Enter third digit (0-9):"));
alert(numberToString(d1, d2, d3));

// TASK 4
function calculateRectangleArea(length, width) {
    if (width === null) {
        if (length <= 0) {
            return "Invalid input";
        }
        return length * length;
    } else {
        if (length <= 0 || width <= 0) {
            return "Invalid input";
        }
        return length * width;
    }
}

let length = parseFloat(prompt("Enter the length of the rectangle:"));
let widthInput = prompt("Enter the width of the rectangle:");

alert(calculateRectangleArea(length, widthInput));

// TASK 5
function isPerfectNumber(num) {
    if (num <= 0 || !Number.isInteger(num)) {
        return false;
    }
    
    let sumOfDivisors = 0;
    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            sumOfDivisors += i;
        }
    }
    
    return sumOfDivisors === num;
}

let numberToCheck = parseInt(prompt("Enter a number to check if it's perfect:"));
alert(isPerfectNumber(numberToCheck) ? "It's a perfect number!" : "It's not a perfect number.");

// Task 6

const findPerfectNumbers = (min, max) => {
    try {
        min = parseInt(min);
        max = parseInt(max);
        
        if (min > max) [min, max] = [max, min];
        
        const perfectNumbers = [];
        for (let i = min; i <= max; i++) {
            if (isPerfectNumber(i)) {
                perfectNumbers.push(i);
            }
        }
        return perfectNumbers.length ? perfectNumbers : "No perfect numbers in this range";
    } catch (error) {
        return `Error: ${error.message}`;
    }
};

const min = prompt("Enter minimum number:");
const max = prompt("Enter maximum number:");
alert(findPerfectNumbers(min, max));

// Task 7

const formatTime = (hours, minutes = 0, seconds = 0) => {
    try {
        hours = parseInt(hours);
        minutes = parseInt(minutes);
        seconds = parseInt(seconds);
        
        if (hours < 0 || minutes < 0 || seconds < 0 || minutes > 59 || seconds > 59) {
            throw new Error("Invalid time values");
        }
        
        const pad = num => num.toString().padStart(2, '0');
        return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
    } catch (error) {
        return `Error: ${error.message}`;
    }
};

const hours = prompt("Enter hours:");
const mins = prompt("Enter minutes (optional):") || 0;
const secs = prompt("Enter seconds (optional):") || 0;
alert(formatTime(hours, mins, secs));

// TASK 8

const timeToSeconds = (h, m, s) => {
    try {
        h = parseInt(h) || 0;
        m = parseInt(m) || 0;
        s = parseInt(s) || 0;
        
        if (h < 0 || m < 0 || s < 0 || m > 59 || s > 59) {
            throw new Error("Invalid time values");
        }
        
        return s + (m * 60) + (h * 3600);
    } catch (error) {
        return `Error: ${error.message}`;
    }
};
const h = prompt("Enter hours:");
const m = prompt("Enter minutes:");
const s = prompt("Enter seconds:");
alert(timeToSeconds(h, m, s));



// TASK 9

const secondsToTimeString = totalSeconds => {
    try {
        totalSeconds = parseInt(totalSeconds);
        if (totalSeconds < 0) throw new Error("Seconds cannot be negative");
        
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;
        
        const pad = num => num.toString().padStart(2, '0');
        return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
    } catch (error) {
        return `Error: ${error.message}`;
    }
};

const totalSec = prompt("Enter total seconds:");
alert(secondsToTimeString(totalSec));

// TASK 10
const dateDifference = (date1, date2) => {
    try {
        if (!(date1 instanceof Date) || !(date2 instanceof Date)) {
            throw new Error("Invalid date objects");
        }
        
        const diffSeconds = Math.abs(Math.floor((date2 - date1) / 1000));
        return secondsToTimeString(diffSeconds);
    } catch (error) {
        return `Error: ${error.message}`;
    }
};


// For display html 

function formatAndDisplayTime() {
            const hours = document.getElementById('hours').value;
            const minutes = document.getElementById('minutes').value || 0;
            const seconds = document.getElementById('seconds').value || 0;
            
            const formattedTime = formatTime(hours, minutes, seconds);
            document.getElementById('result').textContent = `Formatted Time: ${formattedTime}`;
        }