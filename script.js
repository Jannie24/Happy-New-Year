document.addEventListener('DOMContentLoaded', function () {
    const heart = document.getElementById('heart');
    const message = document.getElementById('message');
    const container = document.querySelector('.container');

    // Alterna a mensagem ao clicar no coração
    heart.addEventListener('click', function () {
        if (message.textContent === 'Happy New Year!') {
            message.textContent = 'Obrigada por ter me encontrado em 2024, desejo de todo o meu coração criar memórias importantes ap seu lado e viver elas com você.			';
        } else {
            message.textContent = 'Agradeço imensamente por você ter surgido no finalzinho do ano. Você é importante para mim.';
        }

        // Cria pequenos corações ao clicar
        for (let i = 0; i < 10; i++) {
            createFloatingHeart();
        }
    });

    function createFloatingHeart() {
        const smallHeart = document.createElement('div');
        smallHeart.classList.add('small-heart');
        smallHeart.style.left = `${Math.random() * 100}%`;
        smallHeart.style.animationDuration = `${Math.random() * 2 + 2}s`;
        container.appendChild(smallHeart);

        // Remove o coração após a animação
        smallHeart.addEventListener('animationend', () => {
            smallHeart.remove();
        });
    }
});

