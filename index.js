
/**
 * 1. create a new repo on Github,
 * 2. add this script file to your index.html and run it in the browser to get the output
 * 3. debug and see the console.log() messages in the chrome dev tools
 */


/**
 * PART 1
 *
 * Write a JavaScript program that takes two numbers as parameters and computes the sum of those two numbers
 *
 * For example, if the user input 3 and 6, then the answer would be: "9 (3+6)".
 */

var sum = function(a, b) {
	"use strict";
    /// return ...
    var ans = a + b;
    return ans;
}

console.log(sum(8, 11));

/**
 * PART 2
 *
 * Write a JavaScript program that calculates the average time for this marathoner to complete the full marathon (26.2mi)
 */

var matt = {
    finishingTime1: 240, //in minutes
    finishingTime2: 210.4,
    finishingTime3: 235.1,
    finishingTime4: 208.9,
    finishingTime5: 197.5
};

var mark = {
    finishingTime1: 120, //in minutes
    finishingTime2: 110.4,
    finishingTime3: 135.1,
    finishingTime4: 108.9,
    finishingTime5: 97.5
};

var getAverageTime = function(person) {
	"use strict";
    // ... return ...
    var count = 0;
    var sum = 0;
    // loop through person object according to finishingTimes.
    for (var time in person) {
        // calcualte total number of laps and increase count by 1
        if (person.hasOwnProperty(time)) {
            count++;
        }
        // calculate sum of finishingTimes.
        sum += person[time];
    }
    // console.log(count);
    return sum / count;  
}

console.log('Matt Avg: '+getAverageTime(matt));
console.log('Mark Avg: '+getAverageTime(mark));

/**
 * PART 3
 *
 *
 * Modify the following to calculate the difference between the two accounts.
 */

/**
 * declarations
 */

var MattsBankAccount = {
    checking: 0,
    savings: 0,
    retirement: 0
};

var RobertosBankAccount = {
    checking: 0,
    savings: 0,
    retirement: 0
};

function addToBank(account, savings, retirement, checking) {
	"use strict";
    account.savings = account.savings + savings;
    account.retirement = account.retirement + retirement;
    account.checking = account.checking + checking;
}

function getSumOfAccounts(account) {
	"use strict";
    // return ...
    var ans = account.checking + account.savings + account.retirement;
    return ans;
}

addToBank(MattsBankAccount, 100, 10, 1);
addToBank(RobertosBankAccount, 200, 50, 19);

var sumOfMatts = getSumOfAccounts(MattsBankAccount);
var sumOfRobertos = getSumOfAccounts(RobertosBankAccount);

console.log('Matt Sum: ' + sumOfMatts);
console.log('Roberto Sum: ' + sumOfRobertos);
console.log(sumOfMatts - sumOfRobertos);