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
