import { MapPin, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PhotoCardProps {
  imageUrl: string;
  location: string;
  photographer: string;
}

const PhotoCard = ({ imageUrl, location, photographer }: PhotoCardProps) => {
  return (
    <div className="photo-card group">
      <div className="relative overflow-hidden rounded-xl">
        <img 
          src={imageUrl} 
          alt={location} 
          className="transition-transform duration-500 group-hover:scale-105" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-4 right-4">
          <Button 
            size="icon" 
            variant="secondary" 
            className="rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <Heart className="w-4 h-4" />
          </Button>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <div className="flex items-center gap-2 mb-2">
            <MapPin className="w-4 h-4" />
            <span className="font-medium">{location}</span>
          </div>
          <p className="text-sm text-white/80">by {photographer}</p>
        </div>
      </div>
    </div>
  );
};

export default PhotoCard;