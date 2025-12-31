import { motion } from "framer-motion";
import { DoorOpen, Heart, Sparkles } from "lucide-react";
import NavigationButton from "@/components/NavigationButton";
import FloatingHearts from "@/components/FloatingHearts";

interface PageProps {
  onNext: () => void;
}

const Page12_SectionTransition = ({ onNext }: PageProps) => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 py-20">
      <FloatingHearts />
      
      {/* Door opening animation */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <motion.div
          className="w-64 h-96 border-4 border-champagne/30 rounded-t-full relative"
          initial={{ scaleX: 1 }}
          animate={{ scaleX: [1, 0.1, 1] }}
          transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-champagne/20 to-transparent rounded-t-full"
            animate={{ opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
      
      <motion.div
        className="relative z-10 text-center max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="mb-8 flex justify-center gap-4"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring" }}
        >
          <DoorOpen className="w-16 h-16 text-champagne" />
          <Sparkles className="w-12 h-12 text-lavender animate-pulse" />
        </motion.div>

        <motion.h1
          className="font-display text-4xl md:text-5xl font-bold mb-6 text-gradient-romantic glow-text"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          You're about to enter
        </motion.h1>
        <motion.h2
          className="font-script text-3xl md:text-4xl text-champagne mb-12"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          the deepest parts of my heart
        </motion.h2>

        <motion.div
          className="glass-card rounded-3xl p-8 md:p-12 mb-12"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <p className="font-body text-xl text-cream/90 mb-8">
            The pages ahead are for <span className="text-blush font-semibold">you alone</span>.
            <br />
            No performance. No filter. Just raw, honest, complete truth.
          </p>

          <div className="space-y-4 font-body text-lg text-cream/80">
            <p>This is where I tell you:</p>
            <motion.div
              className="space-y-3 pl-4 border-l-2 border-blush/30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              <p className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-blush" />
                Everything I see when I look at you.
              </p>
              <p className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-lavender" />
                Everything I feel when I'm near you.
              </p>
              <p className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-champagne" />
                Everything I want to build with you.
              </p>
              <p className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-blush" />
                Everything I'm sorry for.
              </p>
              <p className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-lavender" />
                Everything I promise you.
              </p>
            </motion.div>
          </div>

          <motion.p
            className="font-script text-2xl text-champagne mt-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
          >
            Are you ready, baby? 💌
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 2.5 }}
        >
          <NavigationButton onClick={onNext}>
            Take me deeper →
          </NavigationButton>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Page12_SectionTransition;
