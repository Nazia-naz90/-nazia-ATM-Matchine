#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
// Initialize user balance //
let myBalance = 100000;
let myPin = 313588;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: chalk.yellow(`<*********Welcome to Nazia's ATM account !!!*********> \n \t Please enter your pin number !!!\n `),
        type: "number",
    }
]);
//console.log(pinAnswer.q1);
if (pinAnswer.pin === myPin) {
    console.log(chalk.green(`\n \tYour pin is correct !!!\n`));
    let operationAnswer = await inquirer.prompt([
        {
            name: "operation",
            message: chalk.blue(`Please select options ! `),
            type: "list",
            choices: ["Withdraw", "Fast cash", "Check Balance",],
        }
    ]);
    // If user select withdraw //
    if (operationAnswer.operation === "Withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: chalk.yellow(`Enter your amount`),
                type: "number",
            }
        ]);
        if (amountAns.amount <= myBalance) {
            let balance = myBalance - amountAns.amount;
            console.log(chalk.greenBright(`\n \t The remaining balance is ${balance}\n`));
        }
        else {
            console.log(chalk.redBright(`\n \t You have insufficient balance !!!\n`));
        }
    }
    // If user select fast cash //
    else if (operationAnswer.operation === "Fast cash") {
        let FastCashAns = await inquirer.prompt([
            {
                name: "amount",
                type: "list",
                message: chalk.bgGreenBright(`Select your amount !`),
                choices: ["1000", "3000", "5000", "15000", "20000", "25000"]
            }
        ]);
        if (FastCashAns.amount <= myBalance) {
            let balance2 = myBalance - FastCashAns.amount;
            console.log(chalk.bgCyan(`\n \t Your remaining balance is : ${balance2}\n `));
        }
        else {
            console.log(chalk.red(`\n \t You have insufficient amount !!! \n`));
        }
    }
    // Check Balance //
    else if (operationAnswer.operation === "Check Balance")
        console.log(myBalance);
}
else {
    console.log(chalk.red(`\n \t You entered incorrect pin number !!! \n`));
}
