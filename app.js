// Tab switching
function showDay(dayId) {
  document.querySelectorAll('.day').forEach(day => {
    day.classList.remove('active');
  });
  document.getElementById(dayId).classList.add('active');
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

// Text popup
setTimeout(() => {
  const popup = document.getElementById("textPopup");
  popup.style.display = "block";

  setTimeout(() => {
    popup.style.display = "none";
  }, 3000);
}, 2000);
