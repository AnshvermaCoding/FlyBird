let bird = document.querySelector("#bird");
let container = document.querySelector("#container");
let msg = document.querySelector("#msg");
let level1 = document.querySelector("#level1");
let level01 = document.querySelector("#level01");
let gameOver = document.querySelector("#gameOver");
let scoreValue = document.querySelector("#scoreValue");
let menuIcon = document.querySelector("#menu");
let total = document.querySelector("#total");
let reGame = document.querySelector("#reGame");
let rePlayTime = document.querySelector("#rePlayTime");
let birdNo1 = document.querySelector("#birdNo1");
let birdNo2 = document.querySelector("#birdNo2");
let birdNo3 = document.querySelector("#birdNo3");
let bird1 = document.querySelector("#bird1");
let bird2 = document.querySelector("#bird2");
let bird3 = document.querySelector("#bird3");
let birdsNo1 = document.querySelector("#birdsNo1");
let birdsNo2 = document.querySelector("#birdsNo2");
let birdsNo3 = document.querySelector("#birdsNo3");
let continueBtn = document.querySelector("#continue");
let restartBtn = document.querySelector("#rePlay");
let resumeScreen = document.querySelector("#resumeScreen");
let flySound = document.querySelector("#flySound");
let hitSound = document.querySelector("#hitSound");
let backgroundMusic = document.querySelector("#backgroundMusic");
let sound = document.querySelector("#sound");
let navBar = document.querySelector("#navBar");
let footer = document.querySelector("#footer");

let topIs = "50";
bird.style.top = "50%";
bird.style.transition = "0.15s";
let isCall = true;
let birdFly;
let firstLevel = true;
let screen = window.innerHeight;
// console.log(screen);
let soundIs = localStorage.getItem("soundIs");
let musicIs = localStorage.getItem("musicIs");
let vibrateIs = localStorage.getItem("vibrateIs");
let colorIs = localStorage.getItem("color");
let scoreIs = localStorage.getItem("scoreIs");

// Speed Control.
// Easy (setAgain = 4000, call1 = 2000, birdSpeed = 22, birdFly = 22, animation = "all 4s linear");
// Mediam (speedIs = 40, call1 = 1150, call2 = 3100, birdSpeed = 22, birdFly = 22, animation = "0.07s ease-out");
// Hard (speedIs = 30, call1 = 900, call2 = 2350, birdSpeed = 18, birdFly = 25, animation = "0.05s ease-out");
// Expert (speedIs = 20, call1 = 575, call2 = 1550, birdSpeed = 12, birdFly = 32, animation = "0.05s ease-out");
let setAgain;
let call1;
let call2;
let birdSpeed;
let birdFlying;
let animation;
let callAfter;
let speed;
let score2 = 0;
localStorage.setItem("score2",score2);
let option01 = localStorage.getItem("speed");
console.log(option01);
if(option01 === "Easy") {
  call1 = 1800;
  animation = "all 3.6s linear";
  setAgain = 3600;
  birdSpeed = 22;
  birdFlying = 22;
  speed = 650;
} else if(option01 === "Mediam") {
  setAgain = 3000;
  call1 = 1500;
  birdSpeed = 18;
  birdFlying = 23;
  animation = "all 3s linear";
  speed = 520;
} else if(option01 === "Hard") {
  setAgain = 2000;
  call1 = 1000;
  birdSpeed = 15;
  birdFlying = 27;
  animation = "all 2s linear";
  speed = 400;
} else {
  setAgain = 1600;
  call1 = 800;
  birdSpeed = 12;
  birdFlying = 32;
  animation = "all 1.6s linear";
  speed = 300;
}

let backgroundIs = localStorage.getItem("background",1);

