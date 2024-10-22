import post1 from '../notion-data/126ce18c-fd83-8023-9ad1-d0e1809b21c3.json'
import post2 from '../notion-data/126ce18c-fd83-80ab-9d97-d350670aeb53.json'

const posts = [
  {
    title: "Maximizing the Benefits of BFF Pattern in API Design",
    slug: "api-design-in-bff",
    content: post1,
    date: "2023-10-22",
    description: "Exploring the shift from domain-centric to data-centric API endpoints after introducing BFF. This article introduces BFF and DDD concepts, then proposes API endpoint design strategies in the context of the BFF pattern.",
    image: undefined
  },
  {
    title: "How Far Can You Go with Storybook?",
    slug: "best-practices-for-storybook",
    content: post2,
    date: "2023-10-22",
    description: "Explore how full-page development with Storybook enhances frontend development. Discover the benefits of streamlined development through mock APIs, improved collaboration via quick feedback, and simplified A/B testing through easy comparison of design iterations.",
    image: undefined
  }
] as Post[];

export default posts;

export type Post = {
  title: string;
  slug: string;
  content: { blocks: any[] };
  date: string;
  description: string;
  image?: string;
};
