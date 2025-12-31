import { motion } from "framer-motion";
import { Shield, Mountain, Sun, Heart, Sparkles, ArrowUp } from "lucide-react";
import NavigationButton from "@/components/NavigationButton";
import FloatingHearts from "@/components/FloatingHearts";

interface PageProps {
  onNext: () => void;
}

const strengths = [
  "Facing fears head-on",
  "Handling challenges with grace",
  "Supporting others even when you're struggling",
  "Standing your ground when needed",
  "Rising after falling",
  "Believing in yourself (even when you forget to)",
  "Choosing love over hate, light over darkness",
];

const Page16_YourStrength = ({ onNext }: PageProps) => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 py-20">
      <FloatingHearts />
      
      {/* Mountain silhouette */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-midnight-deep/50 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      />
      
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
          <Shield className="w-14 h-14 text-champagne" />
          <Mountain className="w-12 h-12 text-lavender" />
        </motion.div>

        <motion.p
          className="font-body text-sm text-muted-foreground mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Affirmation #3
        </motion.p>

        <motion.h1
          className="font-display text-4xl md:text-5xl font-bold mb-4 text-gradient-romantic glow-text"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Your Strength
        </motion.h1>
        <motion.h2
          className="font-script text-2xl md:text-3xl text-champagne mb-12"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          The power that inspires me
        </motion.h2>

        <motion.div
          className="glass-card rounded-3xl p-8 md:p-12 mb-12"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <p className="font-body text-xl text-cream/90 mb-4">
            And then there's your strength, baby.
          </p>
          <p className="font-body text-xl text-cream/90 mb-8">
            Not the loud kind. The <span className="text-champagne font-semibold">real</span> kind.
          </p>

          <motion.div
            className="mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <p className="font-display text-lg text-blush mb-4 flex items-center justify-center gap-2">
              <ArrowUp className="w-5 h-5" /> You're strong in:
            </p>
            <div className="space-y-3">
              {strengths.map((strength, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 bg-midnight/40 rounded-lg p-3"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1.7 + index * 0.15 }}
                >
                  <Sparkles className="w-5 h-5 text-champagne flex-shrink-0" />
                  <p className="font-body text-cream/80">{strength}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="pt-6 border-t border-blush/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.5 }}
          >
            <p className="font-body text-xl text-cream/90 mb-4">
              You inspire me to be braver, fiercer, more authentic.
            </p>
            <p className="font-script text-xl text-champagne flex items-center justify-center gap-2">
              Thank you for being the woman who makes me want to be a better man.
              <Sun className="w-6 h-6 text-champagne" />
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 4 }}
        >
          <NavigationButton onClick={onNext}>
            Let me celebrate your specific quirks
          </NavigationButton>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Page16_YourStrength;
