/** 
    ভবন নির্মাণে প্রয়োজনীয় ইটের সংখ্যা নির্ণয়
        * প্রতি ফুটে ইট দরকার হয় ১০০০ টি।
        * প্রথম ১০ তালার ( ১ম থেকে ১০ম ) ক্ষেত্রে উচ্চতা ১৫ ফুট;
        * দ্বিতীয় ১০ তলার ( ২য় থেকে ২০শ ) ক্ষেত্রে উচ্চতা ১২ ফুট;
        * পরবর্তী তলার ক্ষেত্রে উচ্চতা ১০ ফুট। 
 
*/ 

function brickCalculator(floor) {
    if (floor > 0 && floor < 10 || floor == 10) {         // যদি তালাসংখ্যা, ( ০ অপেক্ষা অধিক এবং ১০ অপেক্ষা ছোট ) অথবা ১০ হয়
        var totalBrick = floor * 15 * 1000;
    }
    if (floor > 10 && floor < 20 || floor == 20) {         // যদি তালাসংখ্যা, ( ১০ অপেক্ষা অধিক এবং ২০ অপেক্ষা ছোট ) অথবা ২০ হয়
        var firstTenFloor = floor - (floor - 10);
        var brickFirstTenFloor = firstTenFloor * 15 * 1000;
        var restFloor = floor - firstTenFloor;
        var brickRestFloor = restFloor * 12 * 1000;
        var totalBrick = brickFirstTenFloor + brickRestFloor;
    }
    if (floor > 20) {           // যদি তালাসংখ্যা, 2০ অপেক্ষা অধিক হয়
        var firstTenFloor = floor - (floor - 10);
        var brickFirstTenFloor = firstTenFloor * 15 * 1000;
        var secondTenFloor = floor - (floor - 10);
        var brickSecondTenFloor = secondTenFloor * 12 * 1000;
        var restFloor = floor - 20;
        var brickRestFloor = restFloor * 10 * 1000;
        var totalBrick = brickFirstTenFloor + brickSecondTenFloor + brickRestFloor;
    }
    return totalBrick;
}

console.log(brickCalculator(1));