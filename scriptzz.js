document.getElementById('recruitment-form').addEventListener('submit', function(e) {
  e.preventDefault();

  var formData = new FormData(this);

  fetch('https://script.google.com/macros/s/AKfycbwx1jWrjibQs4sNUh--O-ZhZezVhkOlDQjiaSWDez4SVac8Sl9UuZPvcfgHy3cyXk4U/exec', {
    method: 'POST',
    body: formData
  })
  .then(response => response.json())
  .then(data => {
    if (data.result === "success") {
      alert("Form submitted successfully!");
    } else {
      alert("There was an error submitting the form. Please try again.");
    }
  })
  .catch(error => {
    console.error('Error:', error);
    alert("An error occurred while submitting the form.");
  });
});