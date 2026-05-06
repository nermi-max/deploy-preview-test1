
import { useState } from 'react';
import { BookOpen } from 'lucide-react';
import NavigationBar from '@/components/NavigationBar';
import Footer from '@/components/Footer';
import { novelContent } from '@/content/novel';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

const Novel = () => {
  // Split the text into paragraphs
  const paragraphs = novelContent.text.split('\n\n');
  
  // Pagination settings
  const paragraphsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const [idea, setIdea] = useState("");
  const [loading, setLoading] = useState(false);

  // Calculate total pages
  const totalPages = Math.ceil(paragraphs.length / paragraphsPerPage);
  
  // Get current paragraphs
  const indexOfLastParagraph = currentPage * paragraphsPerPage;
  const indexOfFirstParagraph = indexOfLastParagraph - paragraphsPerPage;
  const currentParagraphs = paragraphs.slice(indexOfFirstParagraph, indexOfLastParagraph);
  
  // Handle page changes
  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      // Scroll to top of content when changing pages
      document.getElementById('novel-content')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const generateStory = async () => {
    console.log("CLICKED");
    setLoading(true);
    try {
      const res = await fetch("https://novel-backend-1-93dx.onrender.com/generate-pdf", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          idea: idea,
          tone: "dark psychological",
          character: "Elena",
          setting: "apartment",
          length: "medium"
        })
      });
      console.log("STATUS:", res.status);
      if (!res.ok) {
        const text = await res.text();
        console.error("BACKEND ERROR:", text);
        alert("Backend error: " + text);
        return;
      }
      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "story.pdf";
      a.click();
    } catch (err) {
      console.error("FETCH ERROR:", err);
      alert("Network error");
    }
    setLoading(false);
  };

  const handleCheckout = async () => {
    try {
      localStorage.setItem("idea", idea);
      const res = await fetch(
        "https://novel-backend-1-93dx.onrender.com/create-checkout-session",
        { method: "POST" }
      );
      const data = await res.json();
      window.location.href = data.url;
    } catch (err) {
      console.error(err);
      alert("Payment failed to start");
    }
  };

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0 bg-nermi-dark">
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
          <h1 className="text-4xl font-literary text-white mb-6">Amidza</h1>
          <p className="text-lg text-[#9F9EA1] mb-8">
            Information about my upcoming novel will be posted here.
          </p>

          <div className="mb-6">
            <textarea
              className="w-full p-3 rounded bg-black text-white border border-gray-600"
              placeholder="Enter your story idea..."
              value={idea}
              onChange={(e) => setIdea(e.target.value)}
            />
            <button
              onClick={generateStory}
              className="mt-3 px-6 py-2 bg-purple-600 text-white rounded"
            >
              {loading ? "Generating..." : "Generate Story"}
            </button>
            <button
              onClick={handleCheckout}
              className="mt-3 ml-3 px-6 py-2 bg-green-600 text-white rounded"
            >
              Buy Now
            </button>
          </div>
          
          <div id="novel-content" className="glass-card p-6">
            <div className="flex items-center justify-center mb-6">
              <BookOpen className="w-12 h-12 text-nermi-purple" />
            </div>
            <h2 className="text-5xl font-cursive font-bold text-white mb-4 text-center">{novelContent.title}</h2>
            <p className="text-gray-300 text-sm italic text-center mb-4">{novelContent.subtitle}</p>
            
            <div className="text-[#C8C8C9] space-y-4 min-h-[300px]">
              {currentParagraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            
            {/* Pagination */}
            <div className="mt-8">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious 
                      onClick={() => goToPage(currentPage - 1)}
                      className={currentPage === 1 ? 'pointer-events-none opacity-50' : 'cursor-pointer text-white hover:bg-nermi-purple/20'}
                    />
                  </PaginationItem>
                  
                  {Array.from({ length: totalPages }).map((_, index) => (
                    <PaginationItem key={index}>
                      <PaginationLink
                        onClick={() => goToPage(index + 1)}
                        isActive={currentPage === index + 1}
                        className="cursor-pointer text-white hover:bg-nermi-purple/20"
                      >
                        {index + 1}
                      </PaginationLink>
                    </PaginationItem>
                  ))}
                  
                  <PaginationItem>
                    <PaginationNext 
                      onClick={() => goToPage(currentPage + 1)}
                      className={currentPage === totalPages ? 'pointer-events-none opacity-50' : 'cursor-pointer text-white hover:bg-nermi-purple/20'}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
              
              <p className="text-center text-sm text-gray-400 mt-2">
                Page {currentPage} of {totalPages}
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Novel;
