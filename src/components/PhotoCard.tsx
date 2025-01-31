import { MapPin } from "lucide-react";

interface PhotoCardProps {
  imageUrl: string;
  location: string;
  photographer: string;
}

const PhotoCard = ({ imageUrl, location, photographer }: PhotoCardProps) => {
  return (
    <div className="photo-card group">
      <div className="relative">
        <img src={imageUrl} alt={location} className="transition-transform duration-300 group-hover:scale-105" />
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent text-white">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span className="text-sm font-medium">{location}</span>
          </div>
          <p className="text-xs mt-1 opacity-80">by {photographer}</p>
        </div>
      </div>
    </div>
  );
};

export default PhotoCard;