let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = true;
let age = 16;

if (age >= 18 && registeredEarly === true) {
    raceNumber += 1000;
    console.log(`Your race number is ${raceNumber} and your race starts at 9:30 am`)
} else if (age >= 18 && registeredEarly === false) {
    console.log(`Your race number is ${raceNumber} and your race starts at 11:00 am`)
} else if (age < 18) {
    console.log(`Your race number is ${raceNumber} and your race starts at 12:30 pm`)

}


