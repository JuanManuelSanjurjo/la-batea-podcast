import { LAST_EPISODE, PODCAST_SHOW } from "../consts";

export default function Player() {
  return (
    <iframe
      src={LAST_EPISODE}
      width="100%"
      height="352"
      frameBorder="0"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    ></iframe>
  );
}
