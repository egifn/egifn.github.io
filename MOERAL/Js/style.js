// For Carousel
 const carousel = document.querySelector('.carousel');
        const carouselInner = carousel.querySelector('.carousel-inner');
        const carouselItems = carousel.querySelectorAll('.carousel-item');
        const prevBtn = carousel.querySelector('.prev');
        const nextBtn = carousel.querySelector('.next');
        const indicators = carousel.querySelector('.carousel-indicators');

        let currentIndex = 0;
        const totalItems = carouselItems.length;

        // Clone first and last items
        const firstClone = carouselItems[0].cloneNode(true);
        const lastClone = carouselItems[totalItems - 1].cloneNode(true);

        // Append clones
        carouselInner.appendChild(firstClone);
        carouselInner.insertBefore(lastClone, carouselItems[0]);

        // Adjust carousel inner width
        carouselInner.style.width = `${(totalItems + 2) * 100}%`;

        // Create indicators
        carouselItems.forEach((_, index) => {
            const indicator = document.createElement('div');
            indicator.classList.add('carousel-indicator');
            if (index === 0) indicator.classList.add('active');
            indicator.addEventListener('click', () => goToSlide(index));
            indicators.appendChild(indicator);
        });

        function updateCarousel() {
            carouselInner.style.transform = `translateX(-${(currentIndex + 1) * 100 / (totalItems + 2)}%)`;
            updateIndicators();
        }

        function updateIndicators() {
            const allIndicators = indicators.querySelectorAll('.carousel-indicator');
            allIndicators.forEach((indicator, index) => {
                indicator.classList.toggle('active', index === currentIndex);
            });
        }

        function goToSlide(index) {
            currentIndex = index;
            carouselInner.style.transition = 'transform 0.5s ease';
            updateCarousel();
        }

        function nextSlide() {
            if (currentIndex === totalItems - 1) {
                currentIndex = 0;
                carouselInner.style.transition = 'none';
                carouselInner.style.transform = `translateX(0%)`;
                setTimeout(() => {
                    carouselInner.style.transition = 'transform 0.5s ease';
                    currentIndex = 0;
                    updateCarousel();
                }, 10);
            } else {
                currentIndex++;
                updateCarousel();
            }
        }

        function prevSlide() {
            if (currentIndex === 0) {
                currentIndex = totalItems - 1;
                carouselInner.style.transition = 'none';
                carouselInner.style.transform =
                    `translateX(-${(totalItems + 1) * 100 / (totalItems + 2)}%)`;
                setTimeout(() => {
                    carouselInner.style.transition = 'transform 0.5s ease';
                    updateCarousel();
                }, 10);
            } else {
                currentIndex--;
                updateCarousel();
            }
        }

        nextBtn.addEventListener('click', (e) => {
            e.preventDefault();
            nextSlide();
        });

        prevBtn.addEventListener('click', (e) => {
            e.preventDefault();
            prevSlide();
        });

        // Initial setup
        updateCarousel();

        // Auto-slide every 5 seconds
        setInterval(nextSlide, 5000);


        // For word limit Product Title
        function truncateText(className, wordLimit) {
            // Ambil semua elemen dengan className yang diberikan
            const elements = document.querySelectorAll(`.${className}`);

            elements.forEach(element => {
                let text = element.textContent || element.innerText;
                let words = text.split(' ');

                if (words.length > wordLimit) {
                    words = words.slice(0, wordLimit);
                    element.textContent = words.join(' ') + '...';
                }
            });
        }
        // Penggunaan fungsi
        truncateText('product-title', 7);