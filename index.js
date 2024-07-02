
let countEl = document.getElementById("count-el")
let count = 0
let saveEl = document.getElementById("save-el")

function reset (){
    count = 0
    countEl.textContent = 0
}

function increment(){
    count+=1
    countEl.textContent=count

}


function save () {
    let countStr = count + " - "
    saveEl.textContent +=countStr
    reset()
}
