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


// header sticky
window.onscroll = function() {stickyHeader()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function stickyHeader() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

// menu js 

function myFunction() {
var elem = document.getElementById( 'myLinks' );
//elem.classList.add('show'); // Add class
//elem.classList.remove('hideMenu'); // Remove class
elem.classList.toggle('showMenu'); // Add or remove class
if ( elem.classList.contains('some-third-class') ) { // Check for class
   
}

}

// accordain js 

var accItem = document.getElementsByClassName('accordionItem');
    var accHD = document.getElementsByClassName('accordionItemHeading');
    for (i = 0; i < accHD.length; i++) {
        accHD[i].addEventListener('click', toggleItem, false);
    }
    function toggleItem() {
        var itemClass = this.parentNode.className;
        for (i = 0; i < accItem.length; i++) {
            accItem[i].className = 'accordionItem close';
        }
        if (itemClass == 'accordionItem close') {
            this.parentNode.className = 'accordionItem open';
        }
    }



// modal js 
var modal = document.querySelector(".modal");
var trigger = document.querySelector(".trigger");
var closeButton = document.querySelector(".close-button");

function toggleModal() {
    modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);


// range slider 

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}
