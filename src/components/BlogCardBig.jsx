import { Image } from "astro:assets";
import FormattedDate from "./FormattedDate.astro";

export default function BlogCardBig({ post }) {
  return (
    <li>
      <a href={`/blog/${post.slug}/`}>
        <Image
          className="hero-image"
          width={720}
          height={360}
          src={post.data.heroImage}
          alt=""
        />
        <h4 class="title">{post.data.title}</h4>
        <p class="date">
          <FormattedDate date={post.data.pubDate} />
        </p>
      </a>
    </li>
  );
}
