import { motion } from "framer-motion";
import { ChevronRight, Heart } from "lucide-react";

interface NavigationButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "romantic";
}

const NavigationButton = ({ onClick, children, variant = "primary" }: NavigationButtonProps) => {
  const baseStyles = "group relative px-8 py-4 rounded-full font-display text-lg tracking-wide transition-all duration-500 overflow-hidden";
  
  const variants = {
    primary: "bg-gradient-to-r from-blush to-lavender text-midnight-deep hover:shadow-glow",
    secondary: "border border-blush/40 text-blush hover:bg-blush/10 hover:border-blush/60",
    romantic: "bg-midnight border border-champagne/30 text-champagne hover:bg-champagne/10 hover:border-champagne/50",
  };

  return (
    <motion.button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]}`}
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Shimmer effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      
      <span className="relative flex items-center justify-center gap-3">
        {children}
        <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
      </span>
      
      {/* Floating heart on hover */}
      <Heart className="absolute -top-2 -right-2 w-4 h-4 text-blush opacity-0 group-hover:opacity-100 group-hover:-top-4 group-hover:-right-4 transition-all duration-500 fill-blush" />
    </motion.button>
  );
};

export default NavigationButton;
