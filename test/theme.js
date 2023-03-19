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
},10000)


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