
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar } from '@/components/ui/avatar';
import { User, Quote } from 'lucide-react';

// Testimonial data
const testimonials = [
  {
    id: 1,
    name: "Sophia Chen",
    role: "Art Director",
    content: "Working with Nermi was an absolute pleasure. Their creative vision and meticulous attention to detail transformed our project into something truly special.",
    avatar: null
  },
  {
    id: 2,
    name: "Marcus Johnson",
    role: "Author",
    content: "Nermi has a unique ability to capture emotion through design. The cover art they created for my novel perfectly embodied the essence of my story.",
    avatar: null
  },
  {
    id: 3,
    name: "Elena Rivera",
    role: "Brand Strategist",
    content: "I was blown away by Nermi's ability to translate abstract concepts into visual identity. Their designs helped our brand stand out in a crowded market.",
    avatar: null
  },
  {
    id: 4,
    name: "David Park",
    role: "Game Developer",
    content: "The character designs Nermi created for our indie game were exceptional. They brought our world to life in ways we couldn't have imagined.",
    avatar: null
  }
];

const Testimonials = () => {
  return (
    <div className="py-12 bg-nermi-dark/80">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-nermi-light text-center mb-8">
          What People Say About My Work
        </h2>
        
        <Carousel className="w-full max-w-6xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="sm:basis-1/2 md:basis-1/3 p-1">
                <Card className="bg-nermi-dark/90 border-nermi-purple/40 h-full">
                  <CardContent className="flex flex-col items-center p-6 text-center h-full">
                    <div className="mb-4 text-nermi-purple">
                      <Quote size={36} />
                    </div>
                    
                    <p className="text-nermi-light/90 mb-6 italic">"{testimonial.content}"</p>
                    
                    <div className="flex items-center gap-2 mt-auto">
                      <Avatar className="h-10 w-10 bg-nermi-purple/30">
                        {testimonial.avatar ? (
                          <img src={testimonial.avatar} alt={testimonial.name} />
                        ) : (
                          <User className="h-6 w-6 text-nermi-light" />
                        )}
                      </Avatar>
                      <div className="text-left">
                        <p className="font-semibold text-nermi-light">{testimonial.name}</p>
                        <p className="text-sm text-nermi-light/70">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0 md:-left-12 text-nermi-purple" />
          <CarouselNext className="right-0 md:-right-12 text-nermi-purple" />
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonials;
