// document.getElementById("count-el").innerText = 5

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

let welcomeEl = document.getElementById("welcome-el")

let name = "mickey"
let greeting = "Welcome back "

welcomeEl.innerText = greeting + name

welcomeEl.innerText += "👋"
