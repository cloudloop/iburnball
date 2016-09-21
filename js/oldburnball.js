function playTime() {
    var rangerVal = document.getElementById("timeslider").value;
    document.getElementById("gametime").innerHTML = Math.round(rangerVal);
    return Math.round(rangerVal);
}

function getValues() {
    var T1 = document.getElementById("TeamName1").value;
    var T2 = document.getElementById("TeamName2").value;
    var gameTime = playTime();
    console.log(T1);
    console.log(T2);
    console.log(gameTime);
    createCookie("Tname1",T1);
    createCookie("Tname2",T2);
    createCookie("GTime",gameTime,1);
    window.location.href = "gameview.html"
}

function createCookie(Cname,Cvalue) {
    document.cookie = Cname + "=" + Cvalue;
} 

var P1 = 0;
var P2 = 0;

function InitiateGame() {
    cookieArray = document.cookie.split(";");
    T1 = cookieArray[0].split("=")[1];
    T2 = cookieArray[1].split("=")[1];
    gameTime = cookieArray[2].split("=")[1];
    document.getElementById("nameT1").innerHTML = T1;
    document.getElementById("nameT2").innerHTML = T2;
    updateScore(P1,P2);
    gameTimer(gameTime * 60);
    console.log(T1+T2+gameTime);
    
}

function StartGame() {
    document.getElementById("StartofGame").innerHTML = T1 + " " + T2;
    document.getElementById("inbutton").style.display = "block";
    document.getElementById("outbutton").style.display = "block";
    document.getElementById("gametimer").style.display = "block";
    document.getElementById("score").style.display = "block";
    UpdateScore(P1, P2);
    Gametimer(10 * 60);
}


function updateScore(Po1, Po2) {
    document.getElementById("scoreT1").innerHTML = P1;
    document.getElementById("scoreT2").innerHTML = P2;
}

function Homerun() {
    P1 = P1 + 5;
    updateScore(P1, P2);
}

function Lap() {
    P1 = P1 + 1;
    updateScore(P1, P2);
}

function lyra(NoHands) {
    P2 = P2 + NoHands;
    updateScore(P1, P2);
}

function Burn() {
    P2++;
    updateScore(P1, P2);
}

function gameTimer(sec) {
    var MinutesLeft = Math.floor(sec / 60);
    SecondsLeftOnTheMinute = sec - MinutesLeft * 60;
    if (SecondsLeftOnTheMinute < 10) {
        SecondsLeftOnTheMinute = "0" + SecondsLeftOnTheMinute;
    }

    setTimeout(function () {
        document.getElementById("gametimer").innerHTML = MinutesLeft + ":" + SecondsLeftOnTheMinute;
        gameTimer(sec - 1);
    }, 1000);
}
