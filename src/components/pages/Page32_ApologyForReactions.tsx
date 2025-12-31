import { motion } from "framer-motion";
import { Zap, Heart } from "lucide-react";
import NavigationButton from "@/components/NavigationButton";
import FloatingHearts from "@/components/FloatingHearts";

interface PageProps {
  onNext: () => void;
}

const Page32_ApologyForReactions = ({ onNext }: PageProps) => {
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
          <Zap className="w-14 h-14 text-lavender" />
          <Heart className="w-12 h-12 text-blush fill-blush" />
        </motion.div>

        <motion.h1
          className="font-display text-4xl md:text-5xl font-bold mb-4 text-gradient-romantic glow-text"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          When I Should Have Been Calm
        </motion.h1>
        <motion.h2
          className="font-script text-2xl md:text-3xl text-champagne mb-12"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          Apology for my reactions
        </motion.h2>

        <motion.div
          className="glass-card rounded-3xl p-8 md:p-12 mb-12"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <p className="font-body text-lg text-cream/90 mb-8">
            There were times when you needed me to be patient, understanding, and compassionate.
          </p>
          <p className="font-body text-lg text-cream/90 mb-8">
            Instead, I reacted.
          </p>

          <motion.div
            className="my-10 space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <p className="font-body text-lg text-blush">
              I got angry when you needed comfort.
            </p>
            <p className="font-body text-lg text-blush">
              I got defensive when you needed honesty.
            </p>
            <p className="font-body text-lg text-blush">
              I got selfish when you needed support.
            </p>
          </motion.div>

          <motion.div
            className="pt-6 border-t border-blush/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5 }}
          >
            <p className="font-body text-lg text-cream/90 mb-4">
              My reactions became weapons, not shields.
            </p>
            <p className="font-body text-lg text-cream/90 mb-4">
              And I hurt you with them.
            </p>
            <p className="font-body text-xl text-champagne font-semibold">
              I'm sorry for every moment I let my emotions control me instead of controlling them for your sake. 😔💔
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 3 }}
        >
          <NavigationButton onClick={onNext}>
            I'm also sorry for the bigger picture →
          </NavigationButton>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Page32_ApologyForReactions;
