document.addEventListener("DOMContentLoaded", () => {
    console.log("Галерея завантажена успішно!");

    const currentLocation = window.location.href;
    document.querySelectorAll("nav a").forEach(link => {
        if (link.href === currentLocation) {
            link.classList.add("active");
        }
    });

    const photos = document.querySelectorAll(".photo");

    photos.forEach((photo, index) => {
        photo.style.opacity = "0";
        photo.style.transform = "translateY(30px)";

        setTimeout(() => {
            photo.style.opacity = "1";
            photo.style.transform = "translateY(0)";
        }, index * 200);
    });

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.3 });

    document.querySelectorAll(".photo").forEach(photo => {
        observer.observe(photo);
    });
});
