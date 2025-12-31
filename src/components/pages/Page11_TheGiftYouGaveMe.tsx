import { motion } from "framer-motion";
import { Gift, Heart, Sparkles, Star, Home, Eye, Shield, Sunrise, Target } from "lucide-react";
import NavigationButton from "@/components/NavigationButton";
import TwinklingStars from "@/components/TwinklingStars";

interface PageProps {
  onNext: () => void;
}

const gifts = [
  { icon: Sunrise, text: "A reason to wake up", color: "text-champagne" },
  { icon: Target, text: "A purpose to be better", color: "text-lavender" },
  { icon: Heart, text: "A person to be authentic with", color: "text-blush" },
  { icon: Shield, text: "A safe place to be vulnerable", color: "text-cream" },
  { icon: Star, text: "A companion in solitude", color: "text-champagne" },
  { icon: Sparkles, text: "A believer in my dreams", color: "text-lavender" },
  { icon: Eye, text: "A mirror to see my best self", color: "text-blush" },
  { icon: Home, text: "A home in human form", color: "text-cream" },
  { icon: Gift, text: "A future worth fighting for", color: "text-champagne" },
];

const Page11_TheGiftYouGaveMe = ({ onNext }: PageProps) => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 py-20">
      <TwinklingStars />
      
      <motion.div
        className="relative z-10 text-center max-w-4xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="mb-8"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.3, type: "spring" }}
        >
          <Gift className="w-20 h-20 text-champagne mx-auto" />
        </motion.div>

        <motion.h1
          className="font-display text-4xl md:text-6xl font-bold mb-4 text-gradient-romantic glow-text"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          What you've given me
        </motion.h1>
        <motion.h2
          className="font-script text-2xl md:text-4xl text-lavender mb-12"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          (besides love)
        </motion.h2>

        <motion.p
          className="font-body text-xl text-cream/80 mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          You didn't just give me love, betu. You gave me so much more:
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
        >
          {gifts.map((gift, index) => (
            <motion.div
              key={index}
              className="glass-card rounded-2xl p-5 flex items-center gap-3"
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.5 + index * 0.15 }}
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px hsl(330, 70%, 75%, 0.3)" }}
            >
              <gift.icon className={`w-7 h-7 ${gift.color} flex-shrink-0`} />
              <p className={`font-body text-lg ${gift.color}`}>{gift.text}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="glass-card rounded-3xl p-8 mb-12"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 3.5 }}
        >
          <p className="font-body text-xl text-cream/90 mb-4">
            You gave me <span className="text-champagne">everything</span>, and you did it without even trying.
          </p>
          <p className="font-script text-2xl text-blush">
            So thank you, my love. Thank you for being exactly who you are. 🙏💕
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 4 }}
        >
          <NavigationButton onClick={onNext}>
            Now let me take you to the heart of our story
          </NavigationButton>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Page11_TheGiftYouGaveMe;
