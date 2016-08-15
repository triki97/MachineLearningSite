function showContent(boxid){
  if (boxid=="custom"){
    $('#card').load("custom.html");
    removeButtonColoring();
    $('#choiceOne').addClass('indigo lighten-3');
    $('#choiceTwo').addClass('grey lighten-2');
    $('#choiceThree').addClass('grey lighten-2');
    Materialize.fadeInImage('#card');
  }
  else if (boxid=="simple"){
    $('#card').load("simple.html");
    removeButtonColoring();
    $('#choiceOne').addClass('grey lighten-2');
    $('#choiceTwo').addClass('indigo lighten-3');
    $('#choiceThree').addClass('grey lighten-2');
    Materialize.fadeInImage('#card');
  }
  else if (boxid=="dependable"){
    $('#card').load("dependable.html");
    removeButtonColoring();
    $('#choiceOne').addClass('grey lighten-2');
    $('#choiceTwo').addClass('grey lighten-2');
    $('#choiceThree').addClass('indigo lighten-3');
    Materialize.fadeInImage('#card');
  }
};

function removeButtonColoring() {
  $('#choiceOne').removeClass('grey lighten-2');
  $('#choiceTwo').removeClass('grey lighten-2');
  $('#choiceThree').removeClass('grey lighten-2');
}

function mobileViewUpdate() {
    var viewportWidth = $(window).width();
    if (viewportWidth < 450) {
      $("#buttons").removeClass("row");
      $("#choiceOne").addClass("container #description1");
      $("#choiceTwo").addClass("container #description2");
      $("#choiceThree").addClass("container #description3");
    }
    else if (viewportWidth < 830 && viewportWidth > 450) {
      $("#buttons").removeClass("row");
      $("#choiceOne").addClass("container #description1");
      $("#choiceTwo").addClass("container #description2");
      $("#choiceThree").addClass("container #description3");
    }
    else {
      $("#buttons").addClass("row");
      $("#choiceOne").removeClass("container #description1");
      $("#choiceTwo").removeClass("container #description2");
      $("#choiceThree").removeClass("container #description3");
    }
}

$(window).load(mobileViewUpdate);
$(window).resize(mobileViewUpdate);

particlesJS('particles-js',

  {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false,
          "mode": "repulse"
        },
        "onclick": {
          "enable": false,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

);
