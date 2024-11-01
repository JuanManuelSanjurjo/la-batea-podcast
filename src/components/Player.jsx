import { useEffect } from "react";

export default function Player() {
  useEffect(() => {
    const iframe = document.querySelector("iframe.spotify");

    // Check if there is a saved state in localStorage
    const savedSrc = localStorage.getItem("spotifySrc");
    if (savedSrc) iframe.src = savedSrc;

    // Update storage whenever the src changes
    iframe.addEventListener("load", () => {
      localStorage.setItem("spotifySrc", iframe.src);
    });
  }, []);

  return (
    <iframe
      style={{
        position: "fixed",
        bottom: "20px",
        width: "98%",
        maxWidth: "700px",
        left: "50%",
        transform: "translateX(-50%)",
      }}
      className="spotify"
      src="https://open.spotify.com/embed/show/0kQpgiacriTrYFQO5DASol?utm_source=generator"
      height="80"
      frameBorder="0"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
    ></iframe>
  );
}