if(backgroundIs === "1") {
  container.style.background = "url('image1.jpg')";
  container.style.backgroundSize = "cover";
  navBar.style.backgroundColor = "skyblue";
  footer.style.backgroundColor = "skyblue";
} else if(backgroundIs === "2") {
  container.style.background = "url('background3.jpg')";
  container.style.backgroundSize = "cover";
  navBar.style.backgroundColor = "#B0D0E6";
  footer.style.backgroundColor = "#B0D0E6";
  level1.style.backgroundColor = "darkred";
  level01.style.backgroundColor = "darkred";
  level2.style.backgroundColor = "darkred";
  level02.style.backgroundColor = "darkred";
  level3.style.backgroundColor = "darkred";
  level03.style.backgroundColor = "darkred";
} else if(backgroundIs === "3") {
  container.style.background = "url('background1.jpg')";
  container.style.backgroundSize = "cover";
  navBar.style.backgroundColor = "#5FA8D3";
  footer.style.backgroundColor = "#5FA8D3";
  level1.style.backgroundColor = "green";
  level01.style.backgroundColor = "green";
  level2.style.backgroundColor = "green";
  level02.style.backgroundColor = "green";
  level3.style.backgroundColor = "green";
  level03.style.backgroundColor = "green";
} else {
  container.style.background = "url('background4.jpg')";
  container.style.backgroundSize = "cover";
  navBar.style.backgroundColor = "#B0C4DE";
  footer.style.backgroundColor = "#B0C4DE";
  level1.style.backgroundColor = "indigo";
  level01.style.backgroundColor = "indigo";
  level2.style.backgroundColor = "indigo";
  level02.style.backgroundColor = "indigo";
  level3.style.backgroundColor = "indigo";
  level03.style.backgroundColor = "indigo";
}
// Start
container.addEventListener("click",start);
function start() {
  container.removeEventListener("click",start);
  if(musicIs === true) {
  // backgroundMusic.play();
  }
 // showIcon();
  setTimeout(() => {
    levelOne();
      setTimeout(() => {
        if(isCall === true) {
        levelTwo();
      }
    },call1);
  },parseInt(call1) - speed);
  levelThree();
  
  setTimeout(() => {
    firstLevel = false;
  },2000);
  
  birdFly = setInterval(() => {
    if(isCall === true) {
    if(topIs < "93") {
      bird.style.top = `${++topIs}%`;
      topIs = parseInt(bird.style.top);
    }
    }
  },birdSpeed);
}
let btnClick = true;
function fly() {
  if(btnClick === true) {
  if(isCall === true) {
  if(topIs > "13") {
  topIs = `${topIs - birdFlying}%`;
  bird.style.top =  topIs;
    msg.style.visibility = "hidden";
  }
  }
  }
  if(vibrateIs === "true") {
  if("vibrate" in window.navigator) {
        window.navigator.vibrate(50);
      } else {
        console.log("not supported");
      }
  }
  if(soundIs === "true") {
    flySound.currentTime = 0.05;
    flySound.volume = "0.1";
    flySound.play();
  }
  if(musicIs === "true") {
    musicIs === "false";
    backgroundMusic.volume = "0.1";
    backgroundMusic.play();
  }
}

// levels1
let leftIs = "100";
level1.style.left = `${leftIs}%`;
level01.style.left = `${leftIs}%`;

let call = "true";
let distance1;
let intervalOne;
let scoreAdd = "true";
let scoreAdd2 = "true";
let scoreAdd3 = "true";
let isLevel = true;
let index = 0;
let height1;
let height01;
if(screen >= 1590) {
  height1 = ["15","45","60","25","55","30","50","10","35","15"]; 
  height01 = ["55","25","10","45","15","40","20","60","35","55"];
  function swap1() {
  for(let i = height1.length - 1;i>=0;i--) {
      let randomNum = Math.floor(Math.random() * i + 1);
      [height1[i],height1[randomNum]] = [height1[randomNum], height1[i]];
      [height01[i],height01[randomNum]] = [height01[randomNum], height01[i]];
    }
  }
  swap1();
  level1.style.height = `${height1[index]}rem`;
  level01.style.height = `${height01[index]}rem`;
  console.log("called");
} else {
  height1 = ["10","40","55","20","50","25","45","5","30","10"]; 
  height01 = ["50","20","5","40","10","35","15","55","30","50"];
  function swap1() {
    for(let i = height1.length - 1;i>=0;i--) {
      let randomNum = Math.floor(Math.random() * i + 1);
      [height1[i],height1[randomNum]] = [height1[randomNum], height1[i]];
      [height01[i],height01[randomNum]] = [height01[randomNum], height01[i]];
    }
  }
  swap1();
  level1.style.height = `${height1[index]}rem`;
  level01.style.height = `${height01[index]}rem`;
} 

setInterval(() => {
  //distance1 = getComputedStyle(level1).left;
  //distance2 = getComputedStyle(level2).left;
  //distance3 = getComputedStyle(level3).left;
  distance4 = getComputedStyle(bird).top;
},100); 

