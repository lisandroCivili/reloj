const setHours = ()=>{
    const actualHour = document.getElementById('actualHour');
    const actualMinute = document.getElementById('actualMinute');
    const actualSecs = document.getElementById('actualSecs');
    const amOrPm = document.getElementById('amOrPm');
    let actualDate = new Date();
    let hour = actualDate.getHours();
    if (hour > 12) {
        hour = hour%12;
        if (hour < 10) {
            hour = `0${hour}`;
        }
        amOrPm.innerText = 'PM';
    }else{
        amOrPm.innerText = 'AM';
    }
    let minute = actualDate.getMinutes();
    if (minute < 10) {
        minute = `0${minute}`;
    }
    let secs = actualDate.getSeconds();
    if (secs < 10) {
        secs = `0${secs}`;
    }
    actualHour.innerText = `${hour}:`;
    actualMinute.innerText = minute;
    actualSecs.innerText = secs;
}
const setDay = ()=>{
    const actualDay = document.getElementById('actualDay');
    const today = new Date();
    const day = (today.getDay());
    const numberDay = today.getDate();
    const month = (today.getMonth());
    const year = today.getFullYear();

    const days = ["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"];
    const months = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];

    actualDay.innerText = `${days[day]} ${numberDay} de ${months[month]} del ${year}`;

}

setDay()    
setInterval(setHours,1000)