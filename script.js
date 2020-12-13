const toggleSwitch = document.querySelector('input[type= "checkbox"]');
const toggleIcon = document.querySelector("#toggle-icon");
const nav = document.querySelector("nav")

//switching to Dark mode
const darkMode = () => {
  document.documentElement.setAttribute("data-theme", "dark");
  toggleIcon.children[0].innerHTML = "Dark Mode";
  toggleIcon.children[1].classList.replace("fa-sun", "fa-moon");
  nav.style.backgroundColor = 'rgb(0 0 0 / 50%)'
};

//switching to Light mode
const lightMode = () => {
  document.documentElement.setAttribute("data-theme", "light");
  toggleIcon.children[0].innerText = "Light Mode";
  toggleIcon.children[1].classList.replace("fa-moon", "fa-sun");
  nav.style.backgroundColor = 'rgb(255 255 255 / 50%)'
};

const switchTheme = (event) => {
  if (event.target.checked) {
    darkMode();
  } else {
    lightMode();
  }
};

toggleSwitch.addEventListener("change", switchTheme);