let isLevelThree = true;
function checkPosition() {
  let computedStyle = getComputedStyle(level1);
  let matrix = new WebKitCSSMatrix(computedStyle.transform);
  if(matrix.m41 <= -900) {
    if(scoreAdd === "true") {
      scoreValue.innerText = parseInt(scoreValue.innerText) + 1;
      localStorage.setItem("scores",parseInt(scoreValue.innerText) + parseInt(scoreIs));
      score2 = parseInt(score2) + 1;
      localStorage.setItem("score2",score2);
      scoreAdd = "false";
    }
  }
  let computedStyle2 = getComputedStyle(level2);
  let matrix2 = new WebKitCSSMatrix(computedStyle2.transform);
  if(matrix2.m41 <= -900) {
    if(scoreAdd2 === "true") {
      scoreValue.innerText = parseInt(scoreValue.innerText) + 1;
      localStorage.setItem("scores",parseInt(scoreValue.innerText) + parseInt(scoreIs));
      score2 = parseInt(score2) + 1;
      localStorage.setItem("score2",score2);
      scoreAdd2 = "false";
    }
  }
  let computedStyle3 = getComputedStyle(level3);
  let matrix3 = new WebKitCSSMatrix(computedStyle3.transform);
  if(matrix3.m41 <= -700) {
    if(scoreAdd3 === "true") {
      scoreValue.innerText = parseInt(scoreValue.innerText) + 1;
      localStorage.setItem("scores",parseInt(scoreValue.innerText) + parseInt(scoreIs));
      score2 = parseInt(score2) + 1;
      localStorage.setItem("score2",score2);
      scoreAdd3 = "false";
    }
  }
  if(matrix3.m41 <= -1000) {
    level3.style.display = "none";
    level03.style.display = "none";
    isLevelThree = false;
  }
}

setInterval(() => {
  checkPosition();
},100);


function levelOne() {
  level1.style.transition = animation;
  level01.style.transition = animation;
  level1.style.transform = "translateX(-1100px)";
  level01.style.transform = "translateX(-1100px)";
        
  setTimeout(() => {
    if(isCall === true) {
    level1.style.transition = "all 0s linear";
    level01.style.transition = "all 0s linear";
    level1.style.transform = "translateX(0px)";
    level01.style.transform = "translateX(0px)";
      ++index;
       if(index === 9) {
         index = 0;
         swap1();
       }
      level1.style.height = `${height1[index]}rem`;
      level01.style.height = `${height01[index]}rem`;
      setTimeout(() => {
        scoreAdd = "true";
        levelOne();
      },20);
    }
  },setAgain);
}


// level2
let leftIs2 = "100";
level2.style.left = `${leftIs2}%`;
level02.style.left = `${leftIs2}%`;
let distance2;
let intervalTwo;
let isLevel2 = true;
let index2 = 0;
let height2;
let height02;

if(screen >= 1590) {
  height2 = ["60","30","15","55","25","45","15","35","10","50"]; 
  height02 = ["10","40","55","15","45","25","55","35","60","20"]; 
  function swap2() {
  for(let i = height2.length - 1;i>=0;i--) {
      let randomNum = Math.floor(Math.random() * i + 1);
      [height2[i],height2[randomNum]] = [height2[randomNum], height2[i]];
      [height02[i],height02[randomNum]] = [height02[randomNum], height02[i]];
    }
  }
  swap2();
  level2.style.height = `${height2[index2]}rem`;
  level02.style.height = `${height02[index2]}rem`;
  console.log("called");
} else {
  height2 = ["55","25","10","50","20","40","10","30","5","45"]; 
  height02 = ["5","35","50","10","40","20","50","30","55","15"]; 
  function swap2() {
  for(let i = height2.length - 1;i>=0;i--) {
      let randomNum = Math.floor(Math.random() * i + 1);
      [height2[i],height2[randomNum]] = [height2[randomNum], height2[i]];
      [height02[i],height02[randomNum]] = [height02[randomNum], height02[i]];
    }
  }
  swap2();
  level2.style.height = `${height2[index2]}rem`;
  level02.style.height = `${height02[index2]}rem`;
} 


function levelTwo() {
  level2.style.transition = animation;
  level02.style.transition = animation;
  level2.style.transform = "translateX(-1100px)";
  level02.style.transform = "translateX(-1100px)";
  setTimeout(() => {
    if(isCall === true) {
    level2.style.transition = "0s";
    level02.style.transition = "0s";
    level2.style.transform = "translateX(0px)";
    level02.style.transform = "translateX(0px)";
      ++index2;
      if(index2 === 9) {
        index2 = 0;
        swap2();
      }
      level2.style.height = `${height2[index2]}rem`;
      level02.style.height = `${height02[index2]}rem`;
      setTimeout(() => {
        scoreAdd2 = "true";
        levelTwo();
      },20);
    }
  },setAgain);
}



