import { motion } from "framer-motion";
import { Ear, Heart } from "lucide-react";
import NavigationButton from "@/components/NavigationButton";
import FloatingHearts from "@/components/FloatingHearts";

interface PageProps {
  onNext: () => void;
}

const behaviors = [
  { emoji: "📱", text: "On my phone" },
  { emoji: "💭", text: "Thinking about my own problems" },
  { emoji: "🗣️", text: "Waiting for my turn to talk" },
  { emoji: "🚶", text: "Not fully present" },
];

const Page31_ApologyForNotListening = ({ onNext }: PageProps) => {
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
          <Ear className="w-14 h-14 text-lavender" />
          <Heart className="w-12 h-12 text-blush fill-blush" />
        </motion.div>

        <motion.h1
          className="font-display text-4xl md:text-5xl font-bold mb-4 text-gradient-romantic glow-text"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          I Should Have Heard You
        </motion.h1>
        <motion.h2
          className="font-script text-2xl md:text-3xl text-champagne mb-12"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          Apology for not listening
        </motion.h2>

        <motion.div
          className="glass-card rounded-3xl p-8 md:p-12 mb-12"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <p className="font-body text-lg text-cream/90 mb-8">
            One of my biggest regrets is the times you tried to tell me something important, and I was too busy, too distracted, too self-involved to really listen.
          </p>

          <motion.div
            className="mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <p className="font-display text-lg text-lavender mb-4">You'd be trying to share something, and I'd be:</p>
            <div className="space-y-3">
              {behaviors.map((behavior, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-4 bg-midnight/40 rounded-xl p-4"
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1.7 + index * 0.15 }}
                >
                  <span className="text-2xl">{behavior.emoji}</span>
                  <p className="font-body text-cream/90">{behavior.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="pt-6 border-t border-blush/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5 }}
          >
            <p className="font-body text-lg text-cream/90 mb-4">
              But your words mattered.
            </p>
            <p className="font-body text-lg text-cream/90 mb-4">
              Your feelings deserved my full attention.
            </p>
            <p className="font-body text-lg text-cream/90 mb-4">
              Your voice deserved to be heard.
            </p>
            <p className="font-body text-xl text-champagne font-semibold">
              I'm sorry, baby. I hear you now. I really hear you. 👂💕
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 3 }}
        >
          <NavigationButton onClick={onNext}>
            And I'm sorry for my reactions too →
          </NavigationButton>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Page31_ApologyForNotListening;
