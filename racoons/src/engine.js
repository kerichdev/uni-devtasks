const modal = document.querySelector("#modal");
const wlHeader = document.querySelector("#wlHeader");

let clickCounter = 0;
let buttonArray = [0, 0, 0, 
                   0, 0, 0, 
                   0, 0, 0];

//randomize
buttonArray[Math.floor(Math.random()*9)] = 1;

let buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
        if (buttonArray[Number(button.id[6])] == 1) {
            event.target.className = "racButton loseButton";
            modal.showModal();
        }
        else {
            event.target.className = "racButton winButton";
            clickCounter++;
        }
        
        if (clickCounter == 8) {
            wlHeader.innerHTML = "You win!"
            modal.showModal();
        } 
    });
});