// level 3
let leftIs3 = "80";
level3.style.left = `${leftIs3}%`;
level03.style.left = `${leftIs3}%`;
let distance3;
let intervalThree;
let isLevel3 = true;
let index3 = 0;
let height3;
let height03;

if(screen >= 1590) {
   height3 = ["30","60","35","15","45","25","55","15","50","10"]; 
   height03 = ["40","10","35","55","25","45","15","55","20","60"];
   function swap3() {
     for(let i = height3.length - 1;i>=0;i--) {
       let randomNum = Math.floor(Math.random() * i + 1);
       [height3[i],height3[randomNum]] = [height3[randomNum], height3[i]];
       [height03[i],height03[randomNum]] = [height03[randomNum], height03[i]];
     }
   }
  swap3();
  level3.style.height = `${height3[index3]}rem`;
  level03.style.height = `${height03[index3]}rem`;
  console.log("called");
} else {
  height3 = ["25","55","30","10","40","20","50","10","45","5"]; 
  height03 = ["35","5","30","50","20","40","10","50","15","55"];
  function swap3() {
    for(let i = height3.length - 1;i>=0;i--) {
      let randomNum = Math.floor(Math.random() * i + 1);
      [height3[i],height3[randomNum]] = [height3[randomNum], height3[i]];
      [height03[i],height03[randomNum]] = [height03[randomNum], height03[i]];
    }
  }
  swap3();
  level3.style.height = `${height3[index3]}rem`;
  level03.style.height = `${height03[index3]}rem`;
} 

function levelThree() {
  level3.style.transition = animation;
  level03.style.transition = animation;
  level3.style.transform = "translateX(-1100px)";
  level03.style.transform = "translateX(-1100px)";
  setTimeout(() => {
    if(isCall === true) {
    level3.style.display = "none";
    level03.style.display = "none";
    }
    /*
    level3.style.transition = "0s";
    level03.style.transition = "0s";
    level3.style.transform = "translateX(0px)";
    level03.style.transform = "translateX(0px)";
        ++index3;
        level3.style.height = `${height3[index3]}rem`;
        level03.style.height = `${height03[index3]}rem`;
    setTimeout(() => {
    levelThree();
    },20);
    */
  },setAgain);
}


//collision detection
let collisionCheck = true;
function collisionDetection() {
  let rect1 = bird.getBoundingClientRect();
  let rect2 = level1.getBoundingClientRect();
  let rect3 = level01.getBoundingClientRect();
  let rect4 = level2.getBoundingClientRect();
  let rect5 = level02.getBoundingClientRect();
  let rect6 = level3.getBoundingClientRect();
  let rect7 = level03.getBoundingClientRect();
if(collisionCheck === true) {
 if(rect2.right > 0 && rect2.left < window.innerWidth) {
  if(rect1.left < rect2.right && rect1.right > rect2.left && rect1.top < rect2.bottom && rect1.bottom > rect2.top) {
   gameOverFunc();
  }
   if(rect1.left < rect3.right && rect1.right > rect3.left && rect1.top < rect3.bottom && rect1.bottom > rect3.top) {
   gameOverFunc();
  }
 }
  if(rect4.right > 0 && rect4.left < window.innerWidth) {
   if(rect1.left < rect4.right && rect1.right > rect4.left && rect1.top < rect4.bottom && rect1.bottom > rect4.top) {
     gameOverFunc();
   }
   if(rect1.left < rect5.right && rect1.right > rect5.left && rect1.top < rect5.bottom && rect1.bottom > rect5.top) {
     gameOverFunc();
  }
 }
  if(rect6.right > 0 && rect6.left < window.innerWidth) {
   if(rect1.left < rect6.right && rect1.right > rect6.left && rect1.top < rect6.bottom && rect1.bottom > rect6.top) {
     gameOverFunc();
   }
   if(rect1.left < rect7.right && rect1.right > rect7.left && rect1.top < rect7.bottom && rect1.bottom > rect7.top) {
     gameOverFunc();
   }
  } 
}
}

setInterval(() => {
  if(isCall === true) {
    collisionDetection();
  }
},100);


