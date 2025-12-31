import { motion } from "framer-motion";
import { Heart, CheckCircle } from "lucide-react";
import NavigationButton from "@/components/NavigationButton";
import FloatingHearts from "@/components/FloatingHearts";

interface PageProps {
  onNext: () => void;
}

const promises = [
  "Listen with my whole heart",
  "Love with my whole soul",
  "Show up completely",
  "Grow continuously",
  "Choose you, always",
  "Protect your feelings",
  "Celebrate your victories",
  "Support your dreams",
  "Be your safe place",
  "Make you feel cherished",
];

const Page44_MyPromise = ({ onNext }: PageProps) => {
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
          <Heart className="w-14 h-14 text-blush fill-blush" />
          <CheckCircle className="w-12 h-12 text-champagne" />
        </motion.div>

        <motion.h1
          className="font-display text-4xl md:text-5xl font-bold mb-4 text-gradient-romantic glow-text"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          My Promise to You
        </motion.h1>
        <motion.h2
          className="font-script text-2xl md:text-3xl text-champagne mb-12"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          I promise to love you like this forever
        </motion.h2>

        <motion.div
          className="glass-card rounded-3xl p-8 md:p-12 mb-12"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <p className="font-body text-lg text-cream/80 mb-8">
            I promise to:
          </p>

          <motion.div
            className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            {promises.map((promise, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-3 bg-midnight/40 rounded-lg p-3"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.7 + index * 0.08 }}
              >
                <span className="text-xl">✨</span>
                <p className="font-body text-sm md:text-base text-cream/90">{promise}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="pt-6 border-t border-blush/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.8 }}
          >
            <p className="font-body text-lg text-cream/90 mb-4">
              Not because it's easy.
            </p>
            <p className="font-body text-xl text-champagne font-semibold">
              But because you're worth it. 💕
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 3.3 }}
        >
          <NavigationButton onClick={onNext}>
            There's more I want to tell you →
          </NavigationButton>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Page44_MyPromise;
