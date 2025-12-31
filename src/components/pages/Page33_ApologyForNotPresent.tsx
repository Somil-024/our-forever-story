import { motion } from "framer-motion";
import { Eye, Heart } from "lucide-react";
import NavigationButton from "@/components/NavigationButton";
import FloatingHearts from "@/components/FloatingHearts";

interface PageProps {
  onNext: () => void;
}

const Page33_ApologyForNotPresent = ({ onNext }: PageProps) => {
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
          <Eye className="w-14 h-14 text-lavender" />
          <Heart className="w-12 h-12 text-blush fill-blush" />
        </motion.div>

        <motion.h1
          className="font-display text-4xl md:text-5xl font-bold mb-4 text-gradient-romantic glow-text"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          I Should Have Been There
        </motion.h1>
        <motion.h2
          className="font-script text-2xl md:text-3xl text-champagne mb-12"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          Apology for not being present
        </motion.h2>

        <motion.div
          className="glass-card rounded-3xl p-8 md:p-12 mb-12"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <p className="font-body text-lg text-cream/90 mb-8">
            Love isn't just about being present physically.
          </p>
          <p className="font-body text-lg text-cream/90 mb-8">
            It's about being present emotionally, mentally, spiritually.
          </p>

          <motion.div
            className="my-10 space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <p className="font-body text-lg text-cream/90">
              There were times when I was with you, but I wasn't with you.
            </p>
            <p className="font-body text-lg text-blush">
              My mind was elsewhere.
            </p>
            <p className="font-body text-lg text-blush">
              My heart was distracted.
            </p>
            <p className="font-body text-lg text-blush">
              My soul was absent.
            </p>
          </motion.div>

          <motion.div
            className="pt-6 border-t border-blush/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5 }}
          >
            <p className="font-body text-lg text-cream/90 mb-4">
              You deserved someone who shows up completely.
            </p>
            <p className="font-body text-lg text-cream/90 mb-4">
              Someone whose presence says: "You are my priority."
            </p>
            <p className="font-body text-lg text-cream/90 mb-4">
              Someone whose attention says: "You matter most."
            </p>
            <p className="font-body text-xl text-champagne font-semibold">
              I'm sorry for the moments I didn't show up like that. And I promise to do better. 💪💕
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 3 }}
        >
          <NavigationButton onClick={onNext}>
            I'm sorry for my selfishness →
          </NavigationButton>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Page33_ApologyForNotPresent;
