//helper functions

function randomColour(array) {
    //choose a random colour from an inputted array of hex colours
    let rand = Math.floor(Math.random()*array.length);
    return array[rand];
}

function differentRandomColour(index, colourSet, stateArray){

    let rand = 0;

    //pick new colour
    do {
        rand = Math.floor(Math.random()*colourSet.length);
    }
    //if new colour is the same as previous colour, pick another colour
    while (stateArray[index] === colourSet[rand]);

    return colourSet[rand];
}

export { randomColour, differentRandomColour };