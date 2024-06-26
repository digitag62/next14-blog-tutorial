import { posts } from "#site/content";
import { PostItem } from "@/components/post-item";
import { QueryPagination } from "@/components/query-pagination";
import { sortPosts } from "@/lib/utils";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "My blog",
}

const POST_PER_PAGE = 4;

interface BlogProps {
  searchParams: {
    page?: string;
  };
}

const Blog = async ({ searchParams }: BlogProps) => {
  const currentPage = Number(searchParams?.page) || 1;
  const sortedPosts = sortPosts(posts.filter((post) => post.published));
  const totalPages = Math.ceil(sortedPosts.length / POST_PER_PAGE);

  const displayPosts = sortedPosts.slice(
    POST_PER_PAGE * (currentPage - 1),
    POST_PER_PAGE * currentPage
  );

  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-black text-4xl lg:text-5xl">Blog</h1>
          <p className="text-xl text-muted-foreground">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            nobis harum numquam aliquam reiciendis unde dolor commodi nulla?
            Repudiandae, enim!
          </p>
        </div>
      </div>
      <hr className="mt-8" />

      {displayPosts?.length > 0 ? (
        <ul className="flex flex-col">
          {displayPosts.map((post) => {
            const { slug, date, title, description } = post;
            return (
              <li key={slug}>
                <PostItem
                  slug={slug}
                  date={date}
                  title={title}
                  description={description}
                />
              </li>
            );
          })}
        </ul>
      ) : (
        <p>Nothing to see here yet.</p>
      )}

      <QueryPagination totalPages={totalPages} className="justify-end mt-4" />
    </div>
  );
};

export default Blog;
