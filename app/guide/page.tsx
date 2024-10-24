import NotionRenderer from "components/notion-renderer";
import guide from "content/guide";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: guide.title,
  description: guide.description,
};

export default function Page() {
  return (
    <section>
      <NotionRenderer post={guide} />
    </section>
  )
}
