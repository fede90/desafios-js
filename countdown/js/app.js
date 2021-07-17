let now = new Date();

const initialDate = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    now.getHours(),
    now.getMinutes(),
    59,
    0);

startCountDown(initialDate);

function showSettings(){
    clearForm();
    const myForm = document.getElementById("form-settings");
    myForm.style.visibility = "initial";
    myForm.classList.add("settings-form-show");

    const settings = document.getElementById("settings");
    settings.classList.add("settings-show");
}

function startByButton(){
    stopCountDown();
    startCountDown(newCountDown());
}

function newCountDown(){
    const days = document.getElementById("settings-days").value;
    const hours = document.getElementById("settings-hours").value;
    const minutes = document.getElementById("settings-minutes").value;
    const seconds = document.getElementById("settings-seconds").value;

    now = new Date();
    return new Date(now.getFullYear(),
        now.getMonth(),
        now.getDate() + Number(days),
        now.getHours()+ Number(hours),
        now.getMinutes() + Number(minutes),
        now.getSeconds() + Number(seconds) + 1,
        now.getMilliseconds())
        .getTime();
}


function cancelCountDown(){
    const myForm = document.getElementById("form-settings");
    myForm.style.visibility = "hidden";
    myForm.classList.remove("settings-form-show");

    const settings = document.getElementById("settings");
    settings.classList.remove("settings-show");
}

function clearForm(){
    const resetValues = [{key:"settings-days", value: 0},
        {key:"settings-hours", value: 0},
        {key:"settings-minutes", value: 0},
        {key:"settings-seconds", value: 0}
    ];
    resetValues.forEach((element) => {
        document.getElementById(element.key).value = element.value
    });
}

