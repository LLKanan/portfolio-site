const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

//Randomise Benjamin Nguyen Name
function loadText(nameID) {
  let iteration = 0;
  interval=setInterval(function () {
    nameID.innerText = nameID.dataset.value
      .split("")
      .map((letter, index) => {
        if (index < iteration) {
          return nameID.dataset.value[index];
        }

        return letters[Math.floor(Math.random() * 26)]
      })
      .join("");
    if (iteration >= nameID.dataset.value.length) {
      clearInterval(interval);
    }
    iteration += 1 / 3;
  }, 30)
}
nameVar = document.getElementById("name")
loadText(nameVar)
repeatInterval=setInterval(function(){
  loadText(nameVar);
},5000)


//Ranomise headers on hover
let intervalAbout = null;

document.getElementById("about-title").onmouseover = event => {  
  let iteration = 0;

  clearInterval(intervalAbout);
  
  intervalAbout = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if(index < iteration) {
          return event.target.dataset.value[index];
        }
      
        return letters[Math.floor(Math.random() * 26)]
      })
      .join("");
    
    if(iteration >= event.target.dataset.value.length){ 
      clearInterval(intervalAbout);
    }
    
    iteration += 1 / 3;
  }, 30);
}

let intervalportfolio = null;

document.getElementById("portfolio-title").onmouseover = event => {  
  let iteration = 0;
  clearInterval(intervalportfolio);
  
  intervalportfolio = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if(index < iteration) {
          return event.target.dataset.value[index];
        }
      
        return letters[Math.floor(Math.random() * 26)]
      })
      .join("");
    
    if(iteration >= event.target.dataset.value.length){ 
      clearInterval(intervalportfolio);
    }
    
    iteration += 1 / 3;
  }, 30);
}

let intervalcontact = null;

document.getElementById("contact-title").onmouseover = event => {  
  let iteration = 0;
  clearInterval(intervalcontact);
  
  intervalcontact = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if(index < iteration) {
          return event.target.dataset.value[index];
        }
      
        return letters[Math.floor(Math.random() * 26)]
      })
      .join("");
    
    if(iteration >= event.target.dataset.value.length){ 
      event.target.style.color="rgb(0,255,171)";
      event.target.style.backgroundColor="rgb(27,27,27)";
      clearInterval(intervalcontact);
    }
    
    iteration += 1 / 3;
  }, 30);
}

const track = document.getElementById("image-track");

const handleOnDown = e => track.dataset.mouseDownAt = e.clientX;

const handleOnUp = () => {
  track.dataset.mouseDownAt = "0";  
  track.dataset.prevPercentage = track.dataset.percentage;
}

const handleOnMove = e => {
  if(track.dataset.mouseDownAt === "0") return;
  
  const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
        maxDelta = window.innerWidth / 2;
  
  const percentage = (mouseDelta / maxDelta) * -100,
        nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage,
        nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);
  track.dataset.percentage = nextPercentage;
  if (Number.isNaN(nextPercentage)){
    console.log("NAN BUG")
    track.dataset.percentage=0;
    nextPercentage = 0;
  }
  console.log(nextPercentage)
  track.animate({
    transform: `translate(${nextPercentage}%, -50%)`
  }, { duration: 1200, fill: "forwards" });
  
  for(const image of track.getElementsByClassName("project")) {
    image.animate({
      backgroundPosition: `${100 + nextPercentage}% center`
    }, { duration: 1200, fill: "forwards" });
  }
}

/* -- Had to add extra lines for touch events -- */

window.onmousedown = e => handleOnDown(e);

window.ontouchstart = e => handleOnDown(e.touches[0]);

window.onmouseup = e => handleOnUp(e);

window.ontouchend = e => handleOnUp(e.touches[0]);

window.onmousemove = e => handleOnMove(e);

window.ontouchmove = e => handleOnMove(e.touches[0]);

function openInNewTab(url) {
  window.open(url, '_blank').focus();
}