$(document).ready(function () {
  var buttons = $(".colorChangeBtn");
  var hiddenButtons = $(".hiddenButtons button");
  var hiddenContents = $(".hiddenContent");

  buttons.click(function () {
    buttons.css("background-color", "");
    $(this).css("background-color", "#ffcd82");
  });

  hiddenButtons.click(function () {
    hiddenButtons.css("background-color", "");
    $(this).css("background-color", "#ffcd82");
  });

  function hideAllHiddenContents() {
    hiddenContents.hide();
  }

  function toggleHiddenContent(element) {
    hiddenContents.not(element).hide();
    element.toggle();
  }

  //main buttons
  $("#about_us").click(function () {
    toggleHiddenContent($("#hiddenAboutUs"));
    $(
      "#reservationForm, #LIDVForm, #fotorama1, #fotorama2,#fotorama3,#fotorama4,#fotorama5"
    ).hide();
    $("#hiddenAboutUs").show();
  });

  $("#activities").click(function () {
    toggleHiddenContent($("#hiddenActivities"));
    $(
      ".aboutUsPage, #reservationForm, #LIDVForm ,#fotorama3,#fotorama4,#fotorama5"
    ).hide();
    $("#hiddenActivities").show();
  });

  $("#facilities").click(function () {
    toggleHiddenContent($("#hiddenFacilities"));
    $(
      ".aboutUsPage, #reservationForm, #LIDVForm, #fotorama1, #fotorama2"
    ).hide();
    $("#hiddenFacilities").show();
  });

  $("#rooms").click(function () {
    toggleHiddenContent($("#hiddenRooms"));
    $(
      ".aboutUsPage,#fotorama1, #fotorama2, #fotorama3,#fotorama4,#fotorama5"
    ).hide();
    $("#hiddenRooms").show();
  });

  //buttons that has has buttons in it
  $("#organization").click(function () {
    $(".hiddenOrg").toggle();
    $(this).css("background-color", "#ffcd82");
    $(".hiddenLocation").hide();
  });

  $("#location").click(function () {
    $(".hiddenLocation").toggle();
    $(this).css("background-color", "#ffcd82");
    $(".hiddenOrg").hide();
  });

  $("#session").click(function () {
    $(".hiddenSession").toggle();
    $(this).css("background-color", "#ffcd82");
  });

  //buttons in about us
  $("#layout").click(function () {
    $("#layoutAli").toggle();
    $(
      ".hiddenOrg, #fellowAli, #committeeAli, iframe, #fotorama1, #fotorama2"
    ).hide();
    $("#location").show(); // Specify the element to keep visible
  });
  $("#gMap").click(function () {
    $("iframe").toggle();
    $(
      ".hiddenOrg, #fellowAli, #committeeAli, #layoutAli, #fotorama1, #fotorama2"
    ).hide();
    $("#location").show(); // Specify the element to keep visible
  });

  $("#fellow").click(function () {
    $("#fellowAli").toggle();
    $(
      ".hiddenLocation, #layoutAli, #committeeAli, iframe, #fotorama1, #fotorama2"
    ).hide();
    $("#Organization").show(); // Specify the element to keep visible
  });
  $("#committee").click(function () {
    $("#committeeAli").toggle();
    $(
      ".hiddenLocation, #layoutAli, #fellowAli, iframe, #fotorama1, #fotorama2"
    ).hide();
    $("#organization").show(); // Specify the element to keep visible
  });

  //buttons in activities
  $("#21_22").click(function () {
    $("#eventS1P1, #eventS1P2,#eventS1P3, #fotorama1").toggle();
    $("#fotorama2,#fotorama3,#fotorama4, #fotorama5").hide();
    $("#session,#eventS1P1, #eventS1P2,#eventS1P3").show(); // Specify the element to keep visible
  });
  $("#22_23").click(function () {
    $("#eventS2P1, #eventS2P2, #eventS2P3, #fotorama2").toggle();
    $("#fotorama1, #fotorama3,#fotorama4,#fotorama5").hide();
    $("#session,#eventS2P1, #eventS2P2, #eventS2P3").show(); // Specify the element to keep visible
  });

  //buttons in rooms
  $("#reservation").click(function () {
    $("#reservationForm").toggle();
    $("#LIDVForm").hide();
    $("#hiddenRooms").show(); // Specify the element to keep visible
  });
  $("#LIDV").click(function () {
    $("#LIDVForm").toggle();
    $("#reservationForm").hide();
    $("#hiddenRooms").show(); // Specify the element to keep visible
  });
});

//buttons in facilities

$("#cafeteria").click(function () {
  $("#fotorama3").toggle();
  $("#fotorama4, #fotorama5").hide();
  $("#hiddenFacilities").show(); // Specify the element to keep visible
});

$("#block").click(function () {
  $("#fotorama4").toggle();
  $("#fotorama3, #fotorama5").hide();
  $("#hiddenFacilities").show(); // Specify the element to keep visible
});

$("#others").click(function () {
  $("#fotorama5").toggle();
  $("#fotorama3, #fotorama4").hide();
  $("#hiddenFacilities").show(); // Specify the element to keep visible
});

$(document).ready(function () {
  $("#fotorama1").fotorama({
    width: 500, // Adjust the width
    height: 500, // Adjust the height
    fit: "cover",
    loop: true,
  });
});
$(document).ready(function () {
  $("#fotorama2").fotorama({
    width: 500, // Adjust the width
    height: 500, // Adjust the height
    fit: "cover",
    loop: true,
  });
});
$(document).ready(function () {
  $("#fotorama3").fotorama({
    loop: true,
    width: 800, // Set the width to 100% to use the original width of the images
    height: 600, // Set the height to 100% to use the original height of the images
  });
});

$(document).ready(function () {
  $("#fotorama4").fotorama({
    loop: true,
    width: 800,
    height: 600,
  });
});

$(document).ready(function () {
  $("#fotorama5").fotorama({
    loop: true,
    width: 800,
    height: 600,
  });
});
$(document).ready(function ($) {
  $(".reserveButton1").click(function (e) {
    e.preventDefault();
    window.open(
      "choice1.html",
      "_blank",
      "width=500,height=200,scrollbars=yes"
    );
  });
});
$(document).ready(function ($) {
  $(".reserveButton2").click(function (e) {
    e.preventDefault();
    window.open(
      "choice2.html",
      "_blank",
      "width=500,height=200,scrollbars=yes"
    );
  });
});
