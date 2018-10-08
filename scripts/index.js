var mainMenuPosition = document
  .getElementsByClassName("mainMenu")[0]
  .getBoundingClientRect().top;

window.onscroll = function() {
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
