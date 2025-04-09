function setupHeaderEffects() {
    const headerEl = document.querySelector('.header');
    if (headerEl) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                headerEl.classList.add('header-scrolled');
            } else if (window.scrollY <= 50) {
                headerEl.classList.remove("header-scrolled")
            }
        });
    }
}

setupHeaderEffects();

// This JS code is resposible for the header animation