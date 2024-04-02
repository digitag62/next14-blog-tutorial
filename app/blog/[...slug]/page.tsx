import { posts } from "#site/content";
import { MDXComponents } from "@/components/mdx-components";
import { notFound } from "next/navigation";

interface PostPageProps {
	params: {
		slug: string[];
	};
}

const getPostFromParams = async (params: PostPageProps["params"]) => {
	const slug = params?.slug?.join("/");
	const post = posts.find((post) => post.slugAsParams === slug);

	return post;
};

export const generateStaticParams = async (): Promise<PostPageProps["params"][]> => {
	return posts.map((post) => ({ slug: post.slugAsParams.split("/") }));
};

const PostPage = async ({ params }: PostPageProps) => {
	const post = await getPostFromParams(params);
	if (!post || !post.published) notFound();

	return (
		<article className="container py-6 prose dark:prose-invert max-w-3xl mx-auto">
			<h1 className="mb-2">{post.title}</h1>
			{post.description ? <p className="text-xl mt-0 text-muted-foreground">{post.description}</p> : null}
			<hr className="my-4" />

			<MDXComponents code={post.body} />
		</article>
	);
};

export default PostPage;