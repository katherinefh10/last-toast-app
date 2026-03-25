// Tab switching
function showDay(dayId) 
let startX = 0;
let currentTab = 0; // 0 = packing, 1 = day1, etc.
const tabs = ["packing", "day1", "day2", "day3"];
const container = document.getElementById("tab-container");

// Touch start
container.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

// Touch end
container.addEventListener("touchend", (e) => {
  const endX = e.changedTouches[0].clientX;
  const diffX = endX - startX;

  if (Math.abs(diffX) > 50) { // swipe threshold
    if (diffX < 0 && currentTab < tabs.length - 1) {
      currentTab++;
    } else if (diffX > 0 && currentTab > 0) {
      currentTab--;
    }
    showDay(tabs[currentTab]);
  }
});

function showDay(dayId) {
  document.querySelectorAll(".day, .packing").forEach(section => {
    section.style.display = "none";
  });

  const selected = document.getElementById(dayId);
  if (selected) selected.style.display = "block";

  currentTab = tabs.indexOf(dayId); // sync swipe with tab index

  // update active button
  document.querySelectorAll(".tabs button").forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("onclick").includes(dayId));
  });
}

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

  setTimeout(() => {
    text.classList.remove("fade");
  }, 300);
}
