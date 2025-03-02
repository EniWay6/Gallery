document.addEventListener("DOMContentLoaded", () => {
    console.log("Сайт завантажено успішно!");
    
    // Додавання анімаційного ефекту при прокручуванні
    const photos = document.querySelectorAll(".photo");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.5 });

    photos.forEach(photo => observer.observe(photo));
});
