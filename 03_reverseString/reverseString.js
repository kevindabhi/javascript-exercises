const reverseString = function(str) {

    let splitString=str.split("");
    let reverse=splitString.reverse();
    let reversedString=reverse.join("");
    return reversedString;

};

// Do not edit below this line
module.exports = reverseString;
