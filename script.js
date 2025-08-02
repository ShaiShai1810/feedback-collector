document.getElementById('feedbackForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const feedback = document.getElementById('feedback').value;
  alert('Feedback submitted: ' + feedback);
});
