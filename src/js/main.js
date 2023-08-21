import "../css/style.css";
import "./gallery.js";
import "./slider.js";
import { initNavigation } from "./navigation.js";
import AOS from "aos";
import "aos/dist/aos.css";

initNavigation();
AOS.init({
  disable: window.matchMedia("(prefers-reduced-motion: reduce)").matches,
});
