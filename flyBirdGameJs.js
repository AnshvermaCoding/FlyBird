let shopBlock = document.querySelector("#shopBlock");
let optionBlock = document.querySelector("#optionBlock");
let creditBlock = document.querySelector("#creditBlock");
let settingBlock = document.querySelector("#settingBlock");
let toggleBtn1 = document.querySelector("#toggleBtn1");
let toggleBtn2 = document.querySelector("#toggleBtn2");
let toggleBtn3 = document.querySelector("#toggleBtn3");
let toggleBtnCircle1 = document.querySelector("#toggleBtnCircle1");
let toggleBtnCircle2 = document.querySelector("#toggleBtnCircle2");
let toggleBtnCircle3 = document.querySelector("#toggleBtnCircle3");
let option01 = document.querySelector("#option01");
let buyBtn1 = document.querySelector("#buyBtn1");
let buyBtn2 = document.querySelector("#buyBtn2");
let buyBtn3 = document.querySelector("#buyBtn3");
let buyBtn4 = document.querySelector("#buyBtn4");
let scoreValue = document.querySelector("#scoreValue");
let message = document.querySelector("#message");
let message2 = document.querySelector("#message2");
let message3 = document.querySelector("#message3");
let profileBlock = document.querySelector("#profileBlock");
let scoreValue2 = document.querySelector("#scoreValue2");
let highScoreVal = document.querySelector("#highScoreVal");
let enterNameBox = document.querySelector("#enterNameBox");
let enterName = document.querySelector("#enterName");
let name = document.querySelector("#name");
let profilePicBlock = document.querySelector("#profilePicBlock");
let profilePic = document.querySelector("#profilePic");
let navProfile = document.querySelector("#profile");
let textAchivement = document.querySelector("#textAchivement");
let reward1 = document.querySelector("#reward1");
let reward2 = document.querySelector("#reward2");
let reward3 = document.querySelector("#reward3");
let reward4 = document.querySelector("#reward4");
let category1 = document.querySelector("#category1");
let category2 = document.querySelector("#category2");
let item1 = document.querySelector("#item1");
let item2 = document.querySelector("#item2");
let item3 = document.querySelector("#item3");
let item4 = document.querySelector("#item4");
let item01 = document.querySelector("#item01");
let item02 = document.querySelector("#item02");
let item03 = document.querySelector("#item03");
let item04 = document.querySelector("#item04");
let buyBtn01 = document.querySelector("#buyBtn01");
let buyBtn02 = document.querySelector("#buyBtn02");
let buyBtn03 = document.querySelector("#buyBtn03");
let buyBtn04 = document.querySelector("#buyBtn04");
let background = document.querySelector("#background");
let navBar = document.querySelector("#navBar");
let footer = document.querySelector("#footer");


let sound = "true";
let music = "true";
let vibrate = "true";
let speed;
let score2;

localStorage.setItem("speed",speed);
localStorage.setItem("soundIs",sound);
localStorage.setItem("musicIs",music);
localStorage.setItem("vibrateIs",vibrate);
speed = option01.value;
localStorage.setItem("speed",speed);

let scores = 0;
let highScore;
let newGame = "true";
let newGame2 = "true";
localStorage.setItem("newGame","true");
localStorage.setItem("newGame2","true");
if(localStorage.getItem("newGame") === "true") {
    newGame = "false";
    localStorage.setItem("newGame","false");
    localStorage.setItem("scoreIs",0);
    localStorage.setItem("scores",0);
    highScoreVal.innerText = localStorage.getItem("scores");
}


let updateScore = setInterval(() => {
    scores = localStorage.getItem("scores");
    if(parseInt(scores) >= 1) {
        scoreValue.innerText = parseInt(scores);
        scoreValue2.innerText = parseInt(scores);
        localStorage.setItem("scoreIs",parseInt(scores));
    }
},50);

