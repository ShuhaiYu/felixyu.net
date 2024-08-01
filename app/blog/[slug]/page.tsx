/* eslint-disable prettier/prettier */
import { fetchBySlug, fetchPageBlocks, notion } from "@/lib/notion";
import { NotionRenderer } from "@notion-render/client";
import hljsPlugin from "@notion-render/hljs-plugin";
import bookmarkPulgins from "@notion-render/bookmark-plugin";
import BlogPage from "@/components/blog-page";

export default async function Page(context: { params: { slug: string } }) {
  const slug = context.params.slug as string;
  const post = await fetchBySlug(slug);
  // console.log(post);
  if (!post) {
    return <div>Post not found</div>;
  }

  const blocks = await fetchPageBlocks(post.id);
  console.log(blocks);
  const renderer = new NotionRenderer({
    client: notion,
  });

  // renderer.use(hljsPlugin({}));
  // renderer.use(bookmarkPulgins(undefined));

  const html = await renderer.render(...blocks);

  return (
    <BlogPage html={html} />
  );
}
