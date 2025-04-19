
import { useParams, Navigate } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { posts, comments } from "@/data/blog-data";
import { CalendarIcon, Clock, User } from "lucide-react";
import { CategoryBadge } from "@/components/CategoryBadge";
import { CommentSection } from "@/components/CommentSection";
import { PostCard } from "@/components/PostCard";

const Post = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = posts.find(p => p.slug === slug);
  
  if (!post) {
    return <Navigate to="/404" />;
  }
  
  // Get related posts (same category, excluding current)
  const relatedPosts = posts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 3);
  
  // Get post comments
  const postComments = comments.filter(c => c.postId === post.id);
  
  return (
    <Layout>
      <article className="py-10 md:py-16">
        <div className="container max-w-4xl">
          <div className="text-center mb-8">
            <CategoryBadge category={post.category} className="mb-3" />
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 font-serif">
              {post.title}
            </h1>
            
            <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground mb-6">
              <div className="flex items-center">
                <User className="mr-1 h-4 w-4" />
                <span>{post.author.name}</span>
              </div>
              <div className="flex items-center">
                <CalendarIcon className="mr-1 h-4 w-4" />
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
              </div>
              <div className="flex items-center">
                <Clock className="mr-1 h-4 w-4" />
                <span>{post.readTime} min read</span>
              </div>
            </div>
          </div>
          
          <div className="aspect-video w-full overflow-hidden rounded-xl mb-10">
            <img 
              src={post.coverImage} 
              alt={post.title} 
              className="h-full w-full object-cover"
            />
          </div>
          
          <div 
            className="prose prose-lg dark:prose-invert max-w-none mb-12" 
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          
          <div className="flex items-center gap-4 border-t border-b py-6 my-8">
            <img
              src={post.author.image}
              alt={post.author.name}
              className="h-16 w-16 rounded-full object-cover"
            />
            <div>
              <h3 className="text-lg font-medium mb-1">{post.author.name}</h3>
              <p className="text-muted-foreground">Writer and content creator passionate about {post.category} and related topics.</p>
            </div>
          </div>
          
          {/* Comments Section */}
          <CommentSection postId={post.id} comments={postComments} />
        </div>
      </article>
      
      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-12 border-t">
          <div className="container">
            <h2 className="text-2xl font-bold mb-6 font-serif">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map(post => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
};

export default Post;
