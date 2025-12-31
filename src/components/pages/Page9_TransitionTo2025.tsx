import { motion } from "framer-motion";
import { Clock, Sparkles } from "lucide-react";
import NavigationButton from "@/components/NavigationButton";
import TwinklingStars from "@/components/TwinklingStars";
import FloatingHearts from "@/components/FloatingHearts";

interface PageProps {
  onNext: () => void;
}

const promises = [
  "I promise to cherish every moment with you.",
  "I promise to be better than yesterday.",
  "I promise to make you feel loved every single day.",
  "I promise to build a beautiful future with you.",
  "I promise to never take you for granted.",
];

const Page9_TransitionTo2025 = ({ onNext }: PageProps) => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 py-20">
      <TwinklingStars />
      <FloatingHearts />
      
      <motion.div
        className="relative z-10 text-center max-w-4xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Year transition animation */}
        <motion.div
          className="mb-12 relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center justify-center gap-8 md:gap-16">
            <motion.span
              className="font-display text-5xl md:text-7xl font-bold text-lavender/50"
              initial={{ x: 0 }}
              animate={{ x: -50, opacity: 0.3 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              2024
            </motion.span>
            
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.8, type: "spring" }}
            >
              <Clock className="w-12 h-12 text-champagne" />
            </motion.div>
            
            <motion.span
              className="font-display text-5xl md:text-7xl font-bold text-gradient-romantic glow-text"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
            >
              2025
            </motion.span>
          </div>
        </motion.div>

        <motion.h1
          className="font-display text-3xl md:text-5xl font-bold mb-4 text-champagne"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          When 2024 met 2025
        </motion.h1>

        {/* Main content */}
        <motion.div
          className="glass-card rounded-3xl p-8 md:p-12 mb-12"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.8 }}
        >
          <p className="font-body text-xl text-cream/90 leading-relaxed mb-8">
            As we crossed from 2024 to 2025, I made <span className="text-blush">silent promises</span>:
          </p>

          <div className="space-y-4">
            {promises.map((promise, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-3 text-left"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 2.2 + index * 0.2 }}
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 4, repeat: Infinity, delay: index * 0.5 }}
                >
                  <Sparkles className="w-5 h-5 text-champagne flex-shrink-0 mt-1" />
                </motion.div>
                <p className="font-body text-lg text-cream/90">{promise}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-10 pt-8 border-t border-blush/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.5 }}
          >
            <p className="font-body text-xl text-lavender mb-4">
              2025 was the year we didn't just <em>fall</em> in love —
            </p>
            <p className="font-display text-2xl text-gradient-romantic">
              we <span className="underline decoration-blush">lived</span> in love. 💫
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 3.8 }}
        >
          <NavigationButton onClick={onNext}>
            Let me walk you through the moments of 2025
          </NavigationButton>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Page9_TransitionTo2025;
