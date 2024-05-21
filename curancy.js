import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.blue.bold("\n \t Welcome to` customers`-Currency Convertor\n"));
// Define the currencies and their exchange rates
let exchange_rate = {
    "USD": 1, // Base Currency
    "EUR": 0.9, // Eurpean Currency (Euro)
    "JAP": 113, //Japenese Currency(Yen)
    "CAD": 1.3, //Canadian Doller
    "AUD": 1.65, //australian Dollar
    "PKR": 280, // Pkistan Rupees
    // Add more currencies and their exchange rates here
};
//promt the user to select currencies to convert from and to
let user_answer = await inquirer.prompt([
    { name: "from_Currency",
        type: "list",
        message: "Select the currency to convert from:",
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"]
    },
    { name: "to_Currency",
        type: "list",
        message: "Select the currency to convert into:",
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"],
    },
    {
        name: "amount",
        type: "input",
        message: "Enter the amount to convert:",
    },
]);
// perform currency conversion by using Formula
let form_amount = exchange_rate[user_answer.from_Currency];
let to_amount = exchange_rate[user_answer.to_Currency];
let amount = user_answer.amount;
// Formula of conversion
let base_amount = amount / form_amount;
let converted_amount = base_amount * to_amount;
// Display the converted amount
console.log(`Converted Amount = ${converted_amount.toFixed(2)}`);
