//Progression 1:
//We've got some basic info about Karen's home
//Debug the type of data provided
//Return the types concatenated in a single variable
function moreAboutHome(address, distanceFromTown, hasNeighbours) {
    var temp1 = typeof(address);
    var temp2 = typeof(distanceFromTown);
    var temp3 = typeof(hasNeighbours);
    return temp1 + temp2 + temp3;
}

//Progression 2:
//Check if the data given is of the right type
//parents = String, noOfSiblings = Number, isNuclearFamily = Boolean

function moreAboutKaren(parents, noOfSiblings, isNuclearFamily) {
    var check;
    if (typeof(parents) == "string" && typeof(noOfSiblings) == "number" && typeof(isNuclearFamily) == "boolean") {
        check = true;
        return check;
    } else {
        return false;
    }
}

//Progression 3:
//Lily is suspicious about Karen's new friend
//Karen tells her friend's age and even writes it down
//Check which one those is not a number (NaN) and return that value

function doesFriendExist(ageInText, ageInNumber) {
    if (isNaN(ageInText) == true) {
        return ageInText;
    } else {
        return ageInNumber;
    }
}

//Progression 4:
//Lily gave Karen x sweets
//Karen ate y sweets herself
//On her way to the river, she ate another z sweets every n meters travelled
//Her friend divided the remaining sweets into 2 parts for each
//How many sweets did her friend get to eat?

function sweetTooth(totalNoofSweets, sweetsConsumeByKaren, sweetsConsumedInNMeters, metersToTravel) {
    let sweetconsumedbykarenfriend;
    if (Number.isInteger(totalNoofSweets) && Number.isInteger(sweetsConsumeByKaren) && Number.isInteger(sweetsConsumedInNMeters) && Number.isInteger(metersToTravel)) {
        sweetconsumedbykarenfriend = totalNoofSweets - (sweetsConsumeByKaren + sweetsConsumedInNMeters * metersToTravel);
        return sweetconsumedbykarenfriend / 2;
    } else {
        return "No sweets for Karen's friend";
    }
}

//Progression 5:
//As Lily moves closer, it gets colder. She checks the temperature on her mobile
//It only shows in fahrenheit. Convert the data to celsius and return it.

function convertToCelsius(fahrenheit) {
    if (typeof(fahrenheit) == "object" || typeof(fahrenheit) == "undefined" || typeof(fahrenheit) == "string") {
        return 'Technical Error!';
    } else {
        return 5 / 9 * (fahrenheit - 32);
    }
}

//Progression 6:
//Lily can now do multiple things to deal with this
//1. Take her daughter to a doctor
//2. Talk to her husband about it
//3. Counsel her daughter herself
//4. Lock her daughter in her room
//Given a value, return which of these above actions Lily would take

function aDifficultChoice(choice) {
    switch (choice) {
        case 1:
            return "Take her daughter to a doctor";
            break;
        case 2:
            return "Talk to her husband about it";
            break;
        case 3:
            return "Counsel her daughter herself";
            break;
        case 4:
            return "Lock her daughter in her room";
            break;
        case -1:
            return "Break down and give up all hope";
            break;
        case undefined:
            return "Wasn't able to decide";
            break;
        default:
            return "Refused to do anything for Karen";
    }
}

//Progression 7:
//Lily realized that she'd hurt her daughter
//All she wants now is for her to stop crying
//She refuses to talk to her but Lily doesn't stop trying
//She tries out multiple things hoping for the best
//Take all of Lily's strategies and concatenate them to a single var
//Seperate the strategies by a single space
//Return the length of the complete strategy

function consoleKaren(strategies) {
    return strategies.length;
}