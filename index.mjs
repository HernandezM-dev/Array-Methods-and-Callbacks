import { fifaData } from './fifa.mjs';
// console.log(fifaData);

// console.log('its working');

// ⚽️ M  V P ⚽️ //

// Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

// (a) Home Team name for 2014 world cup final
console.log('Task 1');
const test = fifaData.filter(data => {
    return data.Year === 2014 && data.Stage == "Final" ;
});

    console.log(test[0]['Home Team Name']);

// (b) Away Team name for 2014 world cup final
    console.log(test[0]["Away Team Name"]);
    
// (c) Home Team goals for 2014 world cup final
    console.log(test[0]["Home Team Goals"])
// (d) Away Team goals for 2014 world cup final
    console.log(test[0]["Away Team Goals"])
// (e) Winner of 2014 world cup final */
    console.log(test[0]["Win conditions"])


// Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {
    const test = data.filter(data => {
        return data.Stage == "Final";
    });
    return test;  
};
console.log('Task 2');
console.log(getFinals(fifaData));

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(data, cb) {
    const finals = cb(data)
    const years = [];
    finals.map(finals => {
        return years.push(finals.Year);
    });
    return years;  
}
console.log('Task 3');
console.log(getYears(fifaData,getFinals));

/* Task 5: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(data, cb) {
    const finalsData = cb(data);
    const winner = []
     finalsData.forEach(data => {
        const homeTeam = {
            name: data["Home Team Name"],
            finalScore: data["Home Team Goals"]
        }
        const awayTeam = {
            name: data["Away Team Name"],
            finalScore: data["Away Team Goals"]
        }
        const winCon = data["Win conditions"].split(" ");

        if(homeTeam.finalScore > awayTeam.finalScore){
            winner.push(homeTeam.name);
        }else if(homeTeam.finalScore < awayTeam.finalScore){
            winner.push(awayTeam.name);
        }else{
            winner.push(winCon[0]);
        }
    });
    return winner; 
}

console.log('Task 5');
console.log(getWinners(fifaData, getFinals));

/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(data, getFinals, getWinners, getYears) {
    let finals = getFinals(data);
    let year = getYears(data, getFinals);
    let country = getWinners(data, getFinals);
    // let statement = [];
     for(let i = 0; i<finals.length; i++){
        console.log(`In ${year[i]}, ${country[i]} won the world cup!`);
    }
    // return statement;
};
console.log('Task 6');
getWinnersByYear(fifaData, getFinals, getWinners, getYears);

/* Task 7: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {

   let homeAvg = Math.round(data.reduce((total, data) =>{ 
       return total + data["Home Team Goals"];
   }, 0) / data.length);
   let awayAvg = Math.round(data.reduce((total, data) =>{
       return total += data["Away Team Goals"];
   }, 0) / data.length);

   console.log(`Average points scored by home team: ${homeAvg} Average points scored by away team ${awayAvg} `);
}

console.log('Task 7');
getAverageGoals(fifaData);

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

};

getCountryWins();


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
