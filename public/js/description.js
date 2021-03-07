$(function () {
  //navbar
  console.log("hi");
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

  //animate the description Deatils
  alert("hi");
  $("img").animate(
    {
      width: "100",
    },
    3000
  );
});
