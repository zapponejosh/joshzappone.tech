const form = document.getElementById('contact');

function formSubmit(event) {
  event.preventDefault();

  const formResponse = document.getElementById('response');

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  const data = {
    name,
    email,
    message,
  };
  console.log(data);
  $.ajax({
    type: 'post',
    url: '/sendmail',
    data,
    dataType: 'json',
    success(response) {
      formResponse.innerHTML = `${response.msg}`;
      console.log('success');
    },
    error(response) {
      formResponse.innerHTML = `${response.msg}`;
      console.log(response);
    },
  });
}

form.addEventListener('submit', formSubmit);
