function vacation (input){
    index = 0;

    let neededMoney = Number(input[index]);
    index++;

    let availableMoney = Number(input[index]);
    index++;

    let command = input[index];
    index++;

    let money = Number(input[index]);
    index++;

    let daysCount = 0;
    let spendCount = 0;
   
    
    while (availableMoney < neededMoney)
    {        
        daysCount++;

        if (command === "save")
        {
            availableMoney += money;
            spendCount = 0;
        }
        else
        { 
            spendCount++;
            if (spendCount == 5)
            {
                console.log("You can't save the money.");
                console.log(daysCount);
                break;
            }
            availableMoney -= money;
            if (availableMoney < 0)
            {
                availableMoney = 0;
            }
        }

        command = input[index];
        index++; 

        money = Number(input[index]);
        index++;

    }
    if (availableMoney >= neededMoney)
    {
        console.log(`You saved the money for ${daysCount} days.`);
    }

}
vacation 
(["250",
"150",
"spend",
"50",
"spend",
"50",
"save",
"100",
"save",
"100"])