let prevScore;
if(localStorage.getItem("scores") > 0) {
setInterval(() => {
    score2 = localStorage.getItem("score2");
},100);
}
function startGame() {
    prevScore = localStorage.getItem("score2");
    window.location.href = "FlyBird.html";
    
    
}
shopBlock.style.transform = "scale(0.5)";
optionBlock.style.transform = "scale(0.5)";
creditBlock.style.transform = "scale(0.5)";
settingBlock.style.transform = "scale(0.5)";
profileBlock.style.transform = "scale(0.5)";
shopBlock.style.transition = "0.5s";
optionBlock.style.transition = "0.5s";
creditBlock.style.transition = "0.5s";
settingBlock.style.transition = "0.5s";
profileBlock.style.transition = "0.5s";
shopBlock.style.opacity = "0";
optionBlock.style.opacity = "0";
creditBlock.style.opacity = "0";
settingBlock.style.opacity = "0";
profileBlock.style.opacity = "0";
function shop() {
    shopBlock.style.transform = "scale(1)";
    shopBlock.style.opacity = "1";
    shopBlock.style.visibility = "visible";
    optionBlock.style.transform = "scale(0.5)";
    creditBlock.style.transform = "scale(0.5)";
    settingBlock.style.transform = "scale(0.5)";
    profileBlock.style.transform = "scale(0.5)";
    optionBlock.style.opacity = "0";
    creditBlock.style.opacity = "0";
    settingBlock.style.opacity = "0";
    profileBlock.style.opacity = "0";
    optionBlock.style.visibility = "hidden";
    creditBlock.style.visibility = "hidden";
    settingBlock.style.visibility = "hidden";
    profileBlock.style.visibility = "hidden";
}
function option() {
    optionBlock.style.transform = "scale(1)";
    optionBlock.style.opacity = "1";
    optionBlock.style.visibility = "visible";
    shopBlock.style.transform = "scale(0.5)";
    creditBlock.style.transform = "scale(0.5)";
    settingBlock.style.transform = "scale(0.5)";
    profileBlock.style.transform = "scale(0.5)";
    shopBlock.style.opacity = "0";
    creditBlock.style.opacity = "0";
    settingBlock.style.opacity = "0";
    profileBlock.style.opacity = "0";
    shopBlock.style.visibility = "hidden";
    creditBlock.style.visibility = "hidden";
    settingBlock.style.visibility = "hidden";
    profileBlock.style.visibility = "hidden";
}
function credit() {
    creditBlock.style.transform = "scale(1)";
    creditBlock.style.opacity = "1";
    creditBlock.style.visibility = "visible";
    shopBlock.style.transform = "scale(0.5)";
    optionBlock.style.transform = "scale(0.5)";
    settingBlock.style.transform = "scale(0.5)";
    profileBlock.style.transform = "scale(0.5)";
    shopBlock.style.opacity = "0";
    optionBlock.style.opacity = "0";
    settingBlock.style.opacity = "0";
    profileBlock.style.opacity = "0";
    shopBlock.style.visibility = "hidden";
    optionBlock.style.visibility = "hidden";
    settingBlock.style.visibility = "hidden";
    profileBlock.style.visibility = "hidden";
}
function setting() {
    settingBlock.style.transform = "scale(1)";
    settingBlock.style.opacity = "1";
    settingBlock.style.visibility = "visible";
    shopBlock.style.transform = "scale(0.5)";
    optionBlock.style.transform = "scale(0.5)";
    creditBlock.style.transform = "scale(0.5)";
    profileBlock.style.transform = "scale(0.5)";
    shopBlock.style.opacity = "0";
    optionBlock.style.opacity = "0";
    creditBlock.style.opacity = "0";
    profileBlock.style.opacity = "0";
    shopBlock.style.visibility = "hidden";
    optionBlock.style.visibility = "hidden";
    creditBlock.style.visibility = "hidden";
    profileBlock.style.visibility = "hidden";
}

