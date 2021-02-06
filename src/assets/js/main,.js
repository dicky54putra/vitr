const headerToggle = document.querySelector(".header-toggle");
const sidebar = document.getElementById("sidebar");
const header = document.querySelector(".header");
const main = document.querySelector(".main");
const navLink = document.querySelectorAll("#nav-link");
const dropdownArrow = document.querySelectorAll(".dropdown");
const dropdownLink = document.querySelectorAll(".dropdown-link");
const headerUser = document.querySelector(".header-user");
const user = document.querySelector("#user");

headerToggle.addEventListener("click", (e) => {
  sidebar.classList.toggle("sidebar-show");

  header.classList.toggle("show");
  main.classList.toggle("show");

  navLink.forEach((nav) => {
    nav.querySelector(".sidebar-name").classList.toggle("sidebar-name-show");
    nav.classList.toggle("sidebar-link-show");
  });

  dropdownLink.forEach((link) => {
    const sidebarShow = document.querySelector(".sidebar-show");
    if (sidebarShow === null) {
      link.classList.add("hidden");
    } else {
      link.classList.remove("hidden");
      link.classList.add("flex");
    }
  });
});

let i;
for (i = 0; i < dropdownArrow.length; i++) {
  dropdownArrow[i].addEventListener("click", function (e) {
    e.preventDefault();
    this.querySelector(".arrow").classList.toggle("arrow-active");
    const dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
      this.classList.remove("active");
    } else {
      dropdownContent.style.display = "block";
      this.classList.add("active");
    }
  });
}

window.addEventListener("click", function (e) {
  if (user.contains(e.target) || headerUser.contains(e.target)) {
    headerUser.classList.toggle("header-user-show");
  } else {
    headerUser.classList.remove("header-user-show");
  }
});

// Chart

const ctx = document.getElementById("myChart").getContext("2d");
const myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  },
});
