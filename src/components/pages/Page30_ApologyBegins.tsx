import { motion } from "framer-motion";
import { Heart, Flame } from "lucide-react";
import NavigationButton from "@/components/NavigationButton";
import FloatingHearts from "@/components/FloatingHearts";

interface PageProps {
  onNext: () => void;
}

const sorries = [
  { emoji: "😔", text: "Times I didn't listen" },
  { emoji: "😔", text: "Moments I reacted without understanding" },
  { emoji: "😔", text: "Days I made you feel small" },
  { emoji: "😔", text: "Instances when I chose myself over us" },
  { emoji: "😔", text: "Moments I hurt you unknowingly" },
  { emoji: "😔", text: "Times I wasn't present" },
  { emoji: "😔", text: "Occasions when I let you down" },
];

const Page30_ApologyBegins = ({ onNext }: PageProps) => {
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
          <Flame className="w-14 h-14 text-blush" />
          <Heart className="w-12 h-12 text-lavender fill-lavender" />
        </motion.div>

        <motion.h1
          className="font-display text-4xl md:text-5xl font-bold mb-4 text-gradient-romantic glow-text"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          The Apology Begins
        </motion.h1>
        <motion.h2
          className="font-script text-2xl md:text-3xl text-champagne mb-12"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          I'm sorry, my sweetheart
        </motion.h2>

        <motion.div
          className="glass-card rounded-3xl p-8 md:p-12 mb-12"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <p className="font-body text-xl text-cream/90 mb-8">
            Baby, I need to say this.
          </p>
          <p className="font-body text-lg text-cream/80 mb-8">
            Not just once, but everywhere, for all time:
          </p>
          
          <motion.div
            className="mb-8 py-6 bg-gradient-to-r from-blush/20 to-lavender/20 rounded-2xl"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <p className="font-display text-3xl md:text-4xl text-blush mb-6">
              I'm sorry.
            </p>
          </motion.div>

          <motion.div
            className="mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
          >
            <p className="font-display text-lg text-lavender mb-4">I'm sorry for:</p>
            <div className="space-y-3">
              {sorries.map((sorry, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4 bg-midnight/40 rounded-xl p-4"
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 2.2 + index * 0.12 }}
                >
                  <span className="text-2xl mt-1">{sorry.emoji}</span>
                  <p className="font-body text-cream/90 text-left">{sorry.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="pt-6 border-t border-blush/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.2 }}
          >
            <p className="font-body text-lg text-cream/90 mb-4">
              You deserved better.
            </p>
            <p className="font-body text-lg text-cream/90 mb-4">
              You deserve better.
            </p>
            <p className="font-body text-xl text-champagne font-semibold">
              And I'm committed to being better. 🙏
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 3.7 }}
        >
          <NavigationButton onClick={onNext}>
            Let me explain what I understand now →
          </NavigationButton>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Page30_ApologyBegins;