let color2 = true;
let color3 = true;
let color4 = true;
let color = "blue";
localStorage.setItem("color",color);
buyBtn1.style.color = "darkblue";
function buyColor1() {
    color = "blue";
    localStorage.setItem("color",color);
    buyBtn1.style.color = "darkblue";
    buyBtn2.style.color = "red";
    buyBtn3.style.color = "red";
    buyBtn4.style.color = "red";
    buyBtn1.innerText = "USE";
    message.style.visibility = "visible";
    setTimeout(() => { 
        message.style.visibility = "hidden"; 
    },1000);
}
function buyColor2() {
    if(color2 === true) {
    if(parseInt(scoreValue.innerText) >= 400) {
        color = "red";
        localStorage.setItem("color",color);
        buyBtn1.style.color = "red";
        buyBtn2.style.color = "darkblue";
        buyBtn3.style.color = "red";
        buyBtn4.style.color = "red";
        buyBtn2.innerText = "USE";
        scoreValue.innerText = parseInt(scoreValue.innerText) - 400;
        color2 = false;
        message.style.visibility = "visible";
        setTimeout(() => { 
            message.style.visibility = "hidden"; 
        },1000);
    } else {
        message2.style.visibility = "visible";
        setTimeout(() => { 
            message2.style.visibility = "hidden"; 
        },1000);
    }
    } else {
        color = "red";
        localStorage.setItem("color",color);
        buyBtn1.style.color = "red";
        buyBtn2.style.color = "darkblue";
        buyBtn3.style.color = "red";
        buyBtn4.style.color = "red";
        message.style.visibility = "visible";
        setTimeout(() => { 
            message.style.visibility = "hidden"; 
        },1000);
    }
}
function buyColor3() {
    if(color3 === true) {
    if(parseInt(scoreValue.innerText) >= 800) {
        color = "darkgreen";
        localStorage.setItem("color",color);
        buyBtn1.style.color = "red";
        buyBtn2.style.color = "red";
        buyBtn3.style.color = "darkblue";
        buyBtn4.style.color = "red";
        buyBtn3.innerText = "USE";
        scoreValue.innerText = parseInt(scoreValue.innerText) - 800;
        color3 = false;
        message.style.visibility = "visible";
        setTimeout(() => { 
            message.style.visibility = "hidden"; 
        },1000);
    } else {
        message2.style.visibility = "visible";
        setTimeout(() => { 
            message2.style.visibility = "hidden"; 
        },1000);
    }
    } else {
        color = "darkgreen";
        localStorage.setItem("color",color);
        buyBtn1.style.color = "red";
        buyBtn2.style.color = "red";
        buyBtn3.style.color = "darkblue";
        buyBtn4.style.color = "red";
        message.style.visibility = "visible";
        setTimeout(() => { 
            message.style.visibility = "hidden"; 
        },1000);
    }
}
function buyColor4() {
    if(color4 === true) {
    if(parseInt(scoreValue.innerText) >= 1200) {
        color = "midnightblue";
        localStorage.setItem("color",color);
        buyBtn1.style.color = "red";
        buyBtn2.style.color = "red";
        buyBtn3.style.color = "red";
        buyBtn4.style.color = "darkblue";
        buyBtn4.innerText = "USE";
        scoreValue.innerText = parseInt(scoreValue.innerText) - 1200;
        color4 = false;
        message.style.visibility = "visible";
        setTimeout(() => { 
            message.style.visibility = "hidden"; 
        },1000);
    } else {
        message2.style.visibility = "visible";
        setTimeout(() => { 
            message2.style.visibility = "hidden"; 
        },1000);
    }
    } else {
        color = "midnightblue";
        localStorage.setItem("color",color);
        buyBtn1.style.color = "red";
        buyBtn2.style.color = "red";
        buyBtn3.style.color = "red";
        buyBtn4.style.color = "darkblue";
        message.style.visibility = "visible";
        setTimeout(() => { 
            message.style.visibility = "hidden"; 
        },1000);
    }
}
function closeBlocks() {
    shopBlock.style.transform = "scale(0.5)";
    optionBlock.style.transform = "scale(0.5)";
    creditBlock.style.transform = "scale(0.5)";
    settingBlock.style.transform = "scale(0.5)";
    profileBlock.style.transform = "scale(0.5)";
    shopBlock.style.opacity = "0";
    optionBlock.style.opacity = "0";
    creditBlock.style.opacity = "0";
    settingBlock.style.opacity = "0";
    profileBlock.style.opacity = "0";
    shopBlock.style.visibility = "hidden";
    optionBlock.style.visibility = "hidden";
    creditBlock.style.visibility = "hidden";
    settingBlock.style.visibility = "hidden";
    profileBlock.style.visibility = "hidden";
    // console.log(option01.value);
    speed = option01.value;
    localStorage.setItem("speed",speed);
}

