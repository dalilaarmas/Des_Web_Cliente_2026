// Este código se ejecuta en TU navegador, no en el servidor.
const info = document.querySelector('#info');
const ahora = new Date().toLocaleString('es-ES');

info.textContent = `Página actualizada en tu navegador el ${ahora}`;

console.log('Navegador:', navigator.userAgent);
console.log('Dirección:', location.href);
