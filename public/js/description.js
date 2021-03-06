$(function () {
  //navbar

  $(".navBarsClose").on("click", function () {
    $(".navBarsOpen").removeClass("hide");
    $(".nav").removeClass("hide");
    $(".navBarsClose").addClass("hide");
  });

  $(".navBarsOpen").on("click", function () {
    $(".navBarsOpen").addClass("hide");
    $(".nav").addClass("hide");
    $(".navBarsClose").removeClass("hide");
  });

  //end navbar
});