// settings buttons
let mode1 = true;
let mode2 = true;
let mode3 = true;
toggleBtnCircle1.style.transform = "translateX(83px)";
toggleBtnCircle2.style.transform = "translateX(83px)";
toggleBtnCircle3.style.transform = "translateX(83px)";
toggleBtn1.style.backgroundColor = "aqua";
toggleBtn2.style.backgroundColor = "aqua";
toggleBtn3.style.backgroundColor = "aqua";
function toggleBtn01() {
    toggleBtnCircle1.style.transition = "0.8s";
    toggleBtn1.style.transition = "0.8s";
    if(mode1 === true) {
        toggleBtnCircle1.style.transform = "translateX(0px)";
        toggleBtn1.style.backgroundColor = "aliceblue";
        mode1 = false;
        sound = "false";
        localStorage.setItem("soundIs",sound);
    } else {
        toggleBtnCircle1.style.transform = "translateX(83px)";
        toggleBtn1.style.backgroundColor = "aqua";
        mode1 = true;
        sound = "true";
        localStorage.setItem("soundIs",sound);
    }
    setTimeout(() => {
        toggleBtnCircle1.style.transition = "0s";
        toggleBtn1.style.transition = "0s";
    },800);
}
function toggleBtn02() {
    toggleBtnCircle2.style.transition = "0.8s";
    toggleBtn2.style.transition = "0.8s";
    if(mode2 === true) {
        toggleBtnCircle2.style.transform = "translateX(0px)";
        toggleBtn2.style.backgroundColor = "aliceblue";
        mode2 = false;
        music = "false";
        localStorage.setItem("musicIs",music);
    } else {
        toggleBtnCircle2.style.transform = "translateX(83px)";
        toggleBtn2.style.backgroundColor = "aqua";
        mode2 = true;
        music = "true";
        localStorage.setItem("musicIs",music);
    }
    setTimeout(() => {
        toggleBtnCircle2.style.transition = "0s";
        toggleBtn2.style.transition = "0s";
    },800);
}
function toggleBtn03() {
    toggleBtnCircle3.style.transition = "0.8s";
    toggleBtn3.style.transition = "0.8s";
    if(mode3 === true) {
        toggleBtnCircle3.style.transform = "translateX(0px)";
        toggleBtn3.style.backgroundColor = "aliceblue";
        mode3 = false;
        vibrate = "false";
        localStorage.setItem("vibrateIs",vibrate);
    } else {
        toggleBtnCircle3.style.transform = "translateX(83px)";
        toggleBtn3.style.backgroundColor = "aqua";
        mode3 = true;
        vibrate = "true";
        localStorage.setItem("vibrateIs",vibrate);
    }
    setTimeout(() => {
        toggleBtnCircle3.style.transition = "0s";
        toggleBtn3.style.transition = "0s";
    },800);
}

// reset game

function resetGame() {
    scores = 0;
    scoreValue.innerText = parseInt(scores);
    scoreValue2.innerText = parseInt(scores);
    highScoreVal.innerText = parseInt(scores);
    localStorage.setItem("scores",0);
    localStorage.setItem("scoreIs",0);
    /* clearInterval(updateScore);
    setTimeout(() => {
        setInterval(updateScore,50);
    },50)
    */
    message3.style.visibility = "visible";
    setTimeout(() => { 
        message3.style.visibility = "hidden"; 
    },1000);
}

