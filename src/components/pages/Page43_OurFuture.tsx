import { motion } from "framer-motion";
import { Star, Heart } from "lucide-react";
import NavigationButton from "@/components/NavigationButton";
import FloatingHearts from "@/components/FloatingHearts";

interface PageProps {
  onNext: () => void;
}

const futures = [
  { emoji: "🌟", text: "Growing old together" },
  { emoji: "🌟", text: "Building dreams together" },
  { emoji: "🌟", text: "Facing storms together" },
  { emoji: "🌟", text: "Celebrating joys together" },
  { emoji: "🌟", text: "Creating a home together" },
  { emoji: "🌟", text: "Making memories together" },
  { emoji: "🌟", text: "Loving each other fiercely together" },
];

const Page43_OurFuture = ({ onNext }: PageProps) => {
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
          <Star className="w-14 h-14 text-lavender" />
          <Heart className="w-12 h-12 text-blush fill-blush" />
        </motion.div>

        <motion.h1
          className="font-display text-4xl md:text-5xl font-bold mb-4 text-gradient-romantic glow-text"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Our Future
        </motion.h1>
        <motion.h2
          className="font-script text-2xl md:text-3xl text-champagne mb-12"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          I see forever when I look at you
        </motion.h2>

        <motion.div
          className="glass-card rounded-3xl p-8 md:p-12 mb-12"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <p className="font-body text-xl text-cream/90 mb-8">
            Baby, I've thought about the future.
          </p>
          <p className="font-body text-lg text-cream/80 mb-8">
            And in every version, you're there.
          </p>

          <motion.div
            className="mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <p className="font-display text-lg text-lavender mb-4">I see us:</p>
            <div className="space-y-3">
              {futures.map((future, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-4 bg-midnight/40 rounded-xl p-4"
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1.7 + index * 0.1 }}
                >
                  <span className="text-2xl">{future.emoji}</span>
                  <p className="font-body text-cream/90">{future.text}</p>
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
              I don't know if forever is guaranteed.
            </p>
            <p className="font-body text-xl text-champagne font-semibold">
              But I know I'll spend every moment trying to build it with you. 💫
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 3.3 }}
        >
          <NavigationButton onClick={onNext}>
            I want to spend my life being better for you →
          </NavigationButton>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Page43_OurFuture;
