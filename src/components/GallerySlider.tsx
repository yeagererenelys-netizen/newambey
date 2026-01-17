import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import photo1 from "@/assets/photo1.jpg";
import photo2 from "@/assets/photo2.jpg";
import photo3 from "@/assets/photo3.jpg";
import photo4 from "@/assets/photo4.jpg";
import photo5 from "@/assets/photo5.jpg";

const galleryImages = [
  { src: photo1, alt: "New Ambey training car - Suzuki Dzire" },
  { src: photo2, alt: "New Ambey Swift car in front of driving school" },
  { src: photo3, alt: "New Ambey WagonR training vehicle" },
  { src: photo4, alt: "Classroom setup with road signs education" },
  { src: photo5, alt: "New Ambey training car rear view" },
];

const GallerySlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  const paginate = useCallback((newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) nextIndex = galleryImages.length - 1;
      if (nextIndex >= galleryImages.length) nextIndex = 0;
      return nextIndex;
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      paginate(1);
    }, 5000);
    return () => clearInterval(interval);
  }, [paginate]);

  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="section-title">Our Facility & Fleet</h2>
          <p className="section-subtitle mx-auto">
            Modern training vehicles and well-equipped classrooms for quality education.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Image */}
          <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-card shadow-card">
            <AnimatePresence initial={false} custom={direction}>
              <motion.img
                key={currentIndex}
                src={galleryImages[currentIndex].src}
                alt={galleryImages[currentIndex].alt}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => paginate(-1)}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-card/90 shadow-lg flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors z-10"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>
          <button
            onClick={() => paginate(1)}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-card/90 shadow-lg flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors z-10"
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-4">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  currentIndex === index ? "bg-secondary" : "bg-border hover:bg-muted-foreground"
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>

          {/* Thumbnails on larger screens */}
          <div className="hidden md:flex justify-center gap-3 mt-6">
            {galleryImages.map((image, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-20 h-14 rounded-lg overflow-hidden transition-all ${
                  currentIndex === index
                    ? "ring-2 ring-secondary ring-offset-2"
                    : "opacity-60 hover:opacity-100"
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySlider;