let firstGame = true;
function profile() {
    profileBlock.style.transform = "scale(1)";
    profileBlock.style.opacity = "1";
    profileBlock.style.visibility = "visible";
    shopBlock.style.transform = "scale(0.5)";
    optionBlock.style.transform = "scale(0.5)";
    creditBlock.style.transform = "scale(0.5)";
    settingBlock.style.transform = "scale(0.5)";
    shopBlock.style.opacity = "0";
    optionBlock.style.opacity = "0";
    creditBlock.style.opacity = "0";
    settingBlock.style.opacity = "0";
    shopBlock.style.visibility = "hidden";
    optionBlock.style.visibility = "hidden";
    creditBlock.style.visibility = "hidden";
    settingBlock.style.visibility = "hidden";
    if(parseInt(scores) > 0) {
    if(firstGame === true) {
        firstGame = false;
        highScoreVal.innerText = localStorage.getItem("scores");
    }
    }
    if(prevScore <= localStorage.getItem("score2")) {
        highScoreVal.innerText = localStorage.getItem("score2");
    }
    
}
function enterNameBlock() {
    enterNameBox.style.visibility = "visible";
}
function saveName() {
    if(enterName.value === "") {
        name.innerText = "Player";
    } else {
        name.innerText = enterName.value;
    }
    enterNameBox.style.visibility = "hidden";
}
function profilePicsBlock() {
    profilePicBlock.style.visibility = "visible";
}
function closeProfilePics() {
    profilePicBlock.style.visibility = "hidden";
}
function selectProfilePic1() {
    navProfile.style.background = "url('profile2.jpg')";
    profilePic.style.background = "url('profile2.jpg')";
    navProfile.style.backgroundSize = "cover";
    profilePic.style.backgroundSize = "cover";
}
function selectProfilePic2() {
    navProfile.style.background = "url('profile1.jpg')";
    profilePic.style.background = "url('profile1.jpg')";
    navProfile.style.backgroundSize = "cover";
    profilePic.style.backgroundSize = "cover";
}
function selectProfilePic3() {
    navProfile.style.background = "url('profile3.jpg')";
    profilePic.style.background = "url('profile3.jpg')";
    navProfile.style.backgroundSize = "cover";
    profilePic.style.backgroundSize = "cover";
}
function selectProfilePic4() {
    navProfile.style.background = "url('profile4.jpg')";
    profilePic.style.background = "url('profile4.jpg')";
    navProfile.style.backgroundSize = "cover";
    profilePic.style.backgroundSize = "cover";
}
function selectProfilePic5() {
    navProfile.style.background = "url('profile5.jpg')";
    profilePic.style.background = "url('profile5.jpg')";
    navProfile.style.backgroundSize = "cover";
    profilePic.style.backgroundSize = "cover";
}
function selectProfilePic6() {
    navProfile.style.background = "url('profile6.jpg')";
    profilePic.style.background = "url('profile6.jpg')";
    navProfile.style.backgroundSize = "cover";
    profilePic.style.backgroundSize = "cover";
}
function selectProfilePic7() {
    navProfile.style.background = "url('profile7.jpg')";
    profilePic.style.background = "url('profile7.jpg')";
    navProfile.style.backgroundSize = "cover";
    profilePic.style.backgroundSize = "cover";
}
function selectProfilePic8() {
    navProfile.style.background = "url('profile8.jpg')";
    profilePic.style.background = "url('profile8.jpg')";
    navProfile.style.backgroundSize = "cover";
    profilePic.style.backgroundSize = "cover";
}

setInterval(() => {
    if(parseInt(scores) >= 200) {
        textAchivement.style.visibility = "hidden";
        reward1.style.opacity = "1";
    }
    if(parseInt(scores) >= 400) {
        reward2.style.opacity = "1";
    }
    if(parseInt(scores) >= 800) {
        reward2.style.opacity = "1";
    }
    if(parseInt(scores) >= 1200) {
        reward2.style.opacity = "1";
    }
},200);

// shop Category
function birdColorBlock() {
    category1.style.borderColor = "darkblue";
    category2.style.borderColor = "transparent";
    item1.style.visibility = "visible";
    item2.style.visibility = "visible";
    item3.style.visibility = "visible";
    item4.style.visibility = "visible";
    item01.style.visibility = "hidden";
    item02.style.visibility = "hidden";
    item03.style.visibility = "hidden";
    item04.style.visibility = "hidden";
}
function backgroundBlock() {
    category1.style.borderColor = "transparent";
    category2.style.borderColor = "darkblue";
    item1.style.visibility = "hidden";
    item2.style.visibility = "hidden";
    item3.style.visibility = "hidden";
    item4.style.visibility = "hidden";
    item01.style.visibility = "visible";
    item02.style.visibility = "visible";
    item03.style.visibility = "visible";
    item04.style.visibility = "visible";
}

