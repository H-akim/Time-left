var countDownDate = new Date("Dec 31, 2065 00:00:00").getTime();
var x = setInterval(function(){
    var now = new Date().getTime();
    var distance = countDownDate - now;

    // var years = Math.floor((distance % (1000 * 60 * 60 * 24 * 30 * 12 * 356)) / (1000 * 60 * 60 * 24 * 30 * 12));
    var years   = Math.floor(distance / (1000 * 60 * 60 * 24 * 365));
    // var months = Math.floor((distance % (1000 * 60 * 60 * 24 * 30 * 12)) / (1000 * 60 * 60 * 24 * 30));
    var months = Math.floor((distance % (1000 * 60 * 60 * 60 * 30 * 24 * 12)) / (1000 * 60 * 60 * 30 *24 ));
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
     


    document.getElementById("years").innerHTML = years;
    document.getElementById("months").innerHTML = months;
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if(distance < 0){
        clearInterval(x);
        document.getElementById("years").innerHTML = "00";
        document.getElementById("months").innerHTML = "00";
        document.getElementById("days").innerHTML = " 00";
        document.getElementById("hours").innerHTML = "00";
        document.getElementById("minutes").innerHTML = "00";
        document.getElementById("seconds").innerHTML = "00";
    }
},1000);