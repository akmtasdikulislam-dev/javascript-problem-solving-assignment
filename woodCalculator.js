/** 
        চেয়ার, টেবিল ও খাট বানাতে প্রয়োজনীয় কাঠের পরিমাণ নির্ণয়
            * ১ টি চেয়ার বানাতে কাঠ দরকার হয় ১ Cubic Foot;
            * ১ টি টেবিল বানাতে কাঠ দরকার হয় ৩ Cubic Foot;
            * ১ টি খাট বানাতে কাঠ দরকার হয় ৫ Cubic Foot;
*/
function woodCalculator(chair, table, bed) {
    if (chair > 0 && table > 0 && bed > 0) {
        var woodForChair = chair * 1;
        var woodForTable = table * 3;
        var woodForBed = bed * 5;

        var total = woodForChair + woodForTable + woodForBed;
        console.log("You need total", total, "Cubic Feet of wood.");
    }
    else {      /** ঋণাত্মক মান input দিলে */
        if (chair < 0 && table > 0 && bed > 0) {
            console.log("The number of chair can not be negative.")
        }
        if (chair > 0 && table < 0 && bed > 0) {
            console.log("The number of table can not be negative.")
        }
        if (chair > 0 && table > 0 && bed < 0) {
            console.log("The number of bed can not be negative.")
        }
        if(chair < 0 && table < 0 && bed < 0) {
            console.log("The number of chair, table & bed can not be negative.")
        }
    }

}

//      Input Test

var input1 = woodCalculator(1, 1, 1);
var input2 = woodCalculator(2, 1, 1);
var input3 = woodCalculator(5, 6, 9);
var input4 = woodCalculator(-1, -2, -3);