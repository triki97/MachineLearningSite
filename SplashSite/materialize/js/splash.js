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
