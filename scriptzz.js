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

  // routing to next page js

  
    document.addEventListener('DOMContentLoaded', function () {
        const form = document.getElementById('recruitment-form');
        const nextButton = form.querySelector('button');
        
        nextButton.addEventListener('click', function (e) {
            e.preventDefault();  // Prevent the form from submitting

            // Get the selected domain from the form
            const domain = document.getElementById('domain').value;

            // Validate if a domain is selected
            if (!domain) {
                alert("Please select a domain.");
                return;
            }

            // Redirect to different pages based on the selected domain
            switch (domain) {
                case 'tech':
                    window.location.href = './Form/formtech.html';
                    break;
                case 'event-management':
                    window.location.href = './Form/formevent.html';
                    break;
                case 'design':
                    window.location.href = './Form/formdesign.html';
                    break;
                case 'outreach':
                    window.location.href = './Form/formoutrech.html';
                    break;
                default:
                    alert("Please select a valid domain.");
            }
        });
    });






