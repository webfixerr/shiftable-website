var tabContainers = document.querySelectorAll(".tab-container");

tabContainers.forEach(function (tabContainer) {
  var tabs = tabContainer.querySelectorAll(".tab");
  var tabDataSets = tabContainer.querySelectorAll("[data-tab]:not(.tab)");

  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      tab.classList.add("active");

      tabDataSets.forEach(function (dataSet) {
        if (dataSet.getAttribute("data-tab") === tab.getAttribute("data-tab")) {
          dataSet.classList.add("active");
        } else {
          dataSet.classList.remove("active");
        }
      });

      tabs.forEach(function (_tab) {
        if (_tab !== tab) _tab.classList.remove("active");
      });
    });
  });
});


// menu js 

// function myFunction() {
//   var x = document.getElementById("myLinks");
//   if (x.classList.add === "show") {
//     x.classList.add = "hide";
//   } else {
//     x.style.display = "show";
//   }
// }

function myFunction() {
var elem = document.getElementById( 'myLinks' );
//elem.classList.add('show'); // Add class
//elem.classList.remove('hideMenu'); // Remove class
elem.classList.toggle('showMenu'); // Add or remove class
if ( elem.classList.contains('some-third-class') ) { // Check for class
   
}

}