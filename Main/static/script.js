new Splide("#header-video", {
  heightRatio: 0.5,
  arrows: false,
  cover: true,
  trimSpace: "move",
  focus: "left",
  gap: "2rem",
  heightRatio: 0.6,
}).mount(window.splide.Extensions);

new Splide("#image-slider", {
  pagination: false,
  cover: true,
  // perPage: 4,
  // autoWidth: true,
  // heightRatio: "800px",
  trimSpace: "move",
  focus: "left",
  padding: { left: 0, right: "20%" },
  gap: "2rem",
  heightRatio: 0.5,
  // autoplay: false,
  // intersection: {
  //   inView: {
  //     autoplay: true,
  //   },
  //   outView: {
  //     autoplay: false,
  //   },
  // },
  type: "loop",
  autoplay: "pause",
  lazyLoad: true,
  autoWith: "true",
  breakpoints: {
    1200: {
      heightRatio: 0.8,
      padding: { right: "10%" },
      gap: "1.5rem",
    },
    768: {
      heightRatio: 1,
      padding: { right: "8%" },
      gap: "0.8rem",
    },
  },
}).mount();

new Splide("#venue-slider", {
  pagination: false,
  cover: true,
  trimSpace: "move",
  focus: "left",
  padding: { left: 0, right: "20%" },
  gap: "2rem",
  heightRatio: 0.5,
  autoplay: true,
  intersection: {
    inView: {
      autoplay: true,
    },
    outView: {
      autoplay: false,
    },
  },
  type: "loop",
  autoplay: "pause",
  lazyLoad: true,
  intersection: {
    inView: {
      autoplay: true,
    },
    outView: {
      autoplay: false,
    },
  },
  autoWith: "true",
  breakpoints: {
    1200: {
      heightRatio: 0.8,
      padding: { right: "10%" },
      gap: "1.5rem",
    },
    768: {
      heightRatio: 1,
      padding: { right: "8%" },
      gap: "0.8rem",
    },
  },
}).mount();

new Splide("#last-event-slider", {
  pagination: false,
  cover: true,
  trimSpace: "move",
  focus: "left",
  padding: { left: 0, right: "20%" },
  gap: "2rem",
  heightRatio: 0.5,
  // autoplay: false,
  // intersection: {
  //   inView: {
  //     autoplay: true,
  //   },
  //   outView: {
  //     autoplay: false,
  //   },
  // },
  type: "loop",
  autoplay: "pause",
  lazyLoad: true,
  autoWith: "true",
  breakpoints: {
    1200: {
      heightRatio: 0.8,
      padding: { right: "10%" },
      gap: "1.5rem",
    },
    768: {
      heightRatio: 1,
      padding: { right: "8%" },
      gap: "0.8rem",
    },
  },
}).mount();

var videoThumbnail = new Splide("#thumbnail-slider", {
  rewind: true,
  fixedHeight: 60,
  cover: true,
  fixedWidth: 100,
  gap: 10,
  pagination: false,
  cover: true,
  focus: "center",
  isNavigation: true,
  breakpoints: {
    600: {
      fixedWidth: 60,
      fixedHeight: 44,
    },
  },
});

var videoSlider = new Splide("#video-slider", {
  arrows: false,
  pagination: false,
  cover: true,
  trimSpace: "move",
  focus: "left",
  gap: "2rem",
  heightRatio: 0.6,
  autoplay: true,
  intersection: {
    inView: {
      autoplay: true,
    },
    outView: {
      autoplay: false,
    },
  },
  type: "loop",
  autoplay: "pause",
  lazyLoad: true,
  intersection: {
    inView: {
      autoplay: true,
    },
    outView: {
      autoplay: false,
    },
  },
  autoWith: "true",
  breakpoints: {
    1200: {
      heightRatio: 0.7,
      gap: "1.5rem",
    },
    768: {
      heightRatio: 0.7,
      gap: "0.8rem",
    },
  },
});

