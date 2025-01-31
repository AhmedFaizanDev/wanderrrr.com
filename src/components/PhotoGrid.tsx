import PhotoCard from "./PhotoCard";

const photos = [
  {
    id: 1,
    imageUrl: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
    location: "Swiss Alps",
    photographer: "Sarah Wilson",
  },
  {
    id: 2,
    imageUrl: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
    location: "Yosemite Valley",
    photographer: "Michael Chen",
  },
  {
    id: 3,
    imageUrl: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
    location: "New Zealand",
    photographer: "Emma Thompson",
  },
  {
    id: 4,
    imageUrl: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
    location: "Canadian Rockies",
    photographer: "David Miller",
  },
  {
    id: 5,
    imageUrl: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
    location: "Bali, Indonesia",
    photographer: "Lisa Anderson",
  },
];

const PhotoGrid = () => {
  return (
    <div className="photo-grid">
      {photos.map((photo) => (
        <PhotoCard
          key={photo.id}
          imageUrl={photo.imageUrl}
          location={photo.location}
          photographer={photo.photographer}
        />
      ))}
    </div>
  );
};

export default PhotoGrid;