import webfontDownload from "vite-plugin-webfont-dl";

export default {
  plugins: [
    webfontDownload([
      "https://fonts.googleapis.com/css2?family=Inter:wght@400;500",
      "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&display=swap",
    ]),
  ],
};
