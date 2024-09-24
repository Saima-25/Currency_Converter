import inquirer from "inquirer";
const currency = {
    USD: 1, // base currency
    EUR: 0.91,
    Pond: 0.82,
    Taka: 150,
    PKR: 288
};
let user_answer = await inquirer.prompt([
    {
        name: "from",
        message: "enter from currency",
        type: "list",
        choices: ["USD", "Euro", "Pond", "Taka", "PKR"]
    },
    { name: "to",
        message: "enter to currency",
        type: "list",
        choices: ["USD", "Euro", "Pond", "Taka", "PKR"]
    },
    {
        name: "amount",
        message: "enter your amount",
        type: "number",
    }
]);
let fromAmount = currency[user_answer.answer.from];
let toAmount = currency[user_answer.to];
let amount = user_answer.amount;
let baseAmount = amount / fromAmount; // 15000/280 USD
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);
//  console.log(fromAmount);
//  console.log(toAmount);
//  console.log(amount)
