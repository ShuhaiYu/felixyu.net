import BlogList from "@/components/blog-list";
import { fetchPages } from "@/lib/notion";


export default async function Page() {
  const posts = await fetchPages();
  return (
    <div>
      <BlogList posts={posts} />
    </div>
  );
}
