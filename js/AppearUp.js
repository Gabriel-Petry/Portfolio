const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('showU');
            observer.unobserve(entry.target);
        }
    });
});

const hiddenElements = document.querySelectorAll('.hiddenU');
hiddenElements.forEach((el) => observer.observe(el));

// Appearing thing up