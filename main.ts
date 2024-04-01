#! /usr/bin/env node

import inquirer from "inquirer";

let totalBalance: number = 10000 // Dollar
const pinNumber: number = 1234

let pinEntered = await inquirer.prompt(
    [
     {

    name: "pin",
    message:"Enter your pin number", 
    type: "number",
}
]
)

if(pinEntered.pin == pinNumber)[]

    let atmQuestions =await inquirer.prompt([
    {
        name: "accountType",
        message: "select your account type",
        type: "list",
        choices:[
            "Current Account",
            "Saving Account",
        ]
    },
{
    name:"transmethod",
    message:"select your transaction method",
    type:"list",
    choices:[
        "Cash withdrawl",
        "Fast Cash",
    
    ] 
}
    ]);
    
if(atmQuestions.transmethod == "Cash withdrawl")
    {

    let cashwithdrawlAmount = await inquirer.prompt(
        [
            {
                name: 'withdrawl',
                message: 'Enter the amount you want to withdraw',
                type: 'number',
            
            }   
    ]);
    
    if(totalBalance >= cashwithdrawlAmount.withdrawl){
        totalBalance -= cashwithdrawlAmount.withdrawl
        console.log(`Your Total Balance is :${totalBalance}`)
    }
else{
    console.log('insufficient Balance')
}
    }       
else {}
        let fashCashAmount = await inquirer.prompt(
            [
                {
                    name:'fastCash',
                    message:'Select the amount you want to withdraw',
                    type:'list',
                    choices:[
                        "1000",
                        "3000",
                        "5000"
                   ]


                }
            ]
        )
if(totalBalance >= fashCashAmount.fastCash){
    totalBalance -= fashCashAmount.fastCash
    console.log(`Your Total Balance is :${totalBalance}`)
    }
else{
    console.log('insufficient Balance')
}