// gameover
let birdNo = 0;
let resumeIs = true;
function gameOverFunc() {
 // if(firstLevel === true) {
 //   gameOver.style.visibility = "visible";
 // } else {
 //   reGame.style.visibility = "visible";
 // }
  firstLevel = false;
  isCall = false;
  resumeIs = false;
  
  let computedStyle = getComputedStyle(level1);
  let matrix = new WebKitCSSMatrix(computedStyle.transform);
  level1.style.transform = `translateX(${matrix.m41}px)`;
  let computedStyle01 = getComputedStyle(level1);
  let matrix01 = new WebKitCSSMatrix(computedStyle01.transform);
  level01.style.transform = `translateX(${matrix01.m41}px)`;
  
  let computedStyle2 = getComputedStyle(level2);
  let matrix2 = new WebKitCSSMatrix(computedStyle2.transform);
  level2.style.transform = `translateX(${matrix2.m41}px)`;
  let computedStyle02 = getComputedStyle(level02);
  let matrix02 = new WebKitCSSMatrix(computedStyle02.transform);
  level02.style.transform = `translateX(${matrix02.m41}px)`;
  
  let computedStyle3 = getComputedStyle(level3);
  let matrix3 = new WebKitCSSMatrix(computedStyle3.transform);
  level3.style.transform = `translateX(${matrix3.m41}px)`;
  let computedStyle03 = getComputedStyle(level03);
  let matrix03 = new WebKitCSSMatrix(computedStyle03.transform);
  level03.style.transform = `translateX(${matrix03.m41}px)`;
  
  clearInterval(birdFly);
  bird.style.top = distance4;
  birdNo++;
  
  if(birdNo === 1) {
    reGame.style.visibility = "visible";
    birdNo1.style.opacity = "0.2";
    bird1.style.opacity = "0.2";
    birdsNo1.style.opacity = "0.2";
  } else if(birdNo === 2) {
    reGame.style.visibility = "visible";
    birdNo2.style.opacity = "0.2";
    bird2.style.opacity = "0.2";
    birdsNo2.style.opacity = "0.2";
  } else {
    gameOver.style.visibility = "visible";
    birdNo3.style.opacity = "0.2";
    bird3.style.opacity = "0.2";
    birdsNo3.style.opacity = "0.2";
 /* continueBtn.style.display = "none";
    restartBtn.style.marginLeft = "1.7rem";
    restartBtn.style.width = "31.4rem"; */
  }
  if(vibrateIs === "true") {
    if("vibrate" in window.navigator) {
        window.navigator.vibrate(200);
      } else {
        console.log("not supported");
      }
  }
  backgroundMusic.pause();
  if(soundIs === "true") {
    hitSound.currentTime = 0.14;
    hitSound.volume = "0.2";
    hitSound.play();
  }
}

let pause = true;
function continueGame() {
  reGame.style.visibility = "hidden";
  collisionCheck = false;
  btnClick = false;
  resumeIs = true;
  level1.style.transition = "all 3s linear";
  level01.style.transition = "all 3s linear";
  level2.style.transition = "all 3s linear";
  level02.style.transition = "all 3s linear";
  level3.style.transition = "all 3s linear";
  level03.style.transition = "all 3s linear";
  
  level1.style.transform = "translateX(0px)";
  level01.style.transform =  "translateX(0px)";
  level2.style.transform =  "translateX(0px)";
  level02.style.transform =  "translateX(0px)";
  level3.style.transform =  "translateX(0px)";
  level03.style.transform =  "translateX(0px)";
  
  rePlayTime.style.visibility = "visible";
  rePlayTime.innerText = "3";
  setTimeout(() => {
    rePlayTime.innerText = "2";
  },1000);
  setTimeout(() => {
    rePlayTime.innerText = "1";
  },2000);
  setTimeout(() => {
    isCall = true;
    collisionCheck = true;
    btnClick = true;
    rePlayTime.style.visibility = "hidden";
    if(isLevelThree === true) {
       if(pause === true) {
         setTimeout(() => {
           levelOne();
             setTimeout(() => {
               if(pause === true || isCall === true) {
                 levelTwo();
               }
             },call1);
         },parseInt(call1) - speed);
         levelThree();
       }
    }
    if(isLevelThree === false) {
     if(pause === true) {
      levelOne();
        setTimeout(() => {
          if(pause === true || isCall === true) {
            levelTwo();
          }
        },call1);
    }
    }
    birdFly = setInterval(() => {
      if(isCall === true) {
        if(topIs < "93") {
          bird.style.top = `${++topIs}%`;
          topIs = parseInt(bird.style.top);
        }
      }
    },birdSpeed);
    
  },3000);
}


