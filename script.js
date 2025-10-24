const boxes = document.querySelectorAll('.box');
const popup = document.getElementById('popup');
const addBtn = document.querySelector('.add-btn');

boxes.forEach(box => {
  box.addEventListener('click', () => {
    boxes.forEach(b => b.classList.remove('active'));
    box.classList.add('active');
    box.querySelector('input[type="radio"]').checked = true;
  });
});

addBtn.addEventListener('click', () => {
  popup.style.display = 'block';
  setTimeout(() => {
    popup.style.display = 'none';
  }, 2000);
});
