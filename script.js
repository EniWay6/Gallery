document.addEventListener("DOMContentLoaded", () => {
    console.log("Сайт завантажено успішно!");

    // Підсвічування активного пункту меню
    const links = document.querySelectorAll("nav a");
    const currentPage = window.location.pathname.split("/").pop();

    links.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });

    // Анімація елементів галереї
    const photos = document.querySelectorAll(".gallery .photo");

    photos.forEach((photo, index) => {
        // Початкові стилі
        photo.style.opacity = "0";
        photo.style.transform = "translateY(30px)";

        // Анімація з затримкою
        setTimeout(() => {
            photo.style.opacity = "1";
            photo.style.transform = "translateY(0)";
        }, index * 200);
    });

    // Анімація прокрутки
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.3 });

    document.querySelectorAll(".card, .photo").forEach(element => {
        observer.observe(element);
    });

    // Перегляд зображень у великому форматі
    document.querySelectorAll(".photo img").forEach(img => {
        img.addEventListener("click", () => {
            const overlay = document.createElement("div");
            overlay.style.position = "fixed";
            overlay.style.top = "0";
            overlay.style.left = "0";
            overlay.style.width = "100vw";
            overlay.style.height = "100vh";
            overlay.style.backgroundColor = "rgba(0,0,0,0.8)";
            overlay.style.display = "flex";
            overlay.style.alignItems = "center";
            overlay.style.justifyContent = "center";
            overlay.style.zIndex = "1000";
            overlay.innerHTML = `<img src="${img.src}" style="max-width: 80%; max-height: 80%; border-radius: 10px;">`;

            overlay.addEventListener("click", () => {
                overlay.remove();
            });

            document.body.appendChild(overlay);
        });
    });
});
