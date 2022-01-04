const btn = document.querySelector('#btn-mobile');
const nav = document.querySelector('#nav');

btn.addEventListener('click', (event) => nav.classList.toggle('active'));
