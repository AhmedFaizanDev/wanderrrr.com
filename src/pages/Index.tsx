import Header from "@/components/Header";
import PhotoGrid from "@/components/PhotoGrid";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto py-12">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-display text-4xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            Discover Beautiful Places
          </h2>
          <p className="text-muted-foreground">
            Explore stunning destinations through the lens of our global community of travelers
          </p>
        </div>
        <PhotoGrid />
      </main>
    </div>
  );
};

export default Index;