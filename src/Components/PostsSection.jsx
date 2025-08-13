import PostCard from "./PostCard";

export default function PostsSection({ posts }) {
  if (posts.length === 0) {
    return (
      <p className="text-center text-gray-500 mt-20 text-lg font-semibold">
        No posts found.
      </p>
    );
  }

  return (
    <section className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </section>
  );
}
