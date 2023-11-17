document.addEventListener('DOMContentLoaded', function() {
    let currentSlide = 0;

    function showSlide(index) {
        const slides = document.querySelector('.slides');

        if (slides) {
            const totalSlides = document.querySelectorAll('.slides img').length;

            if (index >= totalSlides) {
                currentSlide = 0;
            } else if (index < 0) {
                currentSlide = totalSlides - 1;
            } else {
                currentSlide = index;
            }

            const newTransformValue = -currentSlide * 100 + '%';
            slides.style.transform = 'translateX(' + newTransformValue + ')';
        } else {
            console.error('Elemento .slides não encontrado no DOM.');
        }
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    function prevSlide() {
        showSlide(currentSlide - 1);
    }

    // Inicialização do carrossel
    showSlide(currentSlide);
});
