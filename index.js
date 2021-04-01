// Code your solutions in this file
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
}

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }
    return gifts;
}

wrapGifts(gifts);

const names = ["Lisa", "Kaitlin", "Jan"];
const party = "surprise";



function writeCards(names, party) {
    const messages = [];
    for (let i = 0; i < names.length; i++) {
        messages.push(`Thank you, ${names[i]}, for the wonderful ${party} gift!`);
    }
    return messages;
}


writeCards(names, party)


function countDown(positiveInteger) {
    let i = positiveInteger + 1;
    while (i > 0) {
        console.log(i - 1);
        i--;
    }
}