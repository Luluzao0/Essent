import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Image as ImageIcon, Heart, Download } from 'lucide-react';
import { useState } from 'react';
import { wellnessImages, getImagesByCategory } from '../data/wellnessData';
import type { WellnessImage } from '../data/wellnessData';

const ImageGallery = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedCategory, setSelectedCategory] = useState<WellnessImage['category'] | 'all'>('all');
  const [displayedImages, setDisplayedImages] = useState(wellnessImages);
  const [selectedImage, setSelectedImage] = useState<WellnessImage | null>(null);

  const categories = [
    { value: 'all', label: 'Todas', emoji: '🖼️' },
    { value: 'nature', label: 'Natureza', emoji: '🌿' },
    { value: 'meditation', label: 'Meditação', emoji: '🧘' },
    { value: 'serenity', label: 'Serenidade', emoji: '🌅' },
    { value: 'inspiration', label: 'Inspiração', emoji: '✨' }
  ];

  const handleCategoryChange = (category: WellnessImage['category'] | 'all') => {
    setSelectedCategory(category);
    if (category === 'all') {
      setDisplayedImages(wellnessImages);
    } else {
      const filtered = getImagesByCategory(category);
      setDisplayedImages(filtered);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const imageVariants = {
    hidden: { y: 30, opacity: 0, scale: 0.8 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1
    }
  };

  return (
    <section id="gallery" className="section-padding" style={{
      background: 'linear-gradient(135deg, var(--bg-accent) 0%, var(--bg-primary) 100%)'
    }}>
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
          style={{ marginBottom: '3rem' }}
        >
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            marginBottom: '1rem'
          }}>
            <ImageIcon size={32} color="var(--secondary-600)" />
            <h2 className="text-gradient">Galeria de Serenidade</h2>
          </div>
          <p style={{
            fontSize: '1.1rem',
            color: 'var(--text-secondary)',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Imagens cuidadosamente selecionadas para trazer paz e inspiração
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 'clamp(0.5rem, 2vw, 0.75rem)',
            justifyContent: 'center',
            marginBottom: 'clamp(2rem, 5vw, 3rem)',
            padding: '0 clamp(0.5rem, 2vw, 1rem)'
          }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.value}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleCategoryChange(category.value as WellnessImage['category'] | 'all')}
              style={{
                background: selectedCategory === category.value 
                  ? 'linear-gradient(135deg, var(--secondary-500) 0%, var(--secondary-600) 100%)'
                  : 'rgba(255, 255, 255, 0.8)',
                color: selectedCategory === category.value ? 'white' : 'var(--text-primary)',
                border: selectedCategory === category.value ? 'none' : '1px solid var(--border-light)',
                padding: 'clamp(0.4rem, 1.5vw, 0.5rem) clamp(0.8rem, 3vw, 1rem)',
                borderRadius: '50px',
                fontSize: 'clamp(0.8rem, 2.2vw, 0.9rem)',
                fontWeight: '500',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                gap: 'clamp(0.3rem, 1vw, 0.5rem)'
              }}
            >
              <span>{category.emoji}</span>
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Images Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(200px, 45vw, 250px), 1fr))',
            gap: 'clamp(1rem, 3vw, 1.5rem)',
            padding: '0 clamp(0.5rem, 2vw, 1rem)'
          }}
        >
          {displayedImages.map((image) => (
            <motion.div
              key={image.id}
              variants={imageVariants}
              whileHover={{ scale: 1.03, y: -5 }}
              className="card"
              style={{
                padding: '0',
                overflow: 'hidden',
                cursor: 'pointer',
                background: 'white'
              }}
              onClick={() => setSelectedImage(image)}
            >
              <div style={{ position: 'relative', overflow: 'hidden' }}>
                <img
                  src={image.url}
                  alt={image.alt}
                  style={{
                    width: '100%',
                    height: 'clamp(150px, 30vw, 200px)',
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLImageElement).style.transform = 'scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLImageElement).style.transform = 'scale(1)';
                  }}
                />
                
                {/* Overlay */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 70%)',
                  display: 'flex',
                  alignItems: 'flex-end',
                  padding: 'clamp(0.8rem, 2vw, 1rem)'
                }}>
                  <div style={{ color: 'white' }}>
                    <p style={{ 
                      fontSize: 'clamp(0.8rem, 2.2vw, 0.9rem)', 
                      fontWeight: '500',
                      margin: 0
                    }}>
                      {image.alt}
                    </p>
                  </div>
                </div>

                {/* Category Badge */}
                <div style={{
                  position: 'absolute',
                  top: 'clamp(0.5rem, 2vw, 0.75rem)',
                  right: 'clamp(0.5rem, 2vw, 0.75rem)',
                  background: 'rgba(255, 255, 255, 0.9)',
                  color: 'var(--secondary-700)',
                  padding: 'clamp(0.2rem, 1vw, 0.25rem) clamp(0.4rem, 1.5vw, 0.5rem)',
                  borderRadius: '15px',
                  fontSize: 'clamp(0.6rem, 1.8vw, 0.7rem)',
                  fontWeight: '600',
                  textTransform: 'capitalize'
                }}>
                  {getCategoryEmoji(image.category)} {image.category}
                </div>
              </div>
              
              <div style={{ padding: 'clamp(0.8rem, 2.5vw, 1rem)' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}>
                    <Heart size={16} color="var(--accent-500)" />
                    <span style={{
                      fontSize: 'clamp(0.7rem, 2vw, 0.8rem)',
                      color: 'var(--text-muted)'
                    }}>
                      {image.width} x {image.height}
                    </span>
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    style={{
                      background: 'transparent',
                      border: 'none',
                      color: 'var(--secondary-600)',
                      cursor: 'pointer',
                      padding: 'clamp(0.2rem, 1vw, 0.25rem)'
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      // Simulate download
                      const link = document.createElement('a');
                      link.href = image.url;
                      link.download = `serenidade-${image.id}.jpg`;
                      link.click();
                    }}
                  >
                    <Download size={16} />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Modal for selected image */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0, 0, 0, 0.9)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 1000,
              padding: '2rem'
            }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              style={{
                maxWidth: '90vw',
                maxHeight: '90vh',
                borderRadius: '16px',
                overflow: 'hidden',
                background: 'white'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.url}
                alt={selectedImage.alt}
                style={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: '70vh',
                  objectFit: 'contain'
                }}
              />
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{ marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
                  {selectedImage.alt}
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                  Categoria: {selectedImage.category} • {selectedImage.width} x {selectedImage.height}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

// Helper function
const getCategoryEmoji = (category: WellnessImage['category']) => {
  const emojis = {
    nature: '🌿',
    meditation: '🧘',
    serenity: '🌅',
    inspiration: '✨'
  };
  return emojis[category] || '🖼️';
};

export default ImageGallery;
