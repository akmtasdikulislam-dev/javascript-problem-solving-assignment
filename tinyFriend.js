/**
        একাধিক নামের মধ্য থেকে সবচেয়ে ছোট নাম নির্ণয়
 */
var friendNames = ["abcdef","abcde", "abcd", "abc", "a"];
var tinyName = friendNames[0];
for (i = 0; i < friendNames.length; i++) {
    console.log(friendNames[i].length)
    if(friendNames[i].length < tinyName.length){
        tinyName = friendNames[i];
    }
}
console.log(tinyName)

//       Example found in the internet

/** function tinyFriends() {
    let myFriends = ["Mukit", "Selim", "Umor", "sabbir", "Jel"]
    let smallestFridend = myFriends[0];
    for (i = 0; i < myFriends.length; i++) {
        if (myFriends[i] < smallestFridend) {
            smallestFridend = myFriends[i];
        }
    }
    return smallestFridend   
}
console.log(tinyFriends())*/