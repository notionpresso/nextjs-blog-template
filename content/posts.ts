import post1 from '../notion-data/126ce18c-fd83-80ab-9d97-d350670aeb53.json'
import post2 from '../notion-data/126ce18c-fd83-80ab-9d97-d350670aeb53.json'

const posts = [
  {
    title: "My First Post",
    slug: "my-first-post",
    content: post1,
    date: "2021-01-01",
    description: "This is the description of my first post.",
    image: undefined
  },
  {
    title: "My Second Post",
    slug: "my-second-post",
    content: post2,
    date: "2021-01-02",
    description: "This is the description of my second post.",
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