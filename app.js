window.onload = function() {
  var nav = document.getElementsByClassName('nav')[0];
  window.addEventListener('scroll', function() {
    if (this.pageYOffset > 40) {
      console.log(nav);
      nav.classList.add('nav-shadow');
    } else {
      nav.classList.remove('nav-shadow');
    }
  });
};
// var nav = document.getElementsByClassName('nav');
// console.log(nav);
// console.log(nav[0]);

// var y = window.scrollY;

// if (window.scrollY) {
//   window.scroll(0, 0); // reset the scroll position to the top left of the document.
// }
