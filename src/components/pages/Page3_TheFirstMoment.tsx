import { motion } from "framer-motion";
import { Eye, Heart } from "lucide-react";
import NavigationButton from "@/components/NavigationButton";
import TwinklingStars from "@/components/TwinklingStars";

interface PageProps {
  onNext: () => void;
}

const Page3_TheFirstMoment = ({ onNext }: PageProps) => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6">
      <TwinklingStars />
      
      {/* Central glow effect */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(330, 70%, 75%, 0.3) 0%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="relative z-10 text-center max-w-4xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Eye animation header */}
        <motion.div
          className="flex justify-center mb-8"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
        >
          <div className="relative">
            <Eye className="w-16 h-16 text-blush" />
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{ scale: [1, 1.5, 1], opacity: [0, 0.5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Heart className="w-6 h-6 text-blush fill-blush" />
            </motion.div>
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-12 text-gradient-romantic glow-text"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          When I knew
        </motion.h1>

        {/* Content */}
        <motion.div
          className="glass-card rounded-3xl p-8 md:p-12 mb-12 text-left"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <motion.p
            className="font-body text-xl md:text-2xl text-cream/90 leading-relaxed mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            I can't pinpoint the exact second.
            <br />
            But I remember <em className="text-champagne">everything</em> about that moment.
          </motion.p>

          <motion.div
            className="bg-midnight/50 rounded-2xl p-6 border border-blush/20 mb-8"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.3 }}
          >
            <p className="font-body text-lg text-lavender italic">
              Your eyes meeting mine. That smile. The way you tilted your head when you listened. 
              The way my heart just... <span className="text-blush">recognized you</span>.
            </p>
          </motion.div>

          <motion.div
            className="space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
          >
            <p className="font-display text-2xl text-blush-light">
              It wasn't love at first sight —
            </p>
            <p className="font-body text-xl text-cream/90">
              it was <span className="text-champagne font-semibold">recognition</span>.
            </p>
            <p className="font-script text-2xl text-lavender pt-4">
              Like my soul said: "Oh, there you are. I've been waiting for you."
            </p>
          </motion.div>

          <motion.div
            className="mt-10 pt-8 border-t border-blush/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.3 }}
          >
            <p className="font-body text-lg text-cream/80 mb-2">In that fraction of a second, I knew:</p>
            <ul className="space-y-2 font-body text-lg text-cream/90">
              <motion.li
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 2.5 }}
              >
                ✨ This person is going to be <span className="text-blush">important</span>.
              </motion.li>
              <motion.li
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 2.7 }}
              >
                ✨ This person is going to <span className="text-lavender">matter</span>.
              </motion.li>
              <motion.li
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 2.9 }}
              >
                ✨ This person is going to <span className="text-champagne">change everything</span>.
              </motion.li>
            </ul>
            <motion.p
              className="font-display text-xl text-cream mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.2 }}
            >
              And you did, sweetheart. You absolutely did. 🌟
            </motion.p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 3.5 }}
        >
          <NavigationButton onClick={onNext}>
            Everything after that moment was different
          </NavigationButton>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Page3_TheFirstMoment;
