import { useState, useEffect } from "react";
import axios from "axios";
import Filters from "./Components/Filters";
import PostsSection from "./Components/PostsSection";
import Pagination from "./Components/Pagination";

const CATEGORIES = ["All", "Tech", "Travel", "Food"];

function assignRandomCategory(posts) {
  return posts.map((post) => ({
    ...post,
    category: CATEGORIES[Math.floor(Math.random() * (CATEGORIES.length - 1)) + 1],
    date: new Date(Date.now() - Math.random() * 10000000000).toLocaleDateString(),
    image: `https://picsum.photos/seed/${post.id}/600/400`,
    description: post.body,
  }));
}

export default function App() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const POSTS_PER_PAGE = 6;

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts?_limit=30")
      .then((res) => {
        setPosts(assignRandomCategory(res.data));
      })
      .catch(console.error);
  }, []);

  // Filtering logic
  const filteredByCategory =
    category === "All" ? posts : posts.filter((post) => post.category === category);
  const filteredPosts = filteredByCategory.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  // Pagination
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-12 font-sans text-gray-900">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-center text-indigo-600">
        My Personal Blog
      </h1>
      <Filters
        search={search}
        onSearchChange={(e) => {
          setSearch(e.target.value);
          setCurrentPage(1);
        }}
        category={category}
        onCategoryChange={(cat) => {
          setCategory(cat);
          setCurrentPage(1);
        }}
        categories={CATEGORIES}
      />
      <PostsSection posts={paginatedPosts} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
