let interval = null;
function startCountDown(countDownDate){
    interval = setInterval(countdown, 1000,countDownDate);
}


function countdown(countDownDate){
    const distance = countDownDate - new Date().getTime();
    setNewValues(distance);

    if (distance < 0) {
        stopCountDown();
        resetValues();
        alert("Finish!")
    }
}
function  setNewValues(distance){
    const hourInMilliseconds = 1000 * 60 * 60;
    const minuteInMilliseconds = 1000 * 60;

    const days = Math.floor(distance / (hourInMilliseconds * 24));
    const hours = Math.floor((distance % (hourInMilliseconds * 24)) / (hourInMilliseconds));
    const minutes = Math.floor((distance % (hourInMilliseconds)) / (minuteInMilliseconds));
    const seconds = Math.floor((distance % (minuteInMilliseconds)) / 1000);


    const newValues = [{key:"days", value: days.toString()},
        {key:"hours", value: hours.toString()},
        {key:"minutes", value: minutes.toString()},
        {key:"seconds", value: seconds.toString()}
    ];
    updateElements(newValues);
}
function stopCountDown(){
    clearInterval(interval);
}

function resetValues(){
    const resetValues = [{key:"days", value: 0},
        {key:"hours", value: 0},
        {key:"minutes", value: 0},
        {key:"seconds", value: 0}
    ];
    updateElements(resetValues);
}

function updateElements(values){
    values.forEach((element) => {
        document.getElementById(element.key).innerHTML = element.value
    });

    //values.forEach(updateObjectElement);
}

/*
function updateObjectElement(element){
    document.getElementById(element.key).innerHTML = element.value;
}

 */
