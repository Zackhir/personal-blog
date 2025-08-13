export default function PostsSection({ posts }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <div
          key={post.id}
          className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden"
        >
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-48 object-cover"
            onError={(e) => {
              e.currentTarget.src = "https://placehold.co/600x400?text=Image";
            }}
          />
          <div className="p-4">
            <h3 className="font-bold text-lg mb-2">{post.title}</h3>
            <p className="text-gray-700 text-sm mb-2">{post.description}</p>
            <p className="text-gray-400 text-xs">{post.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