// restart
function restart() {
  reGame.style.visibility = "hidden";
  resumeScreen.style.visibility = "hidden";
  localStorage.setItem("scores",parseInt(scoreValue.innerText) + parseInt(scoreIs));
  window.location.href = "FlyBird.html";
}

// quit Game
function quitGame() {
  history.back();
}
// resume 

function resumeGame() {
  resumeScreen.style.visibility = "hidden";
  if(resumeIs === true) {
    rePlayTime.style.visibility = "visible";
    level1.style.transition = "all 3s linear";
    level01.style.transition = "all 3s linear";
    level2.style.transition = "all 3s linear";
    level02.style.transition = "all 3s linear";
    level1.style.transform = "translateX(0px)";
    level01.style.transform =  "translateX(0px)";
    level2.style.transform =  "translateX(0px)";
    level02.style.transform =  "translateX(0px)";
    rePlayTime.innerText = "3";
    setTimeout(() => {
      rePlayTime.innerText = "2";
    },1000);
    setTimeout(() => {
      rePlayTime.innerText = "1";
    },2000);
    setTimeout(() => {
      pause = true;
      isCall = true;
      rePlayTime.style.visibility = "hidden";
      btnClick = true;
      if(pause === true) {
      levelOne();
      setTimeout(() => {
        if(pause === true) {
        levelTwo();
        }
      },call1);
      
      birdFly = setInterval(() => {
        if(isCall === true) {
          if(topIs < "93") {
            bird.style.top = `${++topIs}%`;
            topIs = parseInt(bird.style.top);
          }
        }
      },birdSpeed);
      }
    },3000);
  }
}


//menuIcon.style.visibility = "visible";
// menu
// menuIcon.style.opacity = "0";
// menuIcon.style.transition = "1s";
total.style.visibility = "visible";
total.style.opacity = "1";
total.style.transition = "1s";
/*
function showIcon() {
setTimeout(() => {
  total.style.opacity = "0";
  total.style.visibility = "hidden";
  menuIcon.style.opacity = "1";
  menuIcon.style.visibility = "visible";
  setTimeout(() => {
    menuIcon.style.transition = "0s";
  },50);
},2000);
}
*/


let paused = false;
function menu() {
  /*
  isCall = false;
  pause = false;
  clearInterval(birdFly);
  level1.style.transition = "0";
  let computedStyle = getComputedStyle(level1);
  let matrix = new WebKitCSSMatrix(computedStyle.transform);
  level1.style.transform = `translateX(${matrix.m41}px)`;
  level01.style.transition = "0";
  let computedStyle01 = getComputedStyle(level1);
  let matrix01 = new WebKitCSSMatrix(computedStyle01.transform);
  level01.style.transform = `translateX(${matrix01.m41}px)`;
  
  level2.style.transition = "0";
  let computedStyle2 = getComputedStyle(level2);
  let matrix2 = new WebKitCSSMatrix(computedStyle2.transform);
  level2.style.transform = `translateX(${matrix2.m41}px)`;
  level02.style.transition = "0";
  let computedStyle02 = getComputedStyle(level02);
  let matrix02 = new WebKitCSSMatrix(computedStyle02.transform);
  level02.style.transform = `translateX(${matrix02.m41}px)`;
  btnClick = false;
  */
  resumeScreen.style.visibility = "visible";
}

// sound Button
if(soundIs === "true") {
  sound.removeAttribute("class");
  sound.setAttribute("class","fa-solid fa-volume-high");
  console.log(soundIs);
} else {
  sound.removeAttribute("class");
  sound.setAttribute("class","fa-solid fa-volume-xmark");
}
function soundFunction() {
  if(soundIs === "true") {
    sound.removeAttribute("class");
    sound.setAttribute("class","fa-solid fa-volume-xmark");
    flySound.pause();
    soundIs = "false";
  } else {
    sound.removeAttribute("class");
    sound.setAttribute("class","fa-solid fa-volume-high");
    flySound.play();
    soundIs = "true";
  }
}

// bird color 
if(colorIs === "blue") {
  bird.style.color = "blue";
} else if(colorIs === "red") {
  bird.style.color = "red";
} else if(colorIs === "darkgreen") {
  bird.style.color = "darkgreen";
} else {
  bird.style.color = "midnightblue";
}
