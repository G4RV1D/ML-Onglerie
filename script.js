// Animation des couleurs sur les ongles
const nailImage = document.getElementById('nail-image');

// Fonction pour changer les couleurs
function changeNailColor() {
  const colors = ['#FF69B4', '#FFD700', '#FF4500', '#00FF7F', '#87CEFA']; // Palette de couleurs
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  nailImage.style.filter = `hue-rotate(${Math.random() * 360}deg)`; // Change la teinte
}

// Modifier les couleurs toutes les 2 secondes
setInterval(changeNailColor, 2000);
