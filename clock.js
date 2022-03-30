let nameCol = document.querySelector(".user-name");
let clockCol = document.querySelector(".clock");


let userName = prompt("Adınızı giriniz: ");
nameCol.innerHTML = `Merhaba ${userName}! Hoş geldin!`;

function startTime() {
    let today = new Date();
    let hour = today.getHours();
    let day = today.getDay();
    let second = today.getSeconds();
    let minute = today.getMinutes();

    switch (day) {
        case 1:
            day = "Pazartesi";
            break;
        case 2:
            day = "Salı";
            break;
        case 3:
            day = "Çarşamba";
            break;
        case 4:
            day = "Perşembe";
            break;
        case 5:
            day = "Cuma";
            break;
        case 6:
            day = "Cumartesi";
            break;
        case 7:
            day = "Pazar";
            break;

    }
}

function checkTime(i) {
    if (i < 10) {
        i += "0" + i;
    }
    return i;
}

hour = checkTime(hour);
second = checkTime(second);
minute = checkTime(minute);

clockCol.innerHTML = `${hour}:${minutes}:${second}:${day}`;
let t = setTimeout(startTime, 500);
