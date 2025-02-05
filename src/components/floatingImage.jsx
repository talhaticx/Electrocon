import { motion } from "framer-motion";

export default function FloatingImage({ src, alt, className = "", width = 200 }) {
  return (
    <div className="flex items-center justify-center ">
      <motion.img
        src={src}
        alt={alt}
        width={width}
        className={`object-cover drop-shadow-lg ${className}`}
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      />
    </div>
  );
}
