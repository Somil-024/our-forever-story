import { motion } from "framer-motion";
import { Gift, Heart, Sparkles } from "lucide-react";
import NavigationButton from "@/components/NavigationButton";
import FloatingHearts from "@/components/FloatingHearts";

interface PageProps {
  onNext: () => void;
}

const gratitudes = [
  { emoji: "💕", text: "Waking up every day" },
  { emoji: "💕", text: "Being authentically you" },
  { emoji: "💕", text: "Choosing kindness" },
  { emoji: "💕", text: "Believing in love" },
  { emoji: "💕", text: "Believing in us" },
  { emoji: "💕", text: "Taking a chance on me" },
  { emoji: "💕", text: "Staying when things got hard" },
  { emoji: "💕", text: "Loving me imperfectly while I was learning" },
];

const Page37_LetterGratitude = ({ onNext }: PageProps) => {
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
          <Gift className="w-14 h-14 text-lavender" />
          <Sparkles className="w-12 h-12 text-champagne" />
        </motion.div>

        <motion.h1
          className="font-display text-4xl md:text-5xl font-bold mb-4 text-gradient-romantic glow-text"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Letter Part 1: Gratitude
        </motion.h1>
        <motion.h2
          className="font-script text-2xl md:text-3xl text-champagne mb-12"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          Thank you for existing
        </motion.h2>

        <motion.div
          className="glass-card rounded-3xl p-8 md:p-12 mb-12"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <motion.div
            className="mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <p className="font-body text-xl text-cream/90 mb-4">
              Thank you, baby.
            </p>
            <p className="font-body text-lg text-cream/80">
              Not just for loving me.
            </p>
            <p className="font-body text-lg text-blush font-semibold">
              But for being.
            </p>
          </motion.div>

          <motion.div
            className="my-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
          >
            <p className="font-display text-lg text-lavender mb-4">Thank you for:</p>
            <div className="space-y-3">
              {gratitudes.map((gratitude, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-4 bg-midnight/40 rounded-xl p-4"
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 2.2 + index * 0.1 }}
                >
                  <span className="text-2xl">{gratitude.emoji}</span>
                  <p className="font-body text-cream/90">{gratitude.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="pt-6 border-t border-blush/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.2 }}
          >
            <p className="font-body text-lg text-cream/90 mb-4">
              The world is better because you exist.
            </p>
            <p className="font-body text-lg text-cream/90 mb-4">
              My world is infinitely better because you exist.
            </p>
            <p className="font-body text-xl text-champagne font-semibold">
              Thank you for saying yes to this journey with me. 🙏💕
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 3.7 }}
        >
          <NavigationButton onClick={onNext}>
            Thank you for specific things too →
          </NavigationButton>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Page37_LetterGratitude;
