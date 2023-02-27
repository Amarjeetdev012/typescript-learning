// enum PrintMedia {
//     Newspaper,
//     Newsletter,
//     Magazine,
//     Book
// }

// console.log('PrintMedia', PrintMedia);

enum PrintMedia {
    Newspaper = 1,
    Newsletter = getPrintMediaCode('newsletter'),
    Magazine = Newsletter * 3,
    Book = 10
}

function getPrintMediaCode(mediaName: string): any {
    if (mediaName === 'newsletter') {
        return 5;
    }
}
console.log('PrintMedia', PrintMedia)

console.log(PrintMedia.Newsletter);; // returns 5
console.log(PrintMedia.Magazine);; // returns 15
