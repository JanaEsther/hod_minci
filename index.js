const padlOrel = Math.random() < 0.5;

const vysledek = document.querySelector('.vysledek');
const puvodniObsah = vysledek.textContent;

if (padlOrel) {
  vysledek.textContent = 'Padl orel.';
} else {
  vysledek.textContent = 'Padla panna.';
}

const mince = document.querySelector('.mince');
if (padlOrel) {
  mince.classList.add('mince--orel');
} else {
  mince.classList.add('mince--panna');
}

const firstTitle = document.querySelector('h1');
firstTitle.className = 'title';
