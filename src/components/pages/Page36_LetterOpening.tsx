import { motion } from "framer-motion";
import { Mail, Heart } from "lucide-react";
import NavigationButton from "@/components/NavigationButton";
import FloatingHearts from "@/components/FloatingHearts";

interface PageProps {
  onNext: () => void;
}

const Page36_LetterOpening = ({ onNext }: PageProps) => {
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
          <Mail className="w-14 h-14 text-lavender" />
          <Heart className="w-12 h-12 text-blush fill-blush" />
        </motion.div>

        <motion.h1
          className="font-display text-4xl md:text-5xl font-bold mb-4 text-gradient-romantic glow-text"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          The Letter Opening
        </motion.h1>
        <motion.h2
          className="font-script text-3xl md:text-4xl text-champagne mb-12"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          Dear Baby,
        </motion.h2>

        <motion.div
          className="glass-card rounded-3xl p-8 md:p-12 mb-12"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <p className="font-body text-xl text-cream/90 mb-8">
            I've started this letter a hundred times.
          </p>
          <p className="font-body text-lg text-cream/80 mb-8">
            Each time, words felt too small. Too inadequate. Too incomplete.
          </p>

          <motion.div
            className="my-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <p className="font-body text-lg text-cream/90 mb-8">
              But I'm going to try anyway.
            </p>
            <p className="font-body text-lg text-blush font-semibold">
              Because you deserve to know everything my heart wants to tell you. 💌
            </p>
          </motion.div>

          <motion.div
            className="py-6 bg-gradient-to-r from-blush/20 to-lavender/20 rounded-2xl my-8"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 2 }}
          >
            <p className="font-body text-lg text-cream/90 mb-4">
              Sit down. Get comfortable. Take my hand (even if it's digital 🖐️).
            </p>
            <p className="font-body text-lg text-champagne font-semibold">
              Let me pour my soul out across these pages.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 2.5 }}
        >
          <NavigationButton onClick={onNext}>
            Page 1 of my heart →
          </NavigationButton>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Page36_LetterOpening;
