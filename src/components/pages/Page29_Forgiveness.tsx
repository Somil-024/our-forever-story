import { motion } from "framer-motion";
import { Heart, Sun, Sparkles } from "lucide-react";
import NavigationButton from "@/components/NavigationButton";
import FloatingHearts from "@/components/FloatingHearts";

interface PageProps {
  onNext: () => void;
}

const healing = [
  { emoji: "✨", text: "We talked (really talked)" },
  { emoji: "✨", text: "We listened (really listened)" },
  { emoji: "✨", text: "We understood (really understood)" },
  { emoji: "✨", text: "We apologized (genuinely)" },
  { emoji: "✨", text: "We forgave (completely)" },
  { emoji: "✨", text: "We came back (stronger)" },
];

const Page29_Forgiveness = ({ onNext }: PageProps) => {
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
          <Sun className="w-14 h-14 text-champagne" />
          <Sparkles className="w-12 h-12 text-lavender" />
        </motion.div>

        <motion.h1
          className="font-display text-4xl md:text-5xl font-bold mb-4 text-gradient-romantic glow-text"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Forgiveness & Healing
        </motion.h1>
        <motion.h2
          className="font-script text-2xl md:text-3xl text-champagne mb-12"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          Where we learned what love really means
        </motion.h2>

        <motion.div
          className="glass-card rounded-3xl p-8 md:p-12 mb-12"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <p className="font-body text-xl text-cream/90 mb-8">
            The most beautiful part of our love story isn't that we never fought.
          </p>
          <p className="font-body text-lg text-cream/80 mb-8">
            It's that we always fixed it.
          </p>

          <motion.div
            className="mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <p className="font-display text-lg text-lavender mb-4">After every fight:</p>
            <div className="space-y-3">
              {healing.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4 bg-midnight/40 rounded-xl p-4"
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1.7 + index * 0.12 }}
                >
                  <span className="text-2xl mt-1">{item.emoji}</span>
                  <p className="font-body text-cream/90 text-left">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="pt-6 border-t border-blush/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.8 }}
          >
            <p className="font-body text-lg text-cream/90 mb-4">
              That's when I learned: Real love is choosing to stay, even when leaving is easy.
            </p>
            <p className="font-body text-lg text-cream/90 mb-4">
              You chose to stay with me.
            </p>
            <p className="font-body text-xl text-champagne font-semibold">
              And I will spend forever choosing you. 💚💕
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 3.3 }}
        >
          <NavigationButton onClick={onNext}>
            So let me apologize properly →
          </NavigationButton>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Page29_Forgiveness;
