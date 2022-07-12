// 1: Write a function named printGreeting that prints a simple greeting message, the same one, every time it is called. Call this function 3 times.
function printGreeting() {
  console.log("G'day!");
}

printGreeting();
printGreeting();
printGreeting();

// 2: Write a function that accepts 1 argument. The function should console.log a sentence that interpolates the data passed in.
var favMovie = "Princess Bride";

function bestMovie(movie) {
  console.log(`I see your favorite movie is ${movie}! That is one of my favorites, too!`);
}

bestMovie(favMovie);

// 3: Write a function that has 3 parameters: a string and two numbers. The String will be the name of a company, and the numbers will represent the minimum and maximum of a pay range for a posted job. The function should print out a sentence that includes the name of the company and the range itself (if the numbers passed in are 90000 and 110000, the pay range is 20000).

function payRange(prospectiveCompany, lowest, highest) {
  var range = highest - lowest;
  console.log(`The pay range at ${prospectiveCompany} is ${range}.`)
}

payRange("Hip Tech Co.", 75000, 105000);


// 4: Write a function that satifies the following interaction pattern:

function checkStock(numInStock, item) {
  if (!(numInStock)) {
    console.log(`${item} — OUT of stock!`)
  } else if (numInStock > 3) {
    console.log(`${item} is stocked`)
  } else {
    console.log(`${item} — running LOW`)
  }
}

checkStock(4, "Coffee");
// => "Coffee is stocked"

checkStock(3, "Tortillas");
// => "Tortillas - running LOW"

checkStock(0, "Cheese");
// => "Cheese - OUT of stock!"

checkStock(1, "Salsa");
// => "Salsa - running LOW"