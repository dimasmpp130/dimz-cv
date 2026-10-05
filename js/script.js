(function () {
  var yearElement = document.getElementById("year");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
})();

function printCV() {
  window.print();
}