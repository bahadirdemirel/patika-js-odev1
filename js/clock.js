// ask and place name
let userName = prompt("Adınız nedir ?");
let namePlace = document.getElementById("myName");
namePlace.innerText = userName;

// showTime()
function showTime() {
    var liveClock = new Date().toLocaleTimeString();
    let clockPlace = document.getElementById("myClock");
    var date = new Date();
    var numberOfDate = date.getDate();
    var convertedDay = determineDay(numberOfDate);
    clockPlace.innerText = `${liveClock} ${convertedDay}`;
    setTimeout(showTime, 1000); 
}

// return the name of the day
function determineDay(x) {
    switch(x){
        case 1:
            return "Pazartesi";
            break;
        case 2:
            return "Salı";
            break;
        case 3:
            return "Çarşamba";
            break;
        case 4:
            return "Perşembe";
            break;
        case 5:
            return "Cuma";
            break;
        case 6:
            return "Cumartesi";
            break;
        case 7:
            return "Pazar";
            break;
    }
}

showTime();