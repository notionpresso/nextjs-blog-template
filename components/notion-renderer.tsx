'use client'
import { Notion } from "@notionpresso/react";
import type { Post } from "content/posts";

export default function NotionRenderer({ post }: { post: Post }) {
  return (
    <Notion>
      <Notion.Cover src={post.image} />
      <Notion.Body>
        <Notion.Title title={post.title} />
        <Notion.Blocks blocks={post.content.blocks} />
      </Notion.Body>
    </Notion>
  )
}