"use strict";
// enum PrintMedia {
//     Newspaper,
//     Newsletter,
//     Magazine,
//     Book
// }
// console.log('PrintMedia', PrintMedia);
var PrintMedia;
(function (PrintMedia) {
    PrintMedia[PrintMedia["Newspaper"] = 1] = "Newspaper";
    PrintMedia[PrintMedia["Newsletter"] = getPrintMediaCode('newsletter')] = "Newsletter";
    PrintMedia[PrintMedia["Magazine"] = PrintMedia.Newsletter * 3] = "Magazine";
    PrintMedia[PrintMedia["Book"] = 10] = "Book";
})(PrintMedia || (PrintMedia = {}));
function getPrintMediaCode(mediaName) {
    if (mediaName === 'newsletter') {
        return 5;
    }
}
console.log('PrintMedia', PrintMedia);
console.log(PrintMedia.Newsletter);
; // returns 5
console.log(PrintMedia.Magazine);
; // returns 15
