const navigationTrigger = document.querySelector("#navigation-trigger");
const navigation = document.querySelector("#navigation");
const searchToggler = document.querySelector("#search-toggler");
const searchForm = document.querySelector("#search-form");

const handlePressKey = (key, triggerKey, handler) => {
  if (key === triggerKey) {
    handler();
  }
};

const handleCloseMobiileMenuOnEscape = ({ key }) => {
  handlePressKey(key, "Escape", closeMobileNavigation);
};

const closeMobileNavigation = () => {
  navigationTrigger.setAttribute("aria-expanded", "false");
  navigationTrigger.setAttribute("aria-label", "Otwórz menu nawigacyjne");
  navigation.setAttribute("data-isopen", "false");
  navigation.classList.add("translate-x-full");
  document.body.classList.remove("overflow-hidden", "lg:overflow-y-auto");
  window.removeEventListener("keydown", handleCloseMobiileMenuOnEscape);
};

const openMobileNavigation = () => {
  navigationTrigger.setAttribute("aria-expanded", "true");
  navigationTrigger.setAttribute("aria-label", "Zamknij menu nawigacyjne");
  navigation.setAttribute("data-isopen", "true");
  navigation.classList.remove("translate-x-full");
  document.body.classList.add("overflow-hidden", "lg:overflow-y-auto");
  window.addEventListener("keydown", handleCloseMobiileMenuOnEscape);
};

export const initNavigation = () => {
  navigationTrigger.addEventListener("click", () => {
    const isNavigationOpen =
      navigationTrigger.getAttribute("aria-expanded") === "true";

    if (isNavigationOpen) {
      closeMobileNavigation();
    } else {
      openMobileNavigation();
    }
  });

  searchToggler.addEventListener("click", () => {
    searchForm.classList.toggle("lg:w-80");
    searchForm.classList.toggle("lg:w-0");
    searchToggler.getAttribute("aria-expanded") === "false"
      ? searchToggler.setAttribute("aria-expanded", "true")
      : searchToggler.setAttribute("aria-expanded", "false");
    searchToggler.toggleAttribute("data-isopen");
  });
};
