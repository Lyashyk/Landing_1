const mainMenuPosition = document
  .getElementsByClassName("mainMenu")[0]
  .getBoundingClientRect().top;

onscrollEventFunction = () => {
  if (mainMenuPosition < document.documentElement.scrollTop) {
    document
      .getElementsByClassName("mainMenu")[0]
      .classList.add("mainMenu--sticky");
  } else {
    document
      .getElementsByClassName("mainMenu")[0]
      .classList.remove("mainMenu--sticky");
  }
};

window.addEventListener("scroll", onscrollEventFunction);

//----------------------------------------------------------------------------------------------------------------------
const buttonMainMenu = document.getElementsByClassName("burgerButton")[0];
const mainMenu = document.getElementsByClassName("mainMenu")[0];
var buttonMainMenuClickEventFunctionFlag = 1;

buttonMainMenuClickEventFunction = () => {
  if (buttonMainMenuClickEventFunctionFlag === 1) {
    buttonMainMenu.classList.add("burgerButton--click");
    buttonMainMenu.classList.remove("burgerButton--unclick");
    mainMenu.classList.add("mainMenu--visibleList");
  } else {
    buttonMainMenu.classList.remove("burgerButton--click");
    buttonMainMenu.classList.add("burgerButton--unclick");
    mainMenu.classList.remove("mainMenu--visibleList");
  }
  // return (buttonMainMenuClickEventFunctionFlag = -buttonMainMenuClickEventFunctionFlag);
  buttonMainMenuClickEventFunctionFlag = -buttonMainMenuClickEventFunctionFlag;
};

buttonMainMenu.addEventListener("click", buttonMainMenuClickEventFunction);
