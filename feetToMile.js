/**
        ফুট থেকে মাইলে রুপান্তর
            * ১ মাইল = ৫২৮০ ফুট;
 */

function feetToMile(feet) {
    if (feet > 0) {
        var mile = feet / 5280;
        return console.log(mile);
    }
    else{    /** ঋণাত্মক মান input দিলে */
        console.log("The value of distance cannot be negative. Please input positive number.");
    }
}


//       Input Test

var input1 = feetToMile(2000);

var input2 = feetToMile(10000);

var input3 = feetToMile(-35000);