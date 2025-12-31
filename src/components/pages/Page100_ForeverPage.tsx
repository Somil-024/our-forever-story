import { motion } from "framer-motion";
import { Heart, RotateCcw, Home, Moon, Infinity } from "lucide-react";
import FloatingHearts from "@/components/FloatingHearts";
import TwinklingStars from "@/components/TwinklingStars";

interface PageProps {
  onRestart: () => void;
}

const Page100_ForeverPage = ({ onRestart }: PageProps) => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 py-20">
      <FloatingHearts />
      <TwinklingStars />
      
      <div className="absolute inset-0 bg-gradient-glow pointer-events-none" />
      
      <motion.div
        className="relative z-10 text-center max-w-4xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <motion.div
          className="mb-8"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, type: "spring" }}
        >
          <Infinity className="w-24 h-24 mx-auto text-blush" />
        </motion.div>

        <motion.h1
          className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 glow-text"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <span className="text-gradient-romantic">No matter what year it is...</span>
        </motion.h1>

        <motion.div
          className="glass-card rounded-3xl p-8 md:p-12 mb-12"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <div className="space-y-6 font-body text-xl md:text-2xl text-cream/90">
            <p>Baby, betu, my sweetheart, my love, my everything:</p>
            <p className="text-lavender">
              No matter if it's 2026 or 2050. No matter what storms come or how time passes.
            </p>
            <p className="text-champagne font-display text-2xl md:text-3xl pt-4">
              One truth will remain eternal:
            </p>
          </div>

          <div className="mt-8 pt-8 border-t border-blush/20 space-y-4">
            <p className="font-script text-2xl text-blush-light">
              Tum meri zindagi ka sabse special hissa ho.
            </p>
            <p className="font-display text-3xl text-champagne mt-6">
              Tum mere liye infinity ho
            </p>
            <p className="font-script text-4xl text-gradient-romantic mt-2">
              Tum mere forever ho.
            </p>
            <p className="font-display text-2xl text-cream mb-2 mt-8">I love you. Forever. ♾️💕🌙</p>
          </div>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <motion.button
            onClick={onRestart}
            className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blush to-lavender rounded-full font-display text-midnight-deep hover:shadow-glow transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <RotateCcw className="w-5 h-5" />
            Replay our love story 💞
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default Page100_ForeverPage;
