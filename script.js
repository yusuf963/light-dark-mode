const toggleSwitch = document.querySelector('input[type= "checkbox"]');
const toggleIcon = document.querySelector("#toggle-icon");
const nav = document.querySelector("nav");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");

// image Mode
const imageMode = (color) => {
  image1.src = `img/undraw_conceptual_idea_${color}.svg`;
  image2.src = `img/undraw_feeling_proud_${color}.svg`;
  image3.src = `img/undraw_proud_coder_${color}.svg`;
};

//switching to Dark mode
const darkMode = () => {
  document.documentElement.setAttribute("data-theme", "dark");
  toggleIcon.children[0].innerHTML = "Dark Mode";
  toggleIcon.children[1].classList.replace("fa-sun", "fa-moon");
  nav.style.backgroundColor = "rgb(0 0 0 / 50%)";
  imageMode("dark");
};

//switching to Light mode
const lightMode = () => {
  document.documentElement.setAttribute("data-theme", "light");
  toggleIcon.children[0].innerText = "Light Mode";
  toggleIcon.children[1].classList.replace("fa-moon", "fa-sun");
  nav.style.backgroundColor = "rgb(255 255 255 / 50%)";
  imageMode("light");
};

const switchTheme = (event) => {
  if (event.target.checked) {
    darkMode();
  } else {
    lightMode();
  }
};

toggleSwitch.addEventListener("change", switchTheme);
