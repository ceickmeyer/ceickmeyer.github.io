"use strict";
console.log(document.querySelector(".seatNumber").textContent);
console.log("fart");
console.log(document.querySelector(".seatNumber").textContent);

document.querySelector(".date").textContent =
  new Date().toLocaleDateString("en-us", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }) + " at 7:05p.m.";

document.querySelector(".assignSeats").addEventListener("click", function () {
  document.querySelector(".sectionNumber").textContent =
    document.querySelector(".sectionInput").value;
  document.querySelector(".rowNumber").textContent =
    document.querySelector(".rowInput").value;
  document.querySelector(".seatNumber").textContent =
    document.querySelector(".seatInput").value;
  document.querySelector(".teamName").textContent =
    document.querySelector(".teamInput").value +
    " at Washington Nationals Tickets";
});
