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
    days + " days until the villa 💋";
}, 1000);

function updateEventText(day) {
  const text = document.getElementById("event-text");

  const messages = {
    1: "Tonight: A Hot New Bombshell Has Entered The Villa 🔥",
    2: "Tonight: You’re A Bit Of Me 😉",
    3: "This Morning: All My Eggs Are In One Basket 🥚💕"
  }

  text.classList.add("fade");
}
