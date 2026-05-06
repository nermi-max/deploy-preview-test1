
import { useState, useEffect } from 'react';
import LinkCard from '@/components/LinkCard';
import NavigationBar from '@/components/NavigationBar';
import Footer from '@/components/Footer';
import { Palette, BookOpen, IdCard } from 'lucide-react';

const Index = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen flex flex-col items-center relative overflow-hidden">
      <div className="absolute inset-0 z-0 bg-nermi-dark">
        <img 
          src="/lovable-uploads/be4cf1b4-8f33-43f9-9a0f-70d07b24659d.png" 
          alt="Purple gradient background" 
          className="w-full h-full object-cover opacity-70"
        />
      </div>
      
      <NavigationBar />
      
      <div className="container max-w-md mx-auto px-4 py-16 relative z-10 flex-grow flex flex-col justify-center">
        <div className="text-center mb-8 animate-float">
          <h1 className="text-3xl font-bold mb-2"><span className="text-white">studio</span><span className="text-white/60">nermi</span></h1>
          <p className="text-md italic text-gray-300 mb-6">
            "My last time that I entered the House was when I visited my amidza, who still lived there permanently."
            <span className="block text-xs mt-1">― Amidza (The Uncle)</span>
          </p>
          
          <div className="space-y-4">
            <LinkCard 
              href="/designs" 
              label="Designs" 
              icon={<Palette className="w-5 h-5" />} 
              className="bg-gradient-to-r from-purple-600/30 to-purple-800/30"
            />
            
            <LinkCard 
              href="/novel" 
              label="My Novel" 
              icon={<BookOpen className="w-5 h-5" />}
              className="bg-gradient-to-r from-indigo-600/30 to-indigo-800/30" 
            />
            
            <LinkCard 
              href="/about" 
              label="Who is Nermi?" 
              icon={<IdCard className="w-5 h-5" />}
              className="bg-gradient-to-r from-blue-600/30 to-blue-800/30" 
            />
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-sm text-gray-400">© {new Date().getFullYear()} studionermi</p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
