// document.getElementById("count-el").innerText = 5

let name = "mikey"
let greeting = "Hi, my name is "
let myGreeting = greeting + name 
console.log(myGreeting)

let count = 0

let countEl = document.getElementById("count-el")

function increment() {
    count = count + 1
    countEl.innerText = count
    console.log(count)
}

function save() {
    console.log(count)
}


