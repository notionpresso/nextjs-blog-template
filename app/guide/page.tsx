import NotionRenderer from "components/notion-renderer";
import guide from "content/guide";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    absolute: guide.title,
  },
  description: guide.description,
  openGraph: {
    title: guide.title,
    description: guide.description,
    images: [
      {
        url: guide.image || '/profile.png',
        width: 800,
        height: 600,
        alt: `${guide.title} cover image`,
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: guide.title,
    description: guide.description,
    images: [guide.image || '/profile.png'],
  },
};

export default function Page() {
  return (
    <section>
      <NotionRenderer post={guide} />
    </section>
  )
}
