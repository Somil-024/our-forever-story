import { motion } from "framer-motion";
import { Brain, Lightbulb, Sparkles, Zap } from "lucide-react";
import NavigationButton from "@/components/NavigationButton";
import FloatingHearts from "@/components/FloatingHearts";

interface PageProps {
  onNext: () => void;
}

const qualities = [
  "Intelligent without being arrogant",
  "Thoughtful without being overthinking",
  "Creative in problem-solving",
  "Wise beyond your years",
  "Quick to understand nuance",
  "Capable of holding complexity",
  "Curious about the world",
  "Willing to change your mind when proven wrong",
];

const Page14_YourMind = ({ onNext }: PageProps) => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 py-20">
      <FloatingHearts />
      
      {/* Brain network animation */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 2 }}
      >
        <Brain className="w-80 h-80 text-lavender/30" />
      </motion.div>
      
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
          <Brain className="w-14 h-14 text-lavender" />
          <Sparkles className="w-10 h-10 text-champagne animate-pulse" />
        </motion.div>

        <motion.p
          className="font-body text-sm text-muted-foreground mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Affirmation #1
        </motion.p>

        <motion.h1
          className="font-display text-4xl md:text-5xl font-bold mb-4 text-gradient-romantic glow-text"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Your Mind
        </motion.h1>
        <motion.h2
          className="font-script text-2xl md:text-3xl text-champagne mb-12"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          The intelligence that makes me fall deeper
        </motion.h2>

        <motion.div
          className="glass-card rounded-3xl p-8 md:p-12 mb-12"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <p className="font-body text-xl text-cream/90 mb-8">
            Your mind, baby, is <span className="text-lavender font-semibold">breathtaking</span>.
            <br />
            The way you think. The connections you make. The depth of your understanding.
          </p>

          <motion.div
            className="space-y-3 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <p className="font-display text-lg text-blush mb-4">You're:</p>
            {qualities.map((quality, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-3 bg-midnight/40 rounded-lg p-3"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.7 + index * 0.15 }}
              >
                <Lightbulb className="w-5 h-5 text-champagne flex-shrink-0" />
                <p className="font-body text-cream/80">{quality}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="pt-6 border-t border-blush/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.5 }}
          >
            <p className="font-body text-xl text-cream/90 flex items-center justify-center gap-2">
              Conversations with you are my favorite meditation.
              <Zap className="w-6 h-6 text-champagne" />
              <Sparkles className="w-6 h-6 text-lavender" />
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 4 }}
        >
          <NavigationButton onClick={onNext}>
            Your heart is even more beautiful
          </NavigationButton>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Page14_YourMind;
