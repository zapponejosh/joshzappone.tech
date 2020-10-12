const form = document.getElementById('contact');

function formSubmit(event) {
  event.preventDefault();

  const formResponse = document.getElementById('response');
  formResponse.innerHTML = '';
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const message = document.getElementById('message');
  const data = {
    name: name.value,
    email: email.value,
    message: message.value,
  };
  console.log(data);
  $.ajax({
    type: 'post',
    url: '/sendmail',
    data,
    dataType: 'json',
    success(response) {
      formResponse.classList.remove('error');

      formResponse.innerHTML = `${response.msg}`;
      console.log('success');
    },
    error(response) {
      console.log(response);
      formResponse.classList.add('error');

      formResponse.innerHTML = `${response.responseJSON.msg}`;
    },
  });
  form.reset();
}

form.addEventListener('submit', formSubmit);
