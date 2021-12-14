function CronStart() {
    console.log("Iniciando cronômetro");
    
    var hours = document.getElementById("cron-hours");
    var minutes = document.getElementById("cron-minutes");
    var seconds = document.getElementById("cron-seconds");

    var h = 0, m = 0, s = 0;

    console.log("Iniciando Intervalo");
    setInterval(function () {

        hours.innerHTML = h < 10 ? "0" + h : h;
        minutes.innerHTML = m < 10 ? "0" + m : m;
        seconds.innerHTML = s < 10 ? "0" + s : s;

        //Seconds Conditional
        if (s < 59 ){s++;}
        else{
            s = 0;
            //Minutes Conditional
            if (m < 59 ){m++;}
            else{
                m = 0;
                //Hours Conditional
                if (h < 23 ){h++;}
                else{
                    h = 0;
                }
            }
        }

    }, 1000);
}

function CronPause() {
    
}