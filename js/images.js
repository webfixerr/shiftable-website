var sectionList = document.querySelectorAll(".image-section");

function minmax(num, min, max) {
  var MIN = min || 1;
  var MAX = max || 20;
  var parsed = parseInt(num);
  return Math.min(Math.max(parsed, MIN), MAX);
}

sectionList.forEach(function (section) {
  var imagePath = "img/" + section.getAttribute("data-image");
  var sectionBoundary = section.getBoundingClientRect();

  for (var i = 0; i < section.children.length; i++) {
    var article = section.children[i];
    var articleBoundary = article.getBoundingClientRect();
    var top = sectionBoundary.top - articleBoundary.top;
    var left = sectionBoundary.left - articleBoundary.left;

    if (article.getAttribute("data-aos") === "fade-up") top += 100;

    article.innerHTML += `<img src="${imagePath}" class="article__bg" style="top:${top}px;left:${left}px;">`;
  }
});
