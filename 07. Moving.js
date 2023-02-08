function movings (input){
    let index = 0;

    let width = Number(input[index]);
    index++;

    let length = Number(input[index]);
    index++;
    
    let height = Number(input[index]);
    index++;

    let houseVolume = width * length * height;

    let command = input[index];
    index++;

    while (command !== "Done") {
        // command = Number(input[index]);
        let boxesCount = Number(command);

        houseVolume -= boxesCount;

        if (houseVolume <= 0) {
            console.log(`No more free space! You need ${Math.abs(houseVolume)} Cubic meters more.`);
            break;
        }
        command = input[index];
        index++;
    }
    if (command === "Done") {
        console.log(`${houseVolume} Cubic meters left.`);
    }


}
movings 
(["10", 
"1",
"2",
"4", 
"6",
"Done"])