import Image from 'next/image'
import { BlogPosts } from 'components/posts'

export default function Page() {
  return (
    <section>
      <div className="flex items-center mb-8">
        <Image
          src="/profile.png"
          alt="profile image"
          width={100}
          height={100}
          className="rounded-full mr-4"
        />
        <h1 className="text-2xl font-semibold tracking-tighter">
          My Portfolio
        </h1>
      </div>
      <p className="mb-4">
        {`Hello! This blog is created using `}
        <a 
          href="https://github.com/notionpresso" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 underline font-medium transition duration-300 ease-in-out"
        >
          Notionpresso
        </a>
        {`. I'm efficiently managing content by utilizing Notion as a CMS. 
        I'll be sharing stories about development, technology, and daily life. 
        Stay tuned and thanks for your interest!`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
