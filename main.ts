#! /usr/bin/env node

import inquirer from "inquirer"
let myBalance = 10000; //dollar
let myPinNumber = 5432;

let pinAnswer = await inquirer.prompt([
  {
    name: "pin",
    message: "enter your pin",
    type: "number",
  },
]);
if (pinAnswer.pin === myPinNumber) 
  console.log("Correct pin code!");

  let operationAns = await inquirer.prompt([
    {
      name: "operation",
      message: "Please select option",
      type: "list",
      choices: ["withdraw", "check balance", "fast cash"],
    },
  ]);
  if (operationAns.operation === "withdraw") {
    let amountAns = await inquirer.prompt([
      {
        name: "amount",
        message: "Enter the amount",
        type: "number",
      },
    ]);

    if (amountAns.amount > myBalance) {
      console.log("insufficient balance");
    } else {
      myBalance -= amountAns.amount;

      console.log(`You successfully withdrawal ${amountAns.amount} \nYour remaining balance is ${myBalance}`);
    }
  } else if (operationAns.operation === "check balance")
    console.log(`Your current balance is:  ${myBalance}`);


else if (operationAns.operation === "fast cash"){
let fast = await inquirer.prompt([{
       name : "fastCash",
       message : "Select the amount which you withdrawal",
       type : "list",
       choices: [1000 , 2000 , 5000 , 10000]
      }
    ]);
    myBalance -= fast.fastCash;
    console.log(`You successfully withdrawal ${fast.fastCash}\nYour remaining balance is ${myBalance}`)

}
 else  {
  console.log("Incorrect pin number!");

}


