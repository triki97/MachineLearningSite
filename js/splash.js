function showContent(boxid){
  if (boxid=="join"){
    $('#card').load("join.html");
    Materialize.fadeInImage('#card');
  }
  else if (boxid=="aboutUs"){
    $('#card').load("aboutUs.html");
    Materialize.fadeInImage('#card');
  }
};

function mobileViewUpdate() {
    var viewportWidth = $(window).width();
    if (viewportWidth < 450) {
      $("#buttons").removeClass("row");
      $("#choiceOne").addClass("container #description1");
      $("#choiceTwo").addClass("container #description2");
    }
    else if (viewportWidth < 830 && viewportWidth > 450) {
      $("#buttons").removeClass("row");
      $("#choiceOne").addClass("container #description1");
      $("#choiceTwo").addClass("container #description2");
    }
    else {
      $("#buttons").addClass("row");
      $("#choiceOne").removeClass("container #description1");
      $("#choiceTwo").removeClass("container #description2");
    }
}

$(window).load(mobileViewUpdate);
$(window).resize(mobileViewUpdate);