videoSlider.sync(videoThumbnail);
videoSlider.mount(window.splide.Extensions);
videoThumbnail.mount();

let header = document.getElementById("event-header");
let overlay = document.getElementsByClassName("overlay");
let headerFoot = document.getElementsByClassName("header_foot");
let headerHeight = 0;
let faceImage = document.getElementsByClassName("face-image");
let faceProp = document.getElementsByClassName("face-prop");
let eventHeading = document.getElementsByClassName("event_heading");
let eventInfo = document.getElementsByClassName("event_info");
let ham = document.getElementsByClassName("ham");
let sideNav = document.getElementsByClassName("sidenav");

// console.log(header);

// Footer------------

var map = L.map("map", {
  scrollWheelZoom: false,
}).setView([23.3135055, 77.36136245687672], 16);

map.on("click", function () {
  if (map.scrollWheelZoom.enabled()) {
    map.scrollWheelZoom.disable();
  } else {
    map.scrollWheelZoom.enable();
  }
});

var pin = L.icon({
  iconUrl: "image/pin.png",
  iconSize: [40, 40],
});

L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png", {
  attribution: "none",
  /* minZoom: 15, */
}).addTo(map);

L.marker([23.310573989247, 77.36130245687672], { icon: pin })
  .addTo(map)
  .bindPopup("Seminar Hall,<br> UIT RGPV, bhopal")
  .openPopup();

document.getElementsByClassName(
  "leaflet-control-attribution"
)[0].style.display = "none";

window.onload = function () {
  if (window.innerWidth < 500) {
    c;
    faceImage[0].style.top = eventHeading[0].offsetTop + 60 + "px";
  } else if (window.innerWidth >= 500 && window.innerWidth < 768) {
    faceImage[0].style.top =
      eventHeading[0].offsetTop - 0.05 * window.innerWidth + "px";
    faceImage[0].style.right = "10px";
    eventInfo[0].style.fontSize = "1rem";
  } else if (window.innerWidth >= 768 && window.innerWidth < 1200) {
    faceImage[0].style.top =
      eventHeading[0].offsetTop - 0.02 * window.innerHeight + "px";
    map.panTo(new L.LatLng(23.31016773989247, 77.357024));
  } else {
    faceImage[0].style.top = "3rem";
    map.panTo(new L.LatLng(23.3105099, 77.355624));
  }
};

window.onresize = function () {
  if (window.innerWidth < 500) {
    faceImage[0].style.top = eventHeading[0].offsetTop + 60 + "px";
  } else if (window.innerWidth >= 500 && window.innerWidth < 768) {
    faceImage[0].style.top =
      eventHeading[0].offsetTop - 0.05 * window.innerWidth + "px";
    faceImage[0].style.right = "10px";
    eventInfo[0].style.fontSize = "1rem";
  } else if (window.innerWidth >= 768 && window.innerWidth < 1200) {
    faceImage[0].style.top =
      eventHeading[0].offsetTop - 0.02 * window.innerHeight + "px";
  } else {
    faceImage[0].style.top = "3rem";
  }
};

// about tedx section

let more1 = document.querySelector(".more1");
let more2 = document.querySelector(".more2");

more1.addEventListener("click", () => {
  document.querySelector(".para1").classList.toggle("active");
  document.querySelector(".para2").classList.toggle("disable");
  if (document.querySelector(".para1").classList.contains("active")) {
    more1.innerHTML = "See Less";
  } else more1.innerHTML = "Read More";
  more2.classList.toggle("disable");
  more1.classList.toggle("active");
});

more2.addEventListener("click", () => {
  document.querySelector(".para2").classList.toggle("active");
  document.querySelector(".para1").classList.toggle("disable");
  if (document.querySelector(".para2").classList.contains("active")) {
    more2.innerHTML = "See Less";
  } else more2.innerHTML = "Read More";
  more1.classList.toggle("disable");
  more2.classList.toggle("active");
});
