import { motion } from "framer-motion";
import { Calendar, Heart } from "lucide-react";
import NavigationButton from "@/components/NavigationButton";
import FloatingHearts from "@/components/FloatingHearts";

interface PageProps {
  onNext: () => void;
}

const Page38_SpecificGratitude = ({ onNext }: PageProps) => {
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
          <Calendar className="w-14 h-14 text-lavender" />
          <Heart className="w-12 h-12 text-blush fill-blush" />
        </motion.div>

        <motion.h1
          className="font-display text-4xl md:text-5xl font-bold mb-4 text-gradient-romantic glow-text"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Letter Part 2: Specific Gratitude
        </motion.h1>
        <motion.h2
          className="font-script text-2xl md:text-3xl text-champagne mb-12"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          Thank you for 2024 and 2025
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
            <p className="font-body text-xl text-cream/90 mb-6">
              Thank you for 2024:
            </p>
            <div className="space-y-4 ml-6">
              <p className="font-body text-lg text-blush">
                When you entered my life and rewrote my story.
              </p>
              <p className="font-body text-lg text-blush">
                When you made ordinary days extraordinary.
              </p>
              <p className="font-body text-lg text-blush">
                When you showed me what love could feel like.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="mb-8 py-6 bg-gradient-to-r from-blush/20 to-lavender/20 rounded-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2 }}
          >
            <p className="font-body text-xl text-cream/90">
              Thank you for 2025:
            </p>
          </motion.div>

          <motion.div
            className="mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5 }}
          >
            <div className="space-y-4 ml-6">
              <p className="font-body text-lg text-lavender">
                When we lived fully.
              </p>
              <p className="font-body text-lg text-lavender">
                When we learned about each other.
              </p>
              <p className="font-body text-lg text-lavender">
                When we grew together.
              </p>
              <p className="font-body text-lg text-lavender">
                When we chose each other, every single day.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="pt-6 border-t border-blush/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.2 }}
          >
            <p className="font-body text-lg text-cream/90 mb-4">
              Thank you for every moment.
            </p>
            <p className="font-body text-lg text-cream/90 mb-2">
              Even the hard ones — because they taught us.
            </p>
            <p className="font-body text-lg text-cream/90 mb-2">
              Even the quiet ones — because they felt deepest.
            </p>
            <p className="font-body text-xl text-champagne font-semibold">
              Even the silly ones — because they made us laugh. 💫
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 3.7 }}
        >
          <NavigationButton onClick={onNext}>
            Thank you for your incredible qualities →
          </NavigationButton>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Page38_SpecificGratitude;
