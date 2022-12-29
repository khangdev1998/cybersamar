(function () {
  // Back to Top - by CodyHouse.co
  var backTop = document.getElementsByClassName("js-cd-top")[0],
    offset = 300, // browser window scroll (in pixels) after which the "back to top" link is shown
    offsetOpacity = 1200, //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
    scrollDuration = 700,
    scrolling = false;

  if (backTop) {
    //update back to top visibility on scrolling
    window.addEventListener("scroll", function (event) {
      if (!scrolling) {
        scrolling = true;
        !window.requestAnimationFrame
          ? setTimeout(checkBackToTop, 250)
          : window.requestAnimationFrame(checkBackToTop);
      }
    });

    //smooth scroll to top
    backTop.addEventListener("click", function (event) {
      event.preventDefault();
      !window.requestAnimationFrame
        ? window.scrollTo(0, 0)
        : Util.scrollTo(0, scrollDuration);
    });
  }

  function checkBackToTop() {
    var windowTop = window.scrollY || document.documentElement.scrollTop;
    windowTop > offset
      ? Util.addClass(backTop, "cd-top--is-visible")
      : Util.removeClass(backTop, "cd-top--is-visible cd-top--fade-out");
    windowTop > offsetOpacity && Util.addClass(backTop, "cd-top--fade-out");
    scrolling = false;
  }
})();

// Menu bars in mobile
const btnBars = document.querySelector(".header__bars");
const btnClose = document.querySelector(".header__close");
const menu = document.querySelector(".header__menu");
const overlay = document.querySelector(".overlay");
btnBars.addEventListener("click", function () {
  menu.classList.add("active");
  overlay.classList.add('is-show')
});
btnClose.addEventListener("click", function () {
  menu.classList.remove("active");
  overlay.classList.remove('is-show')

});
document.addEventListener("click", function (event) {
  if (!menu.contains(event.target) && !event.target.matches(".header__bars")) {
    menu.classList.remove("active");
	overlay.classList.remove('is-show')
  }
});
