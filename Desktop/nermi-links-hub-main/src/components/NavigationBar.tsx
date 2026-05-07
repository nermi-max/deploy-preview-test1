
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Palette, BookOpen, IdCard, Home } from 'lucide-react';

const NavigationBar = () => {
  const location = useLocation();
  
  return (
    <nav className="fixed top-0 left-0 right-0 w-full py-4 z-50 backdrop-blur-md bg-black/40 border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold"><span className="text-white">studio</span><span className="text-white/60">nermi</span></span>
          </Link>
          
          <div className="flex space-x-2">
            <Button 
              variant="ghost" 
              size="sm" 
              asChild 
              className={`text-white ${location.pathname === '/' ? 'bg-white/20' : ''}`}
            >
              <Link to="/" className="flex items-center gap-2">
                <Home className="w-4 h-4" />
                Home
              </Link>
            </Button>
            
            <Button 
              variant="ghost" 
              size="sm" 
              asChild 
              className={`text-white ${location.pathname === '/designs' ? 'bg-white/20' : ''}`}
            >
              <Link to="/designs" className="flex items-center gap-2">
                <Palette className="w-4 h-4" />
                Designs
              </Link>
            </Button>
            
            <Button 
              variant="ghost" 
              size="sm" 
              asChild 
              className={`text-white ${location.pathname === '/novel' ? 'bg-white/20' : ''}`}
            >
              <Link to="/novel" className="flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                Novel
              </Link>
            </Button>
            
            <Button 
              variant="ghost" 
              size="sm" 
              asChild 
              className={`text-white ${location.pathname === '/about' ? 'bg-white/20' : ''}`}
            >
              <Link to="/about" className="flex items-center gap-2">
                <IdCard className="w-4 h-4" />
                Who is Nermi?
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
