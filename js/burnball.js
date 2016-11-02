var i = 0;
var history = [];
var P1 = 0;
var P2 = 0; 
var pointbatterin = 1;
var pointhomerun = 6;
var point1hcatch = 3;
var point2hcatch = 1;
var pointburn = 1;
var totGameTime = 10*60;


function updateScore(P1,P2) {
    document.getElementById("pointT1").innerHTML = P1;
    document.getElementById("pointT2").innerHTML = P2;
}

function batterin() {
    P1++;
    updateScore(P1,P2);
}

function scoreadd(id){
    var idd = document.getElementById(id).id;
    if (idd == "batterin"){
        P1 = P1 + pointbatterin;
    }
    else if (idd == "homerun"){
        P1 = P1 + pointhomerun;
    }
    else if (idd == "1hcatch"){
        P2 = P2 + point1hcatch;
    }
    else if (idd == "2hcatch"){
        P2 = P2 + point2hcatch;
    }
    else if (idd == "burn"){
        P2 = P2 + pointburn;
    }
    updateScore(P1,P2);
    var sparvec  = [idd,P1,P2];
    console.log(sparvec);
    history[i] = sparvec;
    history[i+1] = [];
    i++;
}

function timeUpdate(gameTimeRemaining){
    gameTimeMin = Math.floor(gameTimeRemaining/60);
    gameTimeSec = gameTimeRemaining%60;
    if (gameTimeMin < 10 ){
        gameTimeMin = "0" + gameTimeMin;
    }
    if (gameTimeSec < 10 ) {
        gameTimeSec = "0" + gameTimeSec;
    }
    document.getElementById("time").innerHTML = gameTimeMin + ":" + gameTimeSec;
}

function timecals(time){
    gameTime = time - 1;
    setTimeout(function(){
        timeUpdate(gameTime);
        timecals(gameTime);
    },1000)
}
