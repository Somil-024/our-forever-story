import { motion } from "framer-motion";
import { Moon, Heart, Wind } from "lucide-react";
import NavigationButton from "@/components/NavigationButton";
import FloatingHearts from "@/components/FloatingHearts";

interface PageProps {
  onNext: () => void;
  onGameClick?: (pageNum: number) => void;
}

const moments = [
  { emoji: "🤫", text: "You asleep on my chest (your breathing my favorite sound)" },
  { emoji: "🤫", text: "Sitting together not talking, just being" },
  { emoji: "🤫", text: "Scrolling your phone while I worked (just sharing the same space)" },
  { emoji: "🤫", text: "Morning cuddles before you had to leave" },
  { emoji: "🤫", text: "Midnight calls when we both couldn't sleep" },
  { emoji: "🤫", text: "Your head on my shoulder in a crowd" },
  { emoji: "🤫", text: "The way you looked at me sometimes (like I was everything)" },
  { emoji: "🤫", text: "Comfortable silence that said more than words could" },
];

const Page27_QuietMoments = ({ onNext, onGameClick }: PageProps) => {
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
          <Moon className="w-14 h-14 text-lavender" />
          <Wind className="w-12 h-12 text-champagne" />
        </motion.div>

        <motion.h1
          className="font-display text-4xl md:text-5xl font-bold mb-4 text-gradient-romantic glow-text"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Quiet Moments
        </motion.h1>
        <motion.h2
          className="font-script text-2xl md:text-3xl text-champagne mb-12"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          When nothing happened, but everything mattered
        </motion.h2>

        <motion.div
          className="glass-card rounded-3xl p-8 md:p-12 mb-12"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <p className="font-body text-xl text-cream/90 mb-8">
            Not all special moments are loud, baby.
          </p>
          <p className="font-body text-lg text-cream/80 mb-8">
            Some of the most precious were the quietest:
          </p>

          <motion.div
            className="mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <div className="space-y-3">
              {moments.map((moment, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4 bg-midnight/40 rounded-xl p-4"
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1.7 + index * 0.1 }}
                >
                  <span className="text-2xl mt-1">{moment.emoji}</span>
                  <p className="font-body text-cream/90 text-left">{moment.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="pt-6 border-t border-blush/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.5 }}
          >
            <p className="font-body text-lg text-cream/90 mb-4">
              These moments were where I felt closest to you.
            </p>
            <p className="font-body text-xl text-champagne font-semibold">
              These moments were where I felt most at home. 💤💕
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex flex-col gap-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 4 }}
        >
          <motion.div
            className="p-6 bg-gradient-to-r from-blush/10 to-love-red/10 rounded-2xl border border-blush/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4.3 }}>
            <p className="font-body text-lg text-cream/90 mb-4">
              Couples ka honest game khelein?
            </p>
            <button
              onClick={() => onGameClick?.(93)}
              className="w-full px-6 py-3 bg-gradient-to-r from-blush to-love-red rounded-full font-display text-white hover:shadow-glow transition-all transform hover:scale-105">
              Who Is More? → Page 93
            </button>
          </motion.div>
          <NavigationButton onClick={onNext}>
            But not everything was peaceful →
          </NavigationButton>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Page27_QuietMoments;
