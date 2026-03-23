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
function showDay(day) {
  // show content
}

function showDay(dayId) {
  document.querySelectorAll('.day').forEach(day => {
    day.classList.remove('active');
  });
  document.getElementById(dayId).classList.add('active');
}

window.addEventListener("load", () => {
  showDay("day1");
});

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
  };

  text.innerText = messages[day] || "Welcome to the villa 💕";
}
document.getElementById("day1").addEventListener("click", () => {
  updateEventText(1);
});

document.getElementById("day2").addEventListener("click", () => {
  updateEventText(2);
});

document.getElementById("day3").addEventListener("click", () => {
  updateEventText(3);
});

function updateEventText(day) {
  const text = document.getElementById("event-text");

  const messages = {
    1: "Tonight: A Hot New Bombshell Has Entered The Villa 🔥",
    2: "Tonight: You’re A Bit Of Me 😉",
    3: "This Morning: All My Eggs Are In One Basket 🥚💕"
  };

  text.classList.remove("fade"); // reset animation
  void text.offsetWidth; // force reflow

  text.innerText = messages[day] || "";

  text.classList.add("fade");
}
