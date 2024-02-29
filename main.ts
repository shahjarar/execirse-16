// creating a guest List Array

let guestList = ["Hamza" , "Usman" ,"Ayesha" ,"Areeba"];

// making variable for those guest who cant come
let dontcome = guestList[0];
// print the nameof guest who cant come
console.log(dontcome,"Naii Ahh Sakty han");
// Add or Remove values from Guest List Array

guestList.splice(0 , 1, "Amir");

// message print for Bigger Table
console.log("Good News !we found a Bigger Table For Dinner.");
// Adding a new Guest at starting index of array

guestList.unshift("Ali");

//Adding a new guest at ending index of array
guestList.push("Zain");

// get a middle index of our guest list array
let middleIndex: number = Math.floor(guestList.length / 2);

// Adding a new guest to middle index of array
guestList.splice(middleIndex, 0, "Osama")


console.log("Updated List of our Guests");

guestList.forEach(oneguest => console.log(`Salam ${oneguest}, would you like to dinner with me`));