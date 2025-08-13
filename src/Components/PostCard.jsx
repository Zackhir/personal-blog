export default function PostCard({ post }) {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-48 object-cover"
        loading="lazy"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2 hover:text-blue-600 transition-colors cursor-pointer">
          {post.title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{post.description}</p>
        <time className="text-gray-400 text-sm">{post.date}</time>
      </div>
    </article>
  );
}
