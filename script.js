function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

  const containerE1 = document.querySelector(".section__text__p2");

  const careers = ["Frontend Developer","React JS Developer","Java Developer","SQL Developer","Freelancer"];

  let careerIndex =0

  let characterIndex = 0;

  updateText();
function updateText(){
  characterIndex++
  containerE1.innerHTML = ` <p>${careers[careerIndex].slice(0,characterIndex)}</p>`;
  
  if(characterIndex == careers[careerIndex].length){
    careerIndex++
    characterIndex=0
  }
  setTimeout(updateText,400)
}

