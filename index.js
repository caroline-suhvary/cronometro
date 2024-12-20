//  STOP WATCH PROGRAM ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

/*
// getting the numbers of the clock
const display = document.getElementById("display");
// creating the variable timer that is going to hold the ID of setInterval function
let timer = null;
let startTime = 0;
let elapsedTime = 0;
// if the clock is running, we will flip this to be true, when we stop it, it will become false
let isRunning = false;


function start(){

    if(!isRunning){
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update, 10); // we will call the update function every 10 ms
        isRunning = true;
    }
}

function stop(){

    if(isRunning){
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        isRunning = false;
    }    
}

function reset(){

    clearInterval(timer);
    startTime = 0;
    elapsedTime = 0;
    isRunning = false;
    display.textContent = "00:00:00:00";
}

function update(){

    const currentTime = Date.now();

    // the current time minus the start time will gine us the answer in miliseconds
    elapsedTime = currentTime - startTime;  

    // we need to convert miliseconds into hours, minutes and seconds
    // converting miliseconds to hours = 1000 miliseconds * 60 seconds * 60 minutes
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));

    // converting miliseconds to minutes = 1000 miliseconds * 60 seconds
    // modulus gives the remainder of any division, we dont want our minutes to go above 60 or hit 60
    // once it hits 60 it will reset back to zero
    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);

    // to convert miliseconds to seconds = 1000 % 60
    let seconds = Math.floor(elapsedTime / 1000 % 60);

    // we divide 1000 /10 because we only want 2 didits
    let miliseconds = Math.floor(elapsedTime % 1000 / 10);

    // in order to show 2 digits in hours, minutes, seconds, we need to convert them into string and add a zero
    // padStart method, for the first 2 digits, add a zero. So, when the hour is just one digit, it will complete with a zero
    hours = String(hours).padStart(2,"0");
    minutes = String(minutes).padStart(2,"0");
    seconds = String(seconds).padStart(2,"0");
    miliseconds = String(miliseconds).padStart(2,"0");

    display.textContent = `${hours}:${minutes}:${seconds}:${miliseconds}`;
}
*/
// the same code but without the comments

const display = document.getElementById("display");
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;


function start(){
    if(!isRunning){
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update, 10); // we will call the update function every 10 ms
        isRunning = true;
    }
}

function stop(){
    if(isRunning){
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        isRunning = false;
    }    
}

function reset(){
    clearInterval(timer);
    startTime = 0;
    elapsedTime = 0;
    isRunning = false;
    display.textContent = "00:00:00:00";
}

function update(){
    const currentTime = Date.now();

    elapsedTime = currentTime - startTime;  
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
    let seconds = Math.floor(elapsedTime / 1000 % 60);
    let miliseconds = Math.floor(elapsedTime % 1000 / 10);
    hours = String(hours).padStart(2,"0");
    minutes = String(minutes).padStart(2,"0");
    seconds = String(seconds).padStart(2,"0");
    miliseconds = String(miliseconds).padStart(2,"0");

    display.textContent = `${hours}:${minutes}:${seconds}:${miliseconds}`;
}
