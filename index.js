document.addEventListener('DOMContentLoaded', function() {
    const indicators = document.querySelectorAll('.indicator');
    let currentSlide = 0;
    const totalSlides = indicators.length;

    function updateIndicators(index) {
        indicators.forEach((indicator, idx) => {
            indicator.classList.toggle('active', idx === index);
        });
    }

    function autoSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        document.querySelector('.carousel-wrapper').style.transform = `translateX(-${currentSlide * 100}%)`;
        updateIndicators(currentSlide);
    }

    setInterval(autoSlide, 5000); // Change slide every 5 seconds
});


let clicked = false;

        function handleClick() {
            clicked = !clicked;
            const barIcon = document.getElementById('bar');
            if (clicked) {
                barIcon.classList.remove('fa-bars');
                barIcon.classList.add('fa-times');
            } else {
                barIcon.classList.remove('fa-times');
                barIcon.classList.add('fa-bars');
            }
        }
            





















