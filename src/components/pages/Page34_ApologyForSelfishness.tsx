import { motion } from "framer-motion";
import { Gift, Heart } from "lucide-react";
import NavigationButton from "@/components/NavigationButton";
import FloatingHearts from "@/components/FloatingHearts";

interface PageProps {
  onNext: () => void;
}

const selfish = [
  { emoji: "•", text: "I wanted my way without considering your feelings" },
  { emoji: "•", text: "I made decisions that affected you without consulting you" },
  { emoji: "•", text: "I prioritized my comfort over your happiness" },
  { emoji: "•", text: "I was moody and let you handle it alone" },
  { emoji: "•", text: "I took your support for granted" },
  { emoji: "•", text: "I didn't reciprocate your efforts" },
];

const Page34_ApologyForSelfishness = ({ onNext }: PageProps) => {
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
          <Heart className="w-12 h-12 text-blush fill-blush" />
        </motion.div>

        <motion.h1
          className="font-display text-4xl md:text-5xl font-bold mb-4 text-gradient-romantic glow-text"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          When I Put Me Before Us
        </motion.h1>
        <motion.h2
          className="font-script text-2xl md:text-3xl text-champagne mb-12"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          Apology for being selfish
        </motion.h2>

        <motion.div
          className="glass-card rounded-3xl p-8 md:p-12 mb-12"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <p className="font-body text-lg text-cream/90 mb-8">
            Love requires sacrifice. I'm learning this.
          </p>

          <motion.div
            className="mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <p className="font-display text-lg text-lavender mb-4">I was selfish when:</p>
            <div className="space-y-3">
              {selfish.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4 bg-midnight/40 rounded-xl p-4"
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1.7 + index * 0.12 }}
                >
                  <span className="text-lg font-bold text-champagne">{item.emoji}</span>
                  <p className="font-body text-cream/90 text-left">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="pt-6 border-t border-blush/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.7 }}
          >
            <p className="font-body text-lg text-cream/90 mb-4">
              You loved me completely while I was still learning to love.
            </p>
            <p className="font-body text-lg text-cream/90 mb-4">
              That wasn't fair to you.
            </p>
            <p className="font-body text-xl text-champagne font-semibold">
              And I'm sorry. 😔💔
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 3.2 }}
        >
          <NavigationButton onClick={onNext}>
            So here's my commitment to change →
          </NavigationButton>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Page34_ApologyForSelfishness;
