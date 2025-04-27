const input = document.querySelector('#name-input');
const output = document.querySelector('.title-prt-2');

input.addEventListener('input', even => {
  const trimmedValue = even.currentTarget.value.trim();
  output.textContent = trimmedValue === '' ? 'Anonymous' : trimmedValue;
});
