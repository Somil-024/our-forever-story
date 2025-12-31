import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import NavigationButton from "@/components/NavigationButton";
import FloatingHearts from "@/components/FloatingHearts";

interface PageProps {
  onNext: () => void;
}

const Page42_ILoveYou = ({ onNext }: PageProps) => {
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
          className="mb-6 flex justify-center"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring" }}
        >
          <Heart className="w-20 h-20 text-blush fill-blush animate-pulse" />
        </motion.div>

        <motion.h1
          className="font-display text-5xl md:text-7xl font-bold mb-4 text-gradient-romantic glow-text"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          I Love You
        </motion.h1>
        <motion.h2
          className="font-script text-2xl md:text-3xl text-champagne mb-12"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          Simply, completely, eternally
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
            <p className="font-body text-2xl text-cream/90 mb-8 leading-relaxed">
              I love you.
            </p>

            <div className="space-y-4 my-8">
              <p className="font-body text-lg text-cream/90">
                Not because you're perfect.
              </p>
              <p className="font-body text-lg text-blush font-semibold">
                Because you're you.
              </p>
            </div>

            <p className="font-body text-xl text-lavender font-semibold">
              And that's more than enough.
            </p>
          </motion.div>

          <motion.div
            className="pt-6 border-t border-blush/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5 }}
          >
            <p className="font-body text-3xl text-champagne font-semibold">
              That's everything. 💕
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 3 }}
        >
          <NavigationButton onClick={onNext}>
            Now let me tell you about our future →
          </NavigationButton>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Page42_ILoveYou;
