const swiper = new Swiper('.swiper', {
  effect: 'cards',
  grabCursor: true
});

function criarMeteoro() {
  const meteoro = document.createElement("span");
  meteoro.style.left = Math.random() * window.innerWidth + "px";
  document.querySelector(".meteoro").appendChild(meteoro);
  setTimeout(() => meteoro.remove(), 2000);
}
setInterval(criarMeteoro, 100);

const inicio = new Date("2021-10-08T00:00:00");
function atualizarContador() {
  const agora = new Date();
  let diff = Math.floor((agora - inicio) / 1000);
  const anos = Math.floor(diff / (365 * 24 * 60 * 60));
  diff %= (365 * 24 * 60 * 60);
  const meses = Math.floor(diff / (30 * 24 * 60 * 60));
  diff %= (30 * 24 * 60 * 60);
  const dias = Math.floor(diff / (24 * 60 * 60));
  diff %= (24 * 60 * 60);
  const horas = Math.floor(diff / 3600);
  diff %= 3600;
  const minutos = Math.floor(diff / 60);
  const segundos = diff % 60;

  document.getElementById("contador").innerText =
    `Compartilhando momentos há ${anos} anos ${meses} meses ${dias} dias ${horas} horas ${minutos} minutos ${segundos} segundos ❤️`;
    
}
setInterval(atualizarContador, 1000);
atualizarContador();

function abrirSurpresa() {
  document.getElementById('surpresaModal').style.display = 'flex';
}

function fecharSurpresa() {
  document.getElementById('surpresaModal').style.display = 'none';
}
