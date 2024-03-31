#!/usr/bin/env node
import inquirer from "inquirer";
let mybalance = 10000; // dollar
let mypin = 121472;
let pinanswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin",
        type: "number"
    }
]);
if (pinanswer.pin === mypin) {
    console.log("correct pin code!!!");
}
else {
    console.log("incorrect pin number");
}
let operationans = await inquirer.prompt([
    {
        name: "operation",
        message: "please select option",
        type: "list",
        choices: ["withdraw", "check balance", "Fast cash", "Pay bills"]
    }
]);
if (operationans.operation === "withdraw") {
    let amountans = await inquirer.prompt([
        {
            name: "amount",
            message: "enter your amount",
            type: "number"
        }
    ]);
    mybalance -= amountans.amount;
    console.log("your remaining blance is:" + mybalance);
}
else if (operationans.operation === "check balance") {
    console.log("your balance is: " + mybalance);
}
else {
    console.log("incorrect pin number");
}
if (operationans.operation === "Fast cash") {
    let amountans = await inquirer.prompt([
        {
            name: "amount",
            message: "please select option",
            type: "list",
            choices: [5000, 2000, 3000]
        }
    ]);
    mybalance -= amountans.amount;
    console.log("your remaining blance is:" + mybalance);
}
if (operationans.operation === "amount") {
    console.log("your balance is: " + mybalance);
}
if (operationans.operation === "Pay bills") {
    let operationans = await inquirer.prompt([
        {
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["Gas bill", "Electricity bill", "telephone/mobile bill"]
        }
    ]);
}
if (operationans.operation === "Gas bill") {
    let amountans = await inquirer.prompt([
        {
            name: "amount",
            message: "enter your amount",
            type: "number"
        }
    ]);
    mybalance -= amountans.amount;
    console.log("your remaining blance is:" + mybalance);
}
if (operationans.operation === "amount") {
    console.log("your balance is: " + mybalance);
}
if (operationans.operation === "Electricity bill") {
    let amountans = await inquirer.prompt([
        {
            name: "amount",
            message: "enter your amount",
            type: "number"
        }
    ]);
    mybalance -= amountans.amount;
    console.log("your remaining blance is:" + mybalance);
}
else if (operationans.operation === "amount") {
    console.log("your balance is: " + mybalance);
}
if (operationans.operation === "amount") {
    let amountans = await inquirer.prompt([
        {
            name: "amount",
            message: "enter your amount",
            type: "number"
        }
    ]);
    mybalance -= amountans.amount;
    console.log("your remaining blance is:" + mybalance);
}
else if (operationans.operation === "amount") {
    console.log("your balance is: " + mybalance);
}
