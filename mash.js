function mash() {
    console.log('You will live in a ' + getHome() + " and travel to " + getTravelCount() + ' countries, and have a pet ' + getPet() + '! '
    + 'You will work as a ' + getJob() + '. You will have ' + getChildrenCount() + ' children!');
}

function randNumGenerator(int) {
    return Math.floor(Math.random() * int);
}

function getHome() {
    houseInput = process.argv[2];
    houseOptions = ['Mansion', 'Shack', 'Castle', 'House'];
    houseLuck = Math.floor(Math.random() * 101);
    if (houseLuck <= 50) {
        return houseOptions[randNumGenerator(houseOptions.length)];
    }
    else {
        
        if (houseInput) {
            return houseInput;
    }
        else {
            return houseOptions[randNumGenerator(houseOptions.length)];
    }
}
}

function getTravelCount() {
    return randNumGenerator(100);
}

function getPet() {
    petInput = process.argv[3];
    petOptions = ['German Sherpard', 'Machamp', 'Cat', 'Golden Retriever', 'Fly', 'Alien', 'Roach'];
    luck = Math.floor(Math.random() * 101);
   
    if (luck <= 50) {
        return petOptions[randNumGenerator(7)];
    }
    else {
       if (petInput) {
        petOptions.push(petInput);
            return petOptions[randNumGenerator(petOptions.length)];
        }
        else {
            return petOptions[randNumGenerator(petOptions.length)];
        }
}
}

function getJob() {
    jobInput = process.argv[4];
    jobOptions = ['Accountant', 'Garbageman', 'Singer', 'President', 'Doctor', 'Programmer']
    jobLuck = Math.floor(Math.random() * 101);

    if (jobLuck <= 50) {
        return jobOptions[randNumGenerator(jobOptions.length)];
    }
    else {
        if (jobInput) {
            return jobInput;
        }
        else {
            return jobOptions[randNumGenerator(jobOptions.length)];
        }
    }
}
function getChildrenCount() {
    return randNumGenerator(10);
}
// badluck function doesn't work still
function badLuck() {
    badLuckCounter = 0
    if (getHome() == 'Shack') {
        badLuckCounter += 1;
    }
    if (getPet() == 'Roach') {
        badLuckCounter += 1;
    }
    if (getJob() == 'Garbageman') {
        badLuckCounter += 1;
    }
    if (badLuckCounter == 3) {
        console.log("You're unlucky!");
    }

}

mash();
badLuck();