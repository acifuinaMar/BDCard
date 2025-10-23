// Elementos principales
const card = document.getElementById('birthdayCard');
const envelope = document.getElementById('envelope');
const confettiContainer = document.querySelector('.confetti-container');

// Función para abrir/cerrar la tarjeta
function toggleCard() {
    card.classList.toggle('flipped');
    
    if (card.classList.contains('flipped')) {
        createConfetti();
    }
}

// Función para cerrar la tarjeta
function closeCard() {
    card.classList.remove('flipped');
}

// Función CORREGIDA para crear efecto de confeti (realmente detrás del sobre)
function createConfetti() {
    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];
    
    for (let i = 0; i < 80; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        
        // Posición aleatoria en toda la pantalla
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDelay = Math.random() * 5 + 's';
        confetti.style.width = Math.random() * 10 + 8 + 'px';
        confetti.style.height = Math.random() * 10 + 8 + 'px';
        
        // Añadir rotación aleatoria
        confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
        
        confettiContainer.appendChild(confetti);
        
        // Remover el confeti después de la animación
        setTimeout(() => {
            if (confetti.parentNode) {
                confetti.remove();
            }
        }, 5000);
    }
}

// Event listeners
envelope.addEventListener('click', toggleCard);

// Efecto de la solapa del sobre
envelope.addEventListener('mouseenter', function() {
    const flap = document.querySelector('.envelope-flap');
    flap.style.transform = 'rotateX(30deg)';
});

envelope.addEventListener('mouseleave', function() {
    const flap = document.querySelector('.envelope-flap');
    flap.style.transform = 'rotateX(0deg)';
});

// Permitir interacción con botones sin voltear la tarjeta
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function(e) {
        e.stopPropagation();
    });
});

// Mensaje de bienvenida en consola
console.log('¡Feliz Cumpleaños Sor Fátima! 🎂🎉');