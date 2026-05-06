import NavigationBar from '@/components/NavigationBar';
import Footer from '@/components/Footer';

const Designs = () => {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/be4cf1b4-8f33-43f9-9a0f-70d07b24659d.png" 
          alt="Purple gradient background" 
          className="w-full h-full object-cover opacity-70"
        />
      </div>
      
      {/* Navigation */}
      <NavigationBar />
      
      {/* Page content */}
      <div className="container mx-auto px-4 py-6 relative z-10 flex-grow">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-white mb-6">My Designs</h1>
          <p className="text-lg text-gray-300 mb-8">
            Coming soon! This page will showcase my design portfolio.
          </p>
          
          <div className="glass-card p-6 text-center">
            <p className="text-xl text-white mb-4">Design Portfolio Under Construction</p>
            <p className="text-gray-300">
              Check back soon to see my latest design work, including digital art, UI/UX projects, and graphic design.
            </p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Designs;
