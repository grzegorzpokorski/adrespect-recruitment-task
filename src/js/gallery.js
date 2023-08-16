import "fslightbox";

const bricksContainer = document.querySelector("#bricks-container");
const bricksContainerReleaseBtn = document.querySelector(
  "#bricks-container-release",
);
const bricksContainerOverlay = document.querySelector(
  "#bricks-container-overlay",
);

bricksContainerReleaseBtn.addEventListener("click", () => {
  bricksContainer.classList.remove("lg:max-h-[1500px]");
  bricksContainer.classList.add("lg:max-h-full");
  bricksContainerOverlay.classList.add("opacity-0");
  setTimeout(() => {
    bricksContainerOverlay.remove();
  }, 500);
});
