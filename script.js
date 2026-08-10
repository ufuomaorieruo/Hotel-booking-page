document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.booking-form');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.querySelector('input[type="text"]').value;
    alert(`Thanks, ${name}! Your booking request has been received. (This is a demo — no real booking was made.)`);
    form.reset();
  });
});
