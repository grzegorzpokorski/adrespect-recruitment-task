import "fslightbox";
import Macy from "macy";

(() => {
  const bricksContainer = document.querySelector("#bricks-container");
  const bricksContainerReleaseBtn = document.querySelector(
    "#bricks-container-release",
  );
  const bricksContainerOverlay = document.querySelector(
    "#bricks-container-overlay",
  );

  bricksContainerReleaseBtn.addEventListener("click", () => {
    bricksContainer.classList.remove("max-h-[1000px]");
    bricksContainer.classList.add("max-h-[99999px]");
    bricksContainerOverlay.classList.remove("opacity-100");
    bricksContainerOverlay.classList.add("opacity-0");

    setTimeout(() => {
      bricksContainerOverlay.remove();
      bricksContainer.classList.remove("max-h-[99999px]");
    }, 2000);
  });

  const macyInstance = Macy({
    container: ".macy",
    mobileFirst: true,
    columns: 1,
    breakAt: {
      768: 2,
      1040: 3,
    },
    margin: {
      x: 42,
      y: 42,
    },
  });
})();
