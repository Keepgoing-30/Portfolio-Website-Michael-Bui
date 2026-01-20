import { motion } from 'framer-motion';
import styles from './CertificateCarousel.module.css';
import certificates from './certificates.js'; 

const CertificateCarousel = () => {
  const duplicatedCertificates = [...certificates, ...certificates];

  return (
    <div className={styles.container}>
      <motion.div
        className={styles.scrollWrapper}
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 30, // Điều chỉnh tốc độ tại đây
            ease: "linear",
          },
        }}
      >
        {duplicatedCertificates.map((cert, index) => (
          <motion.a 
            key={`${cert.id}-${index}`}
            href={cert.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.certItem}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src={cert.imageUrl} alt={cert.title} className={styles.certImage} />
            <div className={styles.certTitle}>{cert.title}</div>
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
};

export default CertificateCarousel;