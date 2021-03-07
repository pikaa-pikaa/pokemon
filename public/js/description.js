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
  // console.log(pokemonDescription);
  //animate the description Deatils
  // alert("hi");

  $(".fullHp").append($(".currentHp"));
  // $("#pokemonImg").animate(
  //   {
  //     height: "522",
  //   },
  //   1000
  // );

  $(".numHp").animate(
    {
      width: "100",
    },
    3000
  );
});
