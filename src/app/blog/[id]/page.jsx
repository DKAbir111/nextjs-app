import GoBack from "@/app/components/GoBack";


async function fetchPosts(id) {
    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const data = await res.json();
        return data;
    } catch (err) {
        console.error("Error fetching post:", err);
        return null;
    }
}
export async function generateMetadata({ params }) {
    const { id } = await params


    const post = await fetchPosts(id);


    return {
        title: post.title,
        description: post.body
    }
}

export default async function BlogDetails({ params }) {
    const { id } = params;

    const post = await fetchPosts(id);

    if (!post) {
        return <p className="text-center text-red-500">Failed to load post</p>;
    }


    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div className="card card-dash w-96 bg-purple-100">
                <div className="card-body">
                    <h2 className="card-title">{post.title}</h2>
                    <p>{post.body}</p>
                    <div className="card-actions justify-end">
                        <GoBack />
                    </div>
                </div>
            </div>
        </div>
    );
}
