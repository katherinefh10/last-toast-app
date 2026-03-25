// Tab switching
function showDay(dayId) {
  // hide all days
  document.querySelectorAll(".day").forEach(day => {
    day.style.display = "none";
  });

  // show selected day
  const selected = document.getElementById(dayId);
  if (selected) {
    selected.style.display = "block";
  }
}

// Countdown
const eventDate = new Date("April 10, 2026 12:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const distance = eventDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));

  document.getElementById("countdown").innerHTML =
    days + " days until the Villa 💋";
}, 1000);



  text.classList.add("fade");
}
