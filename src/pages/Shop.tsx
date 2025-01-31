import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Camera, Heart, ShoppingBag } from "lucide-react";

const Shop = () => {
  const products = [
    {
      id: 1,
      title: "Travel Photography Guide",
      price: 29.99,
      image: "/placeholder.svg",
      description: "Master the art of travel photography with our comprehensive guide"
    },
    {
      id: 2,
      title: "Camera Backpack",
      price: 89.99,
      image: "/placeholder.svg",
      description: "Durable and waterproof backpack for your photography gear"
    },
    {
      id: 3,
      title: "Travel Tripod",
      price: 149.99,
      image: "/placeholder.svg",
      description: "Lightweight and compact tripod perfect for travelers"
    },
    {
      id: 4,
      title: "Photo Editing Presets",
      price: 19.99,
      image: "/placeholder.svg",
      description: "Professional presets for stunning travel photos"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto py-12">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-display text-4xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            Explore Our Shop
          </h2>
          <p className="text-muted-foreground">
            Discover essential gear and resources for your photography journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="group bg-card rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="relative aspect-square">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Heart className="w-5 h-5" />
                </Button>
              </div>
              <div className="p-4">
                <h3 className="font-display text-lg font-medium mb-2">{product.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold">${product.price}</span>
                  <Button size="sm" className="flex items-center gap-2">
                    <ShoppingBag className="w-4 h-4" />
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Shop;