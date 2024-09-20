// document.getElementById('recruitment-form').addEventListener('submit', function(e) {
//     e.preventDefault();
    
//     const formData = new FormData(this);
  
//     fetch('https://script.google.com/macros/s/AKfycbwx1jWrjibQs4sNUh--O-ZhZezVhkOlDQjiaSWDez4SVac8Sl9UuZPvcfgHy3cyXk4U/exec', {  // Replace with your actual Web App URL
//       method: 'POST',
//       body: formData
//     })
//     .then(response => response.json())
//     .then(data => {
//       console.log('Success:', data);
//       alert('Form submitted successfully!\n Please join Recruitment group for the further information \n https://chat.whatsapp.com/ImEzhVKZmjt9dijeY48LzV');
//     })
//     .catch((error) => {
//       console.error('Error:', error);
//       alert('Form submission failed! \n If you have an issue please contact \n Kshitij Tomar  9039269205 ');
//     });
//   });

  // model Script
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
      // Show custom modal
      document.getElementById('successModal').style.display = 'block';
    })
    .catch((error) => {
      console.error('Error:', error);
      alert('Form submission failed! \n If you have an issue please contact \n 9039269205 ');
    });
  });

  // Close the modal when the user clicks on the close button
  document.getElementById('closeModal').addEventListener('click', function() {
    document.getElementById('successModal').style.display = 'none';
  });



