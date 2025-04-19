
import { Link } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";
import { Search, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { useState } from "react";
import { categories } from "@/data/blog-data";

type LayoutProps = {
  children: React.ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="border-b sticky top-0 z-30 bg-background/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px]">
              <div className="py-4">
                <Link to="/" className="text-2xl font-bold font-serif">
                  Lumina
                </Link>
                <nav className="mt-8">
                  <ul className="space-y-2">
                    <li>
                      <Link
                        to="/"
                        className="block py-2 hover:text-primary transition-colors"
                      >
                        Home
                      </Link>
                    </li>
                    {categories.map((category) => (
                      <li key={category.id}>
                        <Link
                          to={`/category/${category.slug}`}
                          className="block py-2 hover:text-primary transition-colors"
                        >
                          {category.name}
                        </Link>
                      </li>
                    ))}
                    <li>
                      <Link
                        to="/about"
                        className="block py-2 hover:text-primary transition-colors"
                      >
                        About
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
          <Link to="/" className="text-2xl font-bold font-serif">
            Lumina
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-4">
          <Link to="/" className="font-medium hover:text-primary transition-colors">
            Home
          </Link>
          {categories.slice(0, 4).map((category) => (
            <Link
              key={category.id}
              to={`/category/${category.slug}`}
              className="font-medium hover:text-primary transition-colors"
            >
              {category.name}
            </Link>
          ))}
          <Link to="/about" className="font-medium hover:text-primary transition-colors">
            About
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          {isSearchOpen ? (
            <div className="relative animate-fade-in">
              <input 
                type="text" 
                placeholder="Search..." 
                className="w-full rounded-full border border-input bg-background px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                autoFocus
              />
              <Button 
                variant="ghost" 
                size="icon" 
                className="absolute right-1 top-1/2 -translate-y-1/2"
                onClick={() => setIsSearchOpen(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          ) : (
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsSearchOpen(true)}
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </Button>
          )}
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t py-6 md:py-8">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link to="/" className="text-xl font-bold font-serif">
              Lumina
            </Link>
            <p className="text-sm text-muted-foreground mt-1">
              Illuminating thoughts and ideas.
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
            <nav className="flex gap-4 md:gap-6">
              <Link to="/" className="text-sm hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-sm hover:text-primary transition-colors">
                About
              </Link>
              <Link to="/privacy" className="text-sm hover:text-primary transition-colors">
                Privacy
              </Link>
            </nav>
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Lumina. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
