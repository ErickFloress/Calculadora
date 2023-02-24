const checkbox = document.getElementById('light-mode');
const body = document.body;

checkbox.addEventListener('change', function() {
  if (checkbox.checked) {
    body.classList.add('dark');
  } else {
    body.classList.remove('dark');
  }
});