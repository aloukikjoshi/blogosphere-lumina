
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

type CategoryBadgeProps = {
  category: string;
  className?: string;
  withLink?: boolean;
};

export function CategoryBadge({ category, className, withLink = true }: CategoryBadgeProps) {
  const categoryStyles: Record<string, string> = {
    technology: "bg-category-technology/10 text-category-technology hover:bg-category-technology/20",
    lifestyle: "bg-category-lifestyle/10 text-category-lifestyle hover:bg-category-lifestyle/20",
    travel: "bg-category-travel/10 text-category-travel hover:bg-category-travel/20",
    food: "bg-category-food/10 text-category-food hover:bg-category-food/20",
    design: "bg-category-design/10 text-category-design hover:bg-category-design/20",
  };

  const badge = (
    <span
      className={cn(
        "category-badge",
        categoryStyles[category.toLowerCase()] || "bg-muted text-muted-foreground",
        className
      )}
    >
      {category.charAt(0).toUpperCase() + category.slice(1)}
    </span>
  );

  if (withLink) {
    return <Link to={`/category/${category.toLowerCase()}`}>{badge}</Link>;
  }

  return badge;
}
