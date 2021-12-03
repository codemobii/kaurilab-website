import React from "react";
import Head from "next/head";

import defaultImage from "../assets/templatehallBanner.png";

export default function SEO({
  title = "Your All-Inclusive Template Store",
  description = "Find all the templates you need to bring your projects to life for your client or business.",
  image = defaultImage,
}) {
  return (
    <Head>
      <title>Templatehall — {title}</title>
      <meta name="title" content={`Templatehall — ${title}`} />
      <meta name="description" content={description} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://templatehall.com/" />
      <meta property="og:title" content={`Templatehall — ${title}`} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://templatehall.com/" />
      <meta property="twitter:title" content={`Templatehall — ${title}`} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
    </Head>
  );
}
