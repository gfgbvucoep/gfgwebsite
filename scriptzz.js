document.getElementById('recruitment-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
  
    fetch('https://script.google.com/macros/s/AKfycbwx1jWrjibQs4sNUh--O-ZhZezVhkOlDQjiaSWDez4SVac8Sl9UuZPvcfgHy3cyXk4U/exec', {  // Replace with your actual Web App URL
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      alert('Form submitted successfully!');
    })
    .catch((error) => {
      console.error('Error:', error);
      alert('Form submission failed!');
    });
  });
  
