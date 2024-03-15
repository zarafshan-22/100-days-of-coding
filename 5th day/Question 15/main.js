var guests = ["Kendal Jennar", "Selena Gomaz", "Justin Bieber"];
guests.forEach(function (guests) {
    return console.log("".concat(guests, " You are invited to a party of my birthday"));
});
var notAttend = "Selena Gomaz";
console.log("Unfortunatly ".concat(notAttend, " will not be able to come to today's birthday party"));
guests = guests.map(function (guest) { return guest === notAttend ? "Belle Haddid" : guest; });
guests.forEach(function (guest) {
    return console.log("".concat(guest, " you are invited to birthday party"));
});
