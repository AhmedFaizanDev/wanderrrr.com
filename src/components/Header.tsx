import { Camera, Globe, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Camera className="w-6 h-6 text-accent" />
          <h1 className="font-display text-xl font-semibold">Wanderlens</h1>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <Button variant="ghost" className="flex items-center gap-2">
            <Globe className="w-4 h-4" />
            Explore
          </Button>
          <Button variant="ghost" className="flex items-center gap-2">
            <Camera className="w-4 h-4" />
            Upload
          </Button>
        </nav>

        <Button variant="outline" className="flex items-center gap-2">
          <User className="w-4 h-4" />
          Sign In
        </Button>
      </div>
    </header>
  );
};

export default Header;