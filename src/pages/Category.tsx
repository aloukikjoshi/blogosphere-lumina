
import { useParams, Navigate } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { posts, categories } from "@/data/blog-data";
import { PostCard } from "@/components/PostCard";

const Category = () => {
  const { slug } = useParams<{ slug: string }>();
  const category = categories.find(c => c.slug === slug);
  
  if (!category) {
    return <Navigate to="/404" />;
  }
  
  // Get all posts for this category
  const categoryPosts = posts
    .filter(post => post.category === category.slug)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  
  return (
    <Layout>
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
              {category.name}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {category.description}
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {categoryPosts.map(post => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
          
          {categoryPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No posts found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Category;
