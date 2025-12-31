import { motion } from "framer-motion";
import { Heart, Users, Smile, Scale, RefreshCw, Sparkles } from "lucide-react";
import NavigationButton from "@/components/NavigationButton";
import TwinklingStars from "@/components/TwinklingStars";

interface PageProps {
  onNext: () => void;
}

const qualities = [
  { icon: Users, text: "People's feelings (even when they don't deserve it)" },
  { icon: Smile, text: "Making others smile" },
  { icon: Scale, text: "Standing up for what's right" },
  { icon: Heart, text: "Being there when someone needs you" },
  { icon: RefreshCw, text: "Giving second chances" },
  { icon: Sparkles, text: "Loving fiercely and loyally" },
];

const Page15_YourHeart = ({ onNext }: PageProps) => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 py-20">
      <TwinklingStars />
      
      {/* Radiating heart */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <Heart className="w-80 h-80 text-blush/20 fill-blush/10" />
      </motion.div>
      
      <motion.div
        className="relative z-10 text-center max-w-4xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="mb-6"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring" }}
        >
          <Heart className="w-16 h-16 text-blush fill-blush/50 mx-auto animate-heartbeat" />
        </motion.div>

        <motion.p
          className="font-body text-sm text-muted-foreground mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Affirmation #2
        </motion.p>

        <motion.h1
          className="font-display text-4xl md:text-5xl font-bold mb-4 text-gradient-romantic glow-text"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Your Heart
        </motion.h1>
        <motion.h2
          className="font-script text-2xl md:text-3xl text-champagne mb-12"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          The kindness that melts me
        </motion.h2>

        <motion.div
          className="glass-card rounded-3xl p-8 md:p-12 mb-12"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <p className="font-body text-xl text-cream/90 mb-4">
            But what truly undoes me is your heart, sweetheart.
          </p>
          <p className="font-body text-xl text-cream/90 mb-8">
            Your heart is so full, betu. Full of <span className="text-blush">love</span>, 
            <span className="text-lavender"> compassion</span>, 
            <span className="text-champagne"> understanding</span>.
          </p>

          <motion.div
            className="mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <p className="font-display text-lg text-blush mb-4">You care about:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {qualities.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 bg-midnight/40 rounded-lg p-3"
                  initial={{ x: index % 2 === 0 ? -20 : 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1.7 + index * 0.15 }}
                >
                  <item.icon className="w-5 h-5 text-blush flex-shrink-0" />
                  <p className="font-body text-cream/80 text-left">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="pt-6 border-t border-blush/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3 }}
          >
            <p className="font-body text-xl text-cream/90 mb-4">
              Your kindness isn't weakness.
            </p>
            <p className="font-display text-2xl text-gradient-romantic">
              It's your superpower.
            </p>
            <p className="font-script text-xl text-champagne mt-4">
              And I will spend my life protecting it. 🛡️💕
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 3.5 }}
        >
          <NavigationButton onClick={onNext}>
            Your strength completes the picture
          </NavigationButton>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Page15_YourHeart;
