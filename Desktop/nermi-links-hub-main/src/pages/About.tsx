import NavigationBar from '@/components/NavigationBar';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

const About = () => {
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
          <h1 className="text-3xl font-bold text-white mb-6">Who is Nermi?</h1>
          
          <div className="glass-card p-6 mb-8">
            <h2 className="text-xl font-bold text-white mb-4">About Me</h2>
            <p className="text-gray-300 mb-4">
              Hi, I'm Nermi – a creative professional passionate about storytelling, design, and bringing ideas to life. 
              I'm a multidisciplinary artist who loves exploring the intersection of visual design and narrative.
            </p>
            <p className="text-gray-300 mb-4">
              My work spans across various creative domains, including digital art, UI/UX design, and novel writing. 
              I believe in the power of visual communication and the transformative potential of storytelling.
            </p>
            <p className="text-gray-300">
              Currently, I'm working on developing my first novel and building a portfolio that showcases my design work. 
              Stay tuned as I continue to explore and share my creative journey.
            </p>
          </div>
          
          <div className="glass-card p-6 mb-8">
            <h2 className="text-xl font-bold text-white mb-4">Contact</h2>
            <p className="text-gray-300">
              Want to collaborate or just say hello? Feel free to reach out to me at nermi@studionermi.com.
            </p>
          </div>
        </div>
      </div>
      
      {/* Testimonials section */}
      <Testimonials />
      
      <Footer />
    </div>
  );
};

export default About;
