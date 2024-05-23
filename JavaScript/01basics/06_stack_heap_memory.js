// there are 2 type of memory 1. stack 2. heap

// Stack (Primitive), Heap(Non-Primitive)

let myBuisnessname = "ps-group"

let anotherName = myBuisnessname
console.log(anotherName)
anotherName = "pd-parsottam"

console.log(anotherName);

let userOne = {
    email: "me@parth.in",
    upi: "9876543219@growwy"
}

// console.log(user.email)ls


let userTwo = userOne

// console.log(userTwo)

userTwo.email = "me@parththakkar.in"


console.log(userOne.email);

console.log(userTwo.email);

// as we see here heap 