//age in days
function ageInDays() {
    let birthYear = prompt("What year were you born?");
    if ( birthYear == "" || birthYear == undefined) { //if statement so the prompt must be filled
        alert("Please enter your birth year!")
        return false;
    };
    let today = new Date().getFullYear(); // get the actual year
    let ageInDay$ = (today - birthYear) * 365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are ' + ageInDay$ + " days old!") //
    h1.setAttribute('id', 'ageInDays'); // set this h1 tags id to ageInDays
    h1.appendChild(textAnswer); 
    document.getElementById("flex-box-result").appendChild(h1); // add the h1 created to the div called flex-box-result
    };

function reset() {
   document.getElementById("ageInDays").remove();
};


//age in hours
function ageInHours() {
    let birthHour = prompt("What year were you born?");
    if ( birthHour == "" || birthHour == undefined) {
        alert("Please enter your birth year!");
        return false;
    };
    today = new Date().getFullYear();
    let ageInHour$ = (today - birthHour) * 365 * 24;

    var h1 = document.createElement('h1');
    var textAnswer2 = document.createTextNode('You are ' + ageInHour$ + " hours old!")
    h1.setAttribute('id', 'ageInHours');
    h1.appendChild(textAnswer2);
    document.getElementById("flex-box-result2").appendChild(h1);
};
function reset2() {
    document.getElementById("ageInHours").remove();
};
