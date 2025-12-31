import { motion } from "framer-motion";
import { Heart, Sparkles, Moon } from "lucide-react";
import NavigationButton from "@/components/NavigationButton";
import FloatingHearts from "@/components/FloatingHearts";

interface PageProps {
  onNext: () => void;
  onGameClick?: (pageNum: number) => void;
}

const Page45_ClosingWords = ({ onNext, onGameClick }: PageProps) => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 py-20">
      <FloatingHearts />
      
      <motion.div
        className="relative z-10 text-center max-w-4xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="mb-6 flex justify-center gap-3"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring" }}
        >
          <Sparkles className="w-14 h-14 text-lavender" />
          <Moon className="w-12 h-12 text-champagne" />
        </motion.div>

        <motion.h1
          className="font-display text-4xl md:text-5xl font-bold mb-4 text-gradient-romantic glow-text"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Closing Words
        </motion.h1>
        <motion.h2
          className="font-script text-2xl md:text-3xl text-champagne mb-12"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          Happy New Year, my everything
        </motion.h2>

        <motion.div
          className="glass-card rounded-3xl p-8 md:p-12 mb-12"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <p className="font-body text-lg text-cream/90 mb-4">
            Baby, betu, my sweetheart:
          </p>

          <motion.div
            className="my-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <p className="font-body text-lg text-lavender mb-6">
              2025 has been the year I learned what real love is.
            </p>
            <p className="font-body text-lg text-lavender mb-8">
              And 2026 is the year I get to practice it with you.
            </p>

            <div className="space-y-3">
              <p className="font-body text-lg text-cream/90">
                Thank you for every moment.
              </p>
              <p className="font-body text-lg text-cream/90">
                Thank you for being patient with me.
              </p>
              <p className="font-body text-lg text-cream/90">
                Thank you for loving me back.
              </p>
              <p className="font-body text-lg text-blush font-semibold">
                Thank you for choosing me.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="pt-6 border-t border-blush/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5 }}
          >
            <p className="font-body text-lg text-cream/90 mb-4">
              I love you more than words could ever express.
            </p>
            <p className="font-body text-lg text-champagne font-semibold mb-2">
              More than actions could ever show.
            </p>
            <p className="font-body text-xl text-champagne font-semibold">
              More than a lifetime could ever be enough time to demonstrate.
            </p>
            <p className="font-body text-2xl text-lavender mt-4">
              Happy New Year, my love. Let's make magic together. ✨💕🌙
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex flex-col gap-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 3 }}
        >
          <motion.div
            className="p-6 bg-gradient-to-r from-blush/10 to-love-red/10 rounded-2xl border border-blush/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.3 }}>
            <p className="font-body text-lg text-cream/90 mb-4">
              Compliment time baby!
            </p>
            <button
              onClick={() => onGameClick?.(95)}
              className="w-full px-6 py-3 bg-gradient-to-r from-blush to-love-red rounded-full font-display text-white hover:shadow-glow transition-all transform hover:scale-105">
              Compliment Generator → Page 95
            </button>
          </motion.div>
          <NavigationButton onClick={onNext}>
            Now, let me make promises you can hold onto →
          </NavigationButton>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Page45_ClosingWords;
