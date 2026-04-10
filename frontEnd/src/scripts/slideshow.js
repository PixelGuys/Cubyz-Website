export function simpleSlider(selector, imagesList, options = {}) {
    const slider = typeof selector === "string"
        ? document.querySelector(selector)
        : selector;

    if (!slider || !Array.isArray(imagesList) || imagesList.length === 0) {
        console.warn("simpleSlider: Invalid slider element or empty images list.");
        return null;
    }

    const {
        startIndex = 0,
        animationClass = "animated",
        autoplay = false,
        autoplayDelay = 3000,
        pauseOnHover = true
    } = options;

    const track = slider.querySelector(".hcg-slider-track");
    const dotsContainer = slider.querySelector(".hcg-slide-dot-control");
    const prevBtn = slider.querySelector("#hcg-slide-prev");
    const nextBtn = slider.querySelector("#hcg-slide-next");

    let index = startIndex;
    const total = imagesList.length;
    let autoplayTimer = null;

    track.innerHTML = imagesList.map((img, i) => `
        <a ${img.link ? `href="${img.link}" target="_blank"` : ""} class="hcg-slides ${animationClass}">
            <img src="${img.src}" alt="${img.alt || ""}">
            <span class="hcg-slide-text">${img.name || ""}</span>
        </a>
    `).join("");

    dotsContainer.innerHTML = imagesList.map((_, i) => `
        <a href="#" class="hcg-slide-dot" data-id="${i}"></a>
    `).join("");

    const slides = slider.querySelectorAll(".hcg-slides");
    const dots = slider.querySelectorAll(".hcg-slide-dot");

    const showSlide = (i) => {
        index = (i + total) % total;

        slides.forEach((slide, idx) => {
            slide.style.display = idx === index ? "flex" : "none";
            dots[idx].classList.toggle("dot-active", idx === index);
        });
    };

    const startAutoplay = () => {
        if (!autoplay || autoplayTimer) return;
        autoplayTimer = setInterval(() => showSlide(index + 1), autoplayDelay);
    };

    const stopAutoplay = () => {
        clearInterval(autoplayTimer);
        autoplayTimer = null;
    };

    prevBtn.addEventListener("click", e => {
        e.preventDefault();
        showSlide(index - 1);
    });

    nextBtn.addEventListener("click", e => {
        e.preventDefault();
        showSlide(index + 1);
    });

    dotsContainer.addEventListener("click", e => {
        const dot = e.target.closest(".hcg-slide-dot");
        if (!dot) return;
        e.preventDefault();
        showSlide(+dot.dataset.id);
    });

    if (pauseOnHover && autoplay) {
        slider.addEventListener("mouseenter", stopAutoplay);
        slider.addEventListener("mouseleave", startAutoplay);
    }

    showSlide(index);
    startAutoplay();

    return {
        next: () => showSlide(index + 1),
        prev: () => showSlide(index - 1),
        goTo: i => showSlide(i),
        play: startAutoplay,
        pause: stopAutoplay,
        getIndex: () => index
    };
}