// document.getElementById('recruitment-form').addEventListener('submit', function(e) {
//   e.preventDefault();

//   var formData = new FormData(this);

//   fetch('https://script.google.com/macros/s/AKfycbwx1jWrjibQs4sNUh--O-ZhZezVhkOlDQjiaSWDez4SVac8Sl9UuZPvcfgHy3cyXk4U/exec', {
//     method: 'POST',
//     body: formData
//   })
//   .then(response => response.json())
//   .then(data => {
//     if (data.result === "success") {
//       alert("Form submitted successfully!");
//     } else {
//       alert("There was an error submitting the form. Please try again.");
//     }
//   })
//   .catch(error => {
//     console.error('Error:', error);
//     alert("An error occurred while submitting the form.");
//   });
// });

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('recruitment-form'); // Replace 'yourFormId' with your actual form ID
  form.addEventListener('submit', function (e) {
      e.preventDefault();

      // Prepare the data payload
      const formData = new FormData(form);
      const data = {};
      formData.forEach((value, key) => {
          data[key] = value;
      });

      // API URL and headers
      const apiURL = 'https://api.airtable.com/v0/appuOZR9OHaQs4Frf/gfgrct2425'; // Replace 'yourBaseId' and 'yourTableName'
      const headers = {
          Authorization: 'Bearer patbuASv8EsA7ohtx.7dec822878029ff9a70afe0100314ed8ab062cbc1a23e7fc7372a0905fb2a986', // Replace 'yourPersonalAccessToken' with your actual PAT
          'Content-Type': 'application/json'
      };

      // Fetch request to Airtable API
      fetch(apiURL, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({ fields: data })
    })
    .then(response => response.json())
    .then(data => {
        if(data.error) {
            console.error('Error:', data.error);
        } else {
            console.log('Success:', data);
            form.reset();
            alert('Form submitted successfully!');
        }
    })
    .catch((error) => {
        console.error('Network Error:', error);
    });
  });
});
