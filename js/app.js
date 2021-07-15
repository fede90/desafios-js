let now = new Date();

const initialDate = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    now.getHours(),
    now.getMinutes(),
    59,
    0);

startCountdown(initialDate);

function showSettings(){
    const myForm = document.getElementById("form-settings");
    myForm.style.visibility = "initial";
    myForm.classList.add("settings-form-show");
}

function startByButton(){
    stopCountDown();

    const days = document.getElementById("settings-days").value;
    const hours = document.getElementById("settings-hours").value;
    const minutes = document.getElementById("settings-minutes").value;
    const seconds = document.getElementById("settings-seconds").value;

    now = new Date();
    const pickedDate = new Date(now.getFullYear(),
        now.getMonth(),
        now.getDate() + Number(days),
        now.getHours()+ Number(hours),
        now.getMinutes() + Number(minutes),
        now.getSeconds() + Number(seconds) + 1,
        now.getMilliseconds())
        .getTime();

    startCountdown(pickedDate);

}