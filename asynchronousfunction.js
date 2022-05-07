function showTime(){
const date = new Date();
return date.getHours() +"HRs:"+date.getMinutes() +"Mins=" +date.getSeconds() +"seconds"
}

function showSessionExpire(){
    console.log("ActivityB:Your session expired at " +showTime());
}

console.log("Activity -A:trigeeeing Activity-B"+showTime());
setTimeout(showSessionExpire,5000);
console.log("ActivityA: Trigged ACtivity-B at "+showTime()+"will execute after 5 seconds");