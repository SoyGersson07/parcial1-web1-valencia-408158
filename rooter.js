function loadView(view) {
  fetch(`views/${view}.html`)
    .then(res => res.text())
    .then(html => {
      document.getElementById('main-content').innerHTML = html;
    });
}

document.querySelectorAll('.nav-link').forEach(btn => {
  btn.addEventListener('click', () => {
    loadView(btn.dataset.section);
  });
});


loadView('muro');


