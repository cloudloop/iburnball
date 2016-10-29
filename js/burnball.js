var i = 0;
var history = [];
var P1 = 0;
var P2 = 0; 
var pointbatterin = 1;
var pointhomerun = 5;
var point1hcatch = 5;
var point2hcatch = 5;
var pointburn = 5;


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
    console.log(history);
}