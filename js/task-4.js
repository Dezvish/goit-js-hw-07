const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const form = event.target;
  const login = form.elements.login.value.trim(); // Тепер 'login' для email
  const password = form.elements.password.value.trim();

  if (login === '' || password === '') {
    return alert('All form fields must be filled in');
  }

  const formData = {
    login,
    password,
  };

  console.log(formData);

  form.reset();
}
