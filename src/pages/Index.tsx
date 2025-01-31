import Header from "@/components/Header";
import PhotoGrid from "@/components/PhotoGrid";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto py-8">
        <h2 className="font-display text-3xl font-semibold text-center mb-8">
          Discover Beautiful Places
        </h2>
        <PhotoGrid />
      </main>
    </div>
  );
};

export default Index;