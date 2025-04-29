const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const form = event.target;
  const email = form.elements.login.value.trim();
  const password = form.elements.password.value.trim();

  if (email === '' || password === '') {
    return alert('All form fields must be filled in');
  }

  const formData = {
    email,
    password,
  };

  console.log(formData);

  form.reset();
}
