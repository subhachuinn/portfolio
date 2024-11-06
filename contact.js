const btn = document.getElementById('button');

document.getElementById('contact-form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'service_kiocu55';
   const templateID = 'template_9x43oex';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Message Sent Succesfully!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
})