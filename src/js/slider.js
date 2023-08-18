(() => {
  const sliders = document.querySelectorAll("[data-slider]");

  sliders.forEach((slider) => {
    const sliderTrack = slider.querySelector("[data-slider-track]");
    const prevBtn = slider.querySelector("[data-slider-prev]");
    const nextBtn = slider.querySelector("[data-slider-next]");
    const slides = slider.querySelectorAll("[data-slide]");
    const sliderNavigation = slider.querySelector("[data-slider-navigation");

    if (slides.length === 1) {
      sliderNavigation.remove();
    }

    sliderTrack.scrollTo(0, 0);
    let currentSlide = 0;

    const setAriaSelected = (slideNumber) => {
      slides.forEach((slide) => slide.setAttribute("aria-selected", "false"));
      slides[slideNumber].setAttribute("aria-selected", "true");
    };

    nextBtn.addEventListener("click", () => {
      if (currentSlide === slides.length - 1) {
        sliderTrack.scrollTo(0, 0);
        currentSlide = 0;
        setAriaSelected(currentSlide);
        return;
      }

      if (currentSlide < slides.length - 1) {
        sliderTrack.scrollTo(slides[currentSlide + 1].offsetLeft, 0);
        currentSlide += 1;
        setAriaSelected(currentSlide);
      }
    });

    prevBtn.addEventListener("click", () => {
      if (currentSlide === 0) {
        sliderTrack.scrollTo(slides[slides.length - 1].offsetLeft, 0);
        currentSlide = slides.length - 1;
        setAriaSelected(currentSlide);
        return;
      }

      sliderTrack.scrollTo(slides[currentSlide - 1].offsetLeft, 0);
      currentSlide -= 1;
      setAriaSelected(currentSlide);
    });
  });
})();