let background1 = true;
let background2 = true;
let background3 = true;
let background4 = true;
localStorage.setItem("background",1);

function buyBackground1() {
    background.style.background = "url('image1.jpg')";
    background.style.backgroundSize = "cover";
    navBar.style.backgroundColor = "skyblue";
    footer.style.backgroundColor = "skyblue";
    localStorage.setItem("background",1);
    message.style.visibility = "visible";
    setTimeout(() => { 
        message.style.visibility = "hidden"; 
    },1000);
}
function buyBackground2() {
    if(background2 === true) {
        if(parseInt(scoreValue.innerText) >= 800) {
            buyBtn02.innerText = "USE";
            background.style.background = "url('background3.jpg')";
            background.style.backgroundSize = "cover";
            navBar.style.backgroundColor = "#B0D0E6";
            footer.style.backgroundColor = "#B0D0E6";
            localStorage.setItem("background",2);
            background2 = false;
            message.style.visibility = "visible";
            setTimeout(() => { 
                message.style.visibility = "hidden"; 
            },1000);
        } else {
            message2.style.visibility = "visible";
            setTimeout(() => { 
                message2.style.visibility = "hidden"; 
            },1000);
        }
    } else {
        background.style.background = "url('background3.jpg')";
        background.style.backgroundSize = "cover";
        navBar.style.backgroundColor = "#B0D0E6";
        footer.style.backgroundColor = "#B0D0E6";
        message.style.visibility = "visible";
        setTimeout(() => { 
            message.style.visibility = "hidden"; 
        },1000);
    }
}
function buyBackground3() {
    if(background3 === true) {
        if(parseInt(scoreValue.innerText) >= 1400) {
            buyBtn03.innerText = "USE";
            background.style.background = "url('background1.jpg')";
            background.style.backgroundSize = "cover";
            navBar.style.backgroundColor = "#5FA8D3";
            footer.style.backgroundColor = "#5FA8D3";
            localStorage.setItem("background",3);
            background3 = false;
            message.style.visibility = "visible";
            setTimeout(() => { 
                message.style.visibility = "hidden"; 
            },1000);
        } else {
            message2.style.visibility = "visible";
            setTimeout(() => { 
                message2.style.visibility = "hidden"; 
            },1000);
        }
    } else {
        background.style.background = "url('background1.jpg')";
        background.style.backgroundSize = "cover";
        navBar.style.backgroundColor = "#5FA8D3";
        footer.style.backgroundColor = "#5FA8D3";
        message.style.visibility = "visible";
        setTimeout(() => { 
            message.style.visibility = "hidden"; 
        },1000);
    }
}
function buyBackground4() {
    if(background4 === true) {
        if(parseInt(scoreValue.innerText) >= 2000) {
            buyBtn04.innerText = "USE";
            background.style.background = "url('background4.jpg')";
            background.style.backgroundSize = "cover";
            navBar.style.backgroundColor = "#B0C4DE";
            footer.style.backgroundColor = "#B0C4DE";
            localStorage.setItem("background",4);
            background4 = false;
            message.style.visibility = "visible";
            setTimeout(() => { 
                message.style.visibility = "hidden"; 
            },1000);
        } else {
            message2.style.visibility = "visible";
            setTimeout(() => { 
                message2.style.visibility = "hidden"; 
            },1000);
        }
    } else {
        background.style.background = "url('background4.jpg')";
        background.style.backgroundSize = "cover";
        navBar.style.backgroundColor = "#B0C4DE";
            footer.style.backgroundColor = "#B0C4DE";
        message.style.visibility = "visible";
        setTimeout(() => { 
            message.style.visibility = "hidden"; 
        },1000);
    }
}