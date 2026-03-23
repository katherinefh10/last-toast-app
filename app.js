function showDay(dayId) {
  document.querySelectorAll('.day').forEach(day => {
    day.classList.remove('active');
  });

  document.getElementById(dayId).classList.add('active');
}
