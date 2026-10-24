//Get year
const year = document.getElementById("getYear");
const currentYear = new Date().getFullYear();
year.textContent = currentYear;

//Active Navbar
const navContainer = document.getElementById("navContainer");
const activeNavbar = navContainer.getElementsByClassName("nav-link");
for (let i = 0; i < activeNavbar.length; i++) {
  activeNavbar[i].addEventListener("click", function () {
    const currentActive = document.querySelector(".nav-link.active");
    if (currentActive) {
      currentActive.classList.remove("active");
    }
    this.classList.add("active");
  });
}

//Remove active
const removeActive = document.querySelector(".navbar-brand");
removeActive.addEventListener("click", function () {
  const currentActive = document.querySelector(".nav-link.active");
  if (currentActive) {
    currentActive.classList.remove("active");
  }
});

window.onload = function () {
  var chart1 = new CanvasJS.Chart("chartContainer1", {
    animationEnabled: true,
    backgroundColor: "transparent",
    subtitles: [
      {
        text: "Khmer",
        verticalAlign: "center",
        fontSize: 24,
        fontColor: "#192f4f",
      },
    ],
    data: [
      {
        type: "doughnut",
        startAngle: 90,
        dataPoints: [{ y: 100, color: "#689A59" }],
      },
    ],
  });
  chart1.render();

  var chart2 = new CanvasJS.Chart("chartContainer2", {
    animationEnabled: true,
    backgroundColor: "transparent",
    subtitles: [
      {
        text: "English",
        verticalAlign: "center",
        fontSize: 24,
        fontColor: "#192f4f",
      },
    ],
    data: [
      {
        type: "doughnut",
        startAngle: 90,
        dataPoints: [
          { y: 67, color: "#FFD409" },
          { y: 33, color: "transparent" },
        ],
      },
    ],
  });
  chart2.render();
};
