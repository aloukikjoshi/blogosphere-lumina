
import { Layout } from "@/components/Layout";
import { posts, categories } from "@/data/blog-data";
import { PostCard } from "@/components/PostCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  // Get featured posts
  const featuredPosts = posts.filter(post => post.featured);
  
  // Get recent posts (excluding featured)
  const recentPosts = posts
    .filter(post => !post.featured)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 6);

  return (
    <Layout>
      <section className="py-12 md:py-16">
        <div className="container">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center font-serif">
            Lumina
          </h1>
          <p className="text-lg text-center text-muted-foreground max-w-2xl mx-auto mb-12">
            Illuminating thoughts and ideas through beautifully crafted stories
            across technology, lifestyle, travel, food, and design.
          </p>
          
          {/* Featured Posts */}
          {featuredPosts.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-2 gap-6 mb-16">
              {featuredPosts.map(post => (
                <PostCard key={post.id} post={post} featured />
              ))}
            </div>
          )}
          
          {/* Category Navigation */}
          <div className="flex items-center justify-center flex-wrap gap-3 mb-12">
            {categories.map(category => (
              <Link key={category.id} to={`/category/${category.slug}`}>
                <Button variant="secondary" className="rounded-full">
                  {category.name}
                </Button>
              </Link>
            ))}
          </div>
          
          {/* Recent Posts */}
          <div>
            <h2 className="text-2xl font-bold mb-6 font-serif">Recent Articles</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {recentPosts.map(post => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
