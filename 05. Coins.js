function coins (input){
    let changeToReturn = Number(input[0])*100;
    let count = 0;

    while (changeToReturn > 0)
    {
        if (changeToReturn >= 200)
        {
            changeToReturn -= 200;
        }
        else if (changeToReturn >= 100)
        {
            changeToReturn -= 100;

        }
        else if (changeToReturn >= 50)
        {
            changeToReturn -= 50;

        }
        else if (changeToReturn >= 20)
        {
            changeToReturn -= 20;

        }
        else if (changeToReturn >= 10)
        {
            changeToReturn -= 10;

        }
        else if (changeToReturn >= 5)
        {
            changeToReturn -= 5;

        }
        else if (changeToReturn >= 2)
        {
            changeToReturn -= 2;

        }
        else if (changeToReturn >= 1)
        {
            changeToReturn -= 1;
        }
        else 
        {
            changeToReturn = 0;
            break;
        }
        count++;
    }
    console.log(count);


}
coins 
(["1.23"])