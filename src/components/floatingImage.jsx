import { motion } from "framer-motion";

export default function FloatingImage({ src, alt, width=200 }) {
  return (
    <div className="flex items-center justify-center h-screen">
      <motion.img
        width={width}
        src={src}
        alt={alt}
        className="object-cover drop-shadow-lg"
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      />
    </div>
  );
}
