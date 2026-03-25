// Tab switching
function showDay(dayId) {
  document.querySelectorAll(".day, .packing").forEach(section => {
    section.style.display = "none";
  });

  const selected = document.getElementById(dayId);
  if (selected) {
    selected.style.display = "block";
  }
}

// Run ONCE when page loads
window.addEventListener("load", () => {
  showDay("packing");
});

// Countdown
const eventDate = new Date("April 10, 2026 12:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const distance = eventDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));

  const countdownEl = document.getElementById("countdown");
  if (countdownEl) {
    countdownEl.innerHTML = days + " days until the Villa 💋";
  }
}, 1000);

// FIXED function
function updateEventText(day) {
  const text = document.getElementById("event-text");
  if (!text) return;

  text.classList.add("fade");

  setTimeout(() => {
    text.classList.remove("fade");
  }, 300);
}
