// document.getElementById("count-el").innerText = 5

let count = 0

let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

function increment() {
    count += 1
    countEl.innerText = count

}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr  
    console.log(count)
}

let welcomeEl = document.getElementById("welcome-el")

let name = "mickey"
let greeting = "Welcome back "

welcomeEl.innerText = greeting + name

welcomeEl.innerText += "👋"
