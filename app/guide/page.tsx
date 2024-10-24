import NotionRenderer from "components/notion-renderer";
import guide from "content/guide";

export default function Page() {
  return (
    <section>
      <NotionRenderer post={guide} />
    </section>
  )
}