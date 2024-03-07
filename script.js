const calorieCounter = document.getElementById("calorie-counter");
const budgetNumberInput = document.getElementById("budget");
const entryDropdown = document.getElementById("entry-dropdown");
const addEntryButton = document.getElementById("add-entry");
const clearButton = document.getElementById("clear");
const output = document.getElementById("output");
let isError = false;
function cleanInputString(str) {
  /* const strArray = str.split('');
    const cleanStrArray = [];
    for (let i = 0; i < strArray.length; i++) {
        if (!["+", "-", " "].includes(strArray[i])) {
            cleanStrArray.push(strArray[i]);
        };
    }*/
  const regex = /[+-\s]/g; //s matching any whitespace character[]=>to o match each of these characters individually
  return str.replace(regex, "");
}
function isInvalidInput(str) {
  const regex = /e/i;
}
