let interval = null;
function startCountdown(countDownDate){

    interval = setInterval(countdown, 1000,countDownDate);

}


function countdown(countDownDate){
    const now = new Date().getTime();
    let distance = countDownDate - now;
    const hourInMilliseconds = 1000 * 60 * 60;
    const minuteInMilliseconds = 1000 * 60;

    let days = Math.floor(distance / (hourInMilliseconds * 24));
    let hours = Math.floor((distance % (hourInMilliseconds * 24)) / (hourInMilliseconds));
    let minutes = Math.floor((distance % (hourInMilliseconds)) / (minuteInMilliseconds));
    let seconds = Math.floor((distance % (minuteInMilliseconds)) / 1000);


    document.getElementById("days").innerHTML = days.toString();
    document.getElementById("hours").innerHTML = hours.toString();
    document.getElementById("minutes").innerHTML = minutes.toString();
    document.getElementById("seconds").innerHTML = seconds.toString();

    if (distance < 0) {
        clearInterval(interval);
        document.getElementById("days").innerHTML = "0";
        document.getElementById("hours").innerHTML = "0";
        document.getElementById("minutes").innerHTML = "0";
        document.getElementById("seconds").innerHTML = "0";
        alert("Finish!")
    }
}

function stopCountDown(){
    clearInterval(interval);
}