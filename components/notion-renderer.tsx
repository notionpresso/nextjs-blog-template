'use client'
import { Notion } from "@notionpresso/react";

export default function NotionRenderer({ post }: { post: { title: string, content: { blocks: any[] }, image?: string } }) {
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