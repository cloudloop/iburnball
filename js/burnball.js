
//------------
//MAIN PAGE
//------------

function findingCookieRyan(){
    if(document.cookie == ""){
        creatingCookieRyan();
    } else {
        loadingCookieRyan();
    }
}

var settingsParameters = ["pointsBatterIn","pointsHomeRun","points1hCatch","points2hCatch","pointsBurn","settingGameTime"];
var settingsValues = [1,10,3,1,1,10];

function creatingCookieRyan(){
    for( i = 0; i < settingsParameters.length;i++){
        createCookie(settingsParameters[i],settingsValues[i]);
    };
    var date = new Date;
    date.setDate(date.getDate()+7);
    document.cookie="expires="+ date.toGMTString() +";  path=/";
}

function loadingCookieRyan(){
    console.log("Kolla om tiden inte är för kort, annars kör. Ladda Cookie Ryan");
}

function createCookie(Cname,Cvalue) {
    document.cookie = Cname + "=" + Cvalue;
    console.log(document.cookie)
}



//------------
//SETTINGS PAGE 
//------------


function loadCookieRyan(){
    cookiesplit = document.cookie.split(";")
    for(i=0;i<cookiesplit.length-1;i++){
        var settingId = cookiesplit[i].split("=")[0].trim();
        var settingValue = cookiesplit[i].split("=")[1];
        console.log("."+settingId,"."+settingValue);
        document.getElementById(settingId).innerHTML = settingValue;
    };
};

function minus(id) {
    var x = document.getElementById(id).innerHTML;
    console.log(x);
    if(x > 0){
        document.getElementById(id).innerHTML = x-1;
    } else {
        document.getElementById(id).innerHTML = x;
    };
}

function plus(id) {
    var x = parseInt(document.getElementById(id).innerHTML);
    document.getElementById(id).innerHTML = x+1;
}

function saveSettings() {
    for(i=0;i<settingsParameters.length;i++){ 
        var id = settingsParameters[i];
        var value = document.getElementById(id).innerHTML;
        createCookie(id,"");
        
        createCookie(id,value);
        console.log(document.cookie);
    }
}





////////////////////////////////////////////////
//GAMETIME
////////////////////////////////////////////////

var settingsorder = [];

function loadSettings(i){
    cookiesplit2 = document.cookie.split(";")
    var val2 = cookiesplit2[i-1].split("=")[1];
    return parseInt(val2);
}

var i = 0;
var history = [];
var P1 = 0;
var P2 = 0; 
var pause = 0;

function updateScore(P1,P2) {
    document.getElementById("pointT1").innerHTML = P1;
    document.getElementById("pointT2").innerHTML = P2;
}

function scoreadd(idhandle){
    var pointbatterin = loadSettings(1);
    var pointhomerun = loadSettings(2);
    var point1hcatch = loadSettings(3);
    var point2hcatch = loadSettings(4);
    var pointburn = loadSettings(5);
    
    var idd = document.getElementById(idhandle).id;
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
    var sparvec  = [idd,P1,P2];//,gameTimeMin,gameTimeSec,pause];
    console.log(sparvec);
    history[i] = sparvec;
    history[i+1] = [];
    i++;
}

function startTimer(){
    var totGameTime = loadSettings(6)*60;
    timeUpdate(totGameTime);
    timecals(totGameTime);
}


function timeUpdate(gameTimeRemaining){
    var gameTimeMin = Math.floor(gameTimeRemaining/60);
    var gameTimeSec = gameTimeRemaining%60;
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
