import { getAllBlogs } from "~/actions/posts";
import { Blogs } from "~/components/blog-card";


export default async function Page() {

    const posts = await getAllBlogs();

    return (
    <section>
        <h1 className='font-bold text-[2rem] mb-5'>Explore</h1>
        <div className="grid grid-cols-1 md:grid-cols-3">
            {posts.post?.map((ele) => (
                <Blogs explore key={ele.id} posts={ele} />
            ))}
        </div>
    </section>
    )
}