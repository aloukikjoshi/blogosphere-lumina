
import { Post } from "@/data/blog-data";
import { Link } from "react-router-dom";
import { CategoryBadge } from "./CategoryBadge";
import { CalendarIcon, Clock } from "lucide-react";

type PostCardProps = {
  post: Post;
  featured?: boolean;
};

export function PostCard({ post, featured = false }: PostCardProps) {
  return (
    <article className={cn(
      "group overflow-hidden rounded-xl border bg-card text-card-foreground animate-fade-in hover-scale", 
      featured ? "col-span-2 md:col-span-2" : "col-span-2 md:col-span-1"
    )}>
      <Link to={`/post/${post.slug}`} className="block">
        <div className="aspect-video w-full overflow-hidden">
          <img 
            src={post.coverImage} 
            alt={post.title} 
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </Link>
      <div className="p-6">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
          <CategoryBadge category={post.category} />
          <div className="flex items-center">
            <CalendarIcon className="mr-1 h-3 w-3" />
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
              })}
            </time>
          </div>
          <div className="flex items-center">
            <Clock className="mr-1 h-3 w-3" />
            <span>{post.readTime} min read</span>
          </div>
        </div>
        <Link to={`/post/${post.slug}`} className="block">
          <h3 className="text-xl font-bold leading-tight md:text-2xl mb-3 line-clamp-2 font-serif">
            {post.title}
          </h3>
        </Link>
        <p className="line-clamp-3 text-muted-foreground mb-4">
          {post.excerpt}
        </p>
        <div className="flex items-center">
          <img
            src={post.author.image}
            alt={post.author.name}
            className="mr-2 h-8 w-8 rounded-full object-cover"
          />
          <span className="text-sm font-medium">{post.author.name}</span>
        </div>
      </div>
    </article>
  );
}

import { cn } from "@/lib/utils";
