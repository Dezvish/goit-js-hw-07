const categories = document.querySelector('#categories');
const items = categories.querySelectorAll('.item');

console.log(`Кількість категорі: ${items.length}`);
items.forEach(item => {
  const title = item.querySelector('.list-of-items').textContent;
  const subItems = item.querySelectorAll('.sub-item');

  console.log(`Категорія: ${title}`);
  console.log(`Кількість елементів: ${subItems.length}`);
});
