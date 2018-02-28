var view = document.getElementById('button__view');
var btn = document.getElementById('button__area');
var hidden = document.getElementById('button__hidden');

view.addEventListener('click', function() {
  btn.classList.add('is-active');
  hidden.classList.add('is-active');
  this.classList.add('is-hidden');
});

hidden.addEventListener('click', function() {
  btn.classList.remove('is-active');
  view.classList.remove('is-hidden');
  this.classList.remove('is-active');
});