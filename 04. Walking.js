function walking (input){
    let steps = 0;

    index=0;

    let command = input[index];
    index++;

    while (steps < 10000)
    {
        let commandNum = Number(command);
        
        if (command == "Going home")
        {            
            command = input[index];
            commandNum = Number(command)
            steps += commandNum;
            break;
        }

        steps += commandNum;
        command = input[index];
        index++;
     
    }
    if (steps >= 10000)
    {
        console.log("Goal reached! Good job!");
        console.log(`${steps - 10000} steps over the goal!`);

    }
    else
    { 
        console.log(`${10000 - steps} more steps to reach goal.`);

    }


}
walking 
(["125",
"250",
"4000",
"30",
"2678",
"4682"])






