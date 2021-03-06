// https://github.com/irajmunshy/Problem-Solving

//01: kilometer to meter
function kilometerToMeter(kilometer) {
    var meter = kilometer * 1000;

    if (meter < 0) {
        return "Kilometers Are Not Negative Values."
    } else {
        return meter;
    }
}
var totalDistance = kilometerToMeter(3);
console.log(totalDistance);





//02: budget calculator
function budgetCalculator(watch, phone, computer) {
    watchPrice = watch * 50;
    phonePrice = phone * 100;
    computerPrice = computer * 500;

    if (watch < 0 && phone >= 0 && computer >= 0) {
        return "The Watch Will Not Have a Negative Value.";
    } 
    else if (phone < 0 && watch >= 0 && computer >= 0) {
        return "The Phone Will Not Have a Negative Value.";
    } 
    else if (computer < 0 && watch >= 0 && phone >= 0) {
        return "The Computer Will Not Have a Negative Value.";
    } 
    else if (computer < 0 && watch < 0 && phone >= 0) {
        return "The Watch And Computer Will Not Have a Negative Value.";
    } 
    else if (computer < 0 && watch >=0 && phone < 0) {
        return "The Phone And Computer Will Not Have a Negative Value.";
    } 
    else if (watch < 0 && phone < 0 && computer >= 0) {
        return "The Watch And Phone Will Not Have a Negative Value.";
    }
    else if (watch < 0 && phone < 0 && computer < 0) {
        return "Negative Values is Not Allowed."
    } 
    else {
        return watchPrice + phonePrice + computerPrice;
    }
}
var totalCost = budgetCalculator(2, 1, 1);
console.log(totalCost);





//03: hotel cost
function hotelCost(day) {
    var total = 0;
    if (day > 20) {
        total = total + ((day - 20) * 50);
        day = 20;
    }
    if (day > 10) {
        total = total + ((day - 10) * 80);
        day = 10;
    }
    if (day != 0) {
        total = total + (day * 100);
    }

    if (total < 0) {
        return "Hotel Cost Are Not Negative Values.";
    } else {
        return total;
    }
}
var totalHotelCost = hotelCost(11);
console.log(totalHotelCost);





//04: mega friend
function megaFriend(allName) {
    var maxValue = allName[0];
    for (var i = 0; i < allName.length; i++) {
        if (maxValue.length < allName[i].length) {
            maxValue = allName[i];
        }
    }

    if (allName.length < 1) {
        return "This Array is Empty!";
    } else if ((maxValue[0] >= 'A' && maxValue[0] <= 'Z') || (maxValue[0] >= 'a' && maxValue[0] <= 'z')) {
        return maxValue;
    } else {
        return "This Value is Not Matching.";
    }
}
var maxValueName = megaFriend(["kamal","jamal", "salam", "barkat"]);
console.log(maxValueName);




