 let guests: string[] = ["Kendal Jennar","Selena Gomaz","Justin Bieber"];
    guests. forEach (guests =>
    console.log(`${guests} You are invited to a party of my birthday`))

let notAttend: string= "Selena Gomaz";
console.log(`Unfortunatly ${notAttend} will not be able to come to today's birthday party`);
guests = guests.map(guest => guest === notAttend ? "Belle Haddid" : guest);
guests. forEach (guest =>
console.log(`${guest} you are invited to birthday party`));
