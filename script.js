alert("¡👋Hola👋!Un Sistema Operativo (SO) es un programa (software) que cuando arrancamos o iniciamos el ordenador se encarga de gestionar todos los recursos del sistema informático, tanto del hardware (partes físicas, disco duro, pantalla, teclado, etc.) como del software (programas e instrucciones), permitiendo así la comunicación entre el usuario y el ordenador.");
(function() {

	
  // define variables
  var items = document.querySelectorAll(".timeline li");

  // check if an element is in viewport
  // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function callbackFunc() {
    for (var i = 0; i < items.length; i++) {
      if (isElementInViewport(items[i])) {
        items[i].classList.add("in-view");
      }
    }
  }

  // listen for events
  window.addEventListener("load", callbackFunc);
  window.addEventListener("resize", callbackFunc);
  window.addEventListener("scroll", callbackFunc);

})();
const btns = document.querySelectorAll('.close');

btns.forEach(btn => {
	btn.addEventListener('click', (e) => {
		e.target.parentNode.remove();
	});
});