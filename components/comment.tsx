'use client'
import Giscus from "@giscus/react";

export default function Comment() {
  return (
    <Giscus
      id="comments"
      repo="notionpresso/nextjs-blog-template"
      repoId="R_kgDONDy8gg"
      category="Announcements"
      categoryId="DIC_kwDONDy8gs4CjpSV"
      mapping="pathname"
      strict="0"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="bottom"
      theme="preferred_color_scheme"
      lang="ko"
      loading="lazy"
    />
  )
}
