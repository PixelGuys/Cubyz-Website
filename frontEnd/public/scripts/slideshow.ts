export type SliderImage = {
  src: string;
  alt?: string;
  link?: string;
  name?: string;
};

export type SliderOptions = {
  startIndex?: number;
  animationClass?: string;
  autoplay?: boolean;
  autoplayDelay?: number;
  pauseOnHover?: boolean;
};

export function simpleSlider(
  slider: HTMLElement | string,
  imagesList: SliderImage[],
  options: SliderOptions = {}
) {
  const el =
    typeof slider === "string"
      ? document.querySelector<HTMLElement>(slider)
      : slider;

  if (!el || !Array.isArray(imagesList) || imagesList.length === 0) {
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

  const track = el.querySelector<HTMLElement>(".hcg-slider-track");
  const dotsContainer = el.querySelector<HTMLElement>(".hcg-slide-dot-control");
  const prevBtn = el.querySelector<HTMLAnchorElement>("#hcg-slide-prev");
  const nextBtn = el.querySelector<HTMLAnchorElement>("#hcg-slide-next");

  if (!track || !dotsContainer || !prevBtn || !nextBtn) {
    console.warn("simpleSlider: Missing required DOM structure.");
    return null;
  }

  let index = startIndex;
  const total = imagesList.length;
  let autoplayTimer: ReturnType<typeof setInterval> | null = null;

  track.innerHTML = imagesList
    .map(
      (img) => `
      <a ${img.link ? `href="${img.link}" target="_blank"` : ""} class="hcg-slides ${animationClass}">
        <img src="${img.src}" alt="${img.alt || ""}">
        <span class="hcg-slide-text">${img.name || ""}</span>
      </a>
    `
    )
    .join("");

  dotsContainer.innerHTML = imagesList
    .map((_, i) => `<a href="#" class="hcg-slide-dot" data-id="${i}"></a>`)
    .join("");

  const slides = el.querySelectorAll<HTMLElement>(".hcg-slides");
  const dots = el.querySelectorAll<HTMLElement>(".hcg-slide-dot");

  const showSlide = (i: number) => {
    index = (i + total) % total;

    slides.forEach((slide, idx) => {
      slide.style.display = idx === index ? "flex" : "none";
    });

    dots.forEach((dot, idx) => {
      dot.classList.toggle("dot-active", idx === index);
    });
  };

  const startAutoplay = () => {
    if (!autoplay || autoplayTimer) return;
    autoplayTimer = setInterval(() => showSlide(index + 1), autoplayDelay);
  };

  const stopAutoplay = () => {
    if (autoplayTimer) clearInterval(autoplayTimer);
    autoplayTimer = null;
  };

  prevBtn.addEventListener("click", (e) => {
    e.preventDefault();
    showSlide(index - 1);
  });

  nextBtn.addEventListener("click", (e) => {
    e.preventDefault();
    showSlide(index + 1);
  });

  dotsContainer.addEventListener("click", (e) => {
    const dot = (e.target as HTMLElement).closest(".hcg-slide-dot") as HTMLElement | null;
    if (!dot) return;
    e.preventDefault();
    showSlide(Number(dot.dataset.id));
  });

  if (pauseOnHover && autoplay) {
    el.addEventListener("mouseenter", stopAutoplay);
    el.addEventListener("mouseleave", startAutoplay);
  }

  showSlide(index);
  startAutoplay();

  return {
    next: () => showSlide(index + 1),
    prev: () => showSlide(index - 1),
    goTo: (i: number) => showSlide(i),
    play: startAutoplay,
    pause: stopAutoplay,
    getIndex: () => index
  };
}