
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from '@/components/Footer';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      <div className="bg-nermi-dark absolute inset-0 z-0"></div>
      
      <div className="flex-grow flex items-center justify-center z-10">
        <div className="text-center glass-card p-8">
          <h1 className="text-4xl font-bold mb-4 text-white">404</h1>
          <p className="text-xl text-gray-300 mb-4">Oops! Page not found</p>
          <div className="flex flex-col gap-2">
            <Link to="/" className="text-nermi-purple hover:text-white underline">
              Return to Home
            </Link>
            <Link to="/novel" className="text-nermi-purple hover:text-white underline">
              Go to Novel Page
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
