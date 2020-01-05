"use strict";
function initMap() {
  var map, coords, styles, marker, info, content;
  coords = { lat: 40.672766, lng: -73.944062 };
  (styles = [
    {
      elementType: "geometry",
      stylers: [
        {
          color: "#f5f5f5"
        }
      ]
    },
    {
      elementType: "labels.icon",
      stylers: [
        {
          visibility: "off"
        }
      ]
    },
    {
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#616161"
        }
      ]
    },
    {
      elementType: "labels.text.stroke",
      stylers: [
        {
          color: "#f5f5f5"
        }
      ]
    },
    {
      featureType: "administrative.land_parcel",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#bdbdbd"
        }
      ]
    },
    {
      featureType: "poi",
      elementType: "geometry",
      stylers: [
        {
          color: "#eeeeee"
        }
      ]
    },
    {
      featureType: "poi",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#757575"
        }
      ]
    },
    {
      featureType: "poi.park",
      elementType: "geometry",
      stylers: [
        {
          color: "#e5e5e5"
        }
      ]
    },
    {
      featureType: "poi.park",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#9e9e9e"
        }
      ]
    },
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [
        {
          color: "#ffffff"
        }
      ]
    },
    {
      featureType: "road.arterial",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#757575"
        }
      ]
    },
    {
      featureType: "road.highway",
      elementType: "geometry",
      stylers: [
        {
          color: "#dadada"
        }
      ]
    },
    {
      featureType: "road.highway",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#616161"
        }
      ]
    },
    {
      featureType: "road.local",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#9e9e9e"
        }
      ]
    },
    {
      featureType: "transit.line",
      elementType: "geometry",
      stylers: [
        {
          color: "#e5e5e5"
        }
      ]
    },
    {
      featureType: "transit.station",
      elementType: "geometry",
      stylers: [
        {
          color: "#eeeeee"
        }
      ]
    },
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [
        {
          color: "#c9c9c9"
        }
      ]
    },
    {
      featureType: "water",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#9e9e9e"
        }
      ]
    }
  ]),
    (content = "<h1 class='info-title'>i'm here</h1>");
  map = new google.maps.Map(document.getElementById("map"), {
    center: coords,
    zoom: 15,
    styles: styles,
    disableDefaultUI: true // отключение всех кнопок интерфейса на карте
    // zoomControl:true, // плюс минус на карте
    //
    //человечек на карте
  });
  marker = new google.maps.Marker({
    position: coords,
    icon: "images/marker.png",
    draggable: true,
    map: map
  });
  info = new google.maps.InfoWindow({
    content: content
  });
  marker.addListener("click", function() {
    info.open(map, marker);
  });
}

(function($) {
  $(document).ready(function() {
    // Code

    // Slider
    $(".slider").slick({
      dots: true,
      autoPlay: true,
      slidesToShow: 3,
      slidesToScroll: 1
    });

    let sections = {
      header: $("#header").offset().top,
      about: $("#what_we_do_section").offset().top,
      services: $("#slider_section").offset().top,
      gallery: $("#gallery_section").offset().top,
      blog: $("#map").offset().top,
      contact: $("#contact").offset().top
    };
    //doted aside MENU
    $(window).scroll(function() {
      let scrTop = $(document).scrollTop() + $(window).height() / 3,
        position;
      if (scrTop < sections.about) {
        position = "header";
      } else if (scrTop >= sections.about && scrTop < sections.services) {
        position = "what_we_do_section";
      } else if (scrTop >= sections.services && scrTop < sections.gallery) {
        position = "slider_section";
      } else if (scrTop >= sections.gallery && scrTop < sections.blog) {
        position = "gallery_section";
      } else if (scrTop >= sections.blog && scrTop < sections.contact) {
        position = "blog";
      } else if (scrTop >= sections.contact) {
        position = "contact";
      }
      $(".fixed-nav")
        .find(".active")
        .removeClass("active");
      $(".fixed-nav")
        .find(`a[data-menu=${position}]`)
        .addClass("active");
    });
  });
})(jQuery);
