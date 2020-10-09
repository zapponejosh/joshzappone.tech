const form = document.getElementById('contact');
const log = document.getElementById('response');

function logSubmit(event) {
  log.textContent = `Form Submitted! Time stamp: ${event.timeStamp}`;
  event.preventDefault();
}

form.addEventListener('submit', logSubmit);
