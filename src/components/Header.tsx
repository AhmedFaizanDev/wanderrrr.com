import { Camera, Globe, User, Search, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link to="/" className="flex items-center gap-3">
            <Camera className="w-7 h-7 text-primary" />
            <h1 className="font-display text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              wanderrrr.com
            </h1>
          </Link>
        </div>
        
        <div className="hidden md:flex items-center gap-8 flex-1 max-w-md mx-12">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search destinations..."
              className="w-full h-10 pl-10 pr-4 rounded-full bg-secondary/50 border-0 focus:ring-2 focus:ring-primary/20 focus-visible:outline-none"
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" className="hidden md:flex items-center gap-2">
            <Globe className="w-4 h-4" />
            Explore
          </Button>
          <Button variant="ghost" className="hidden md:flex items-center gap-2">
            <Camera className="w-4 h-4" />
            Upload
          </Button>
          <Link to="/shop">
            <Button variant="ghost" className="hidden md:flex items-center gap-2">
              <ShoppingBag className="w-4 h-4" />
              Shop
            </Button>
          </Link>
          <Button variant="default" className="flex items-center gap-2">
            <User className="w-4 h-4" />
            Sign In
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;