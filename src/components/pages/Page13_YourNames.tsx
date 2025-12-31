import { motion } from "framer-motion";
import { Heart, Crown, Sun, Sparkles, Star } from "lucide-react";
import NavigationButton from "@/components/NavigationButton";
import TwinklingStars from "@/components/TwinklingStars";

interface PageProps {
  onNext: () => void;
}

const names = [
  { name: "Aditi", meaning: "Your real name, your true self, the person I fell for", icon: Star },
  { name: "Princess", meaning: "Because royalty deserves only the best, and that's you", icon: Crown },
  { name: "Sunshine", meaning: "You light up my darkest days", icon: Sun },
  { name: "Gulab Jamun", meaning: "Sweet, warm, irresistible to my heart", icon: Heart },
  { name: "Kaju Katli", meaning: "Delicate but precious, worth protecting", icon: Sparkles },
  { name: "Baby", meaning: "My favorite word, because it feels like home", icon: Heart },
  { name: "Betu", meaning: "Intimacy, closeness, deep connection", icon: Heart },
  { name: "Sweetheart", meaning: "How my heart calls you in quiet moments", icon: Heart },
  { name: "Jiglar Nata", meaning: "My everything, literally and figuratively", icon: Star },
  { name: "Chotu", meaning: "Small in size, infinite in impact", icon: Sparkles },
  { name: "Naate Motu", meaning: "Cute and silly, making me laugh endlessly", icon: Heart },
  { name: "Girgit", meaning: "You change moods, but I love all your colors", icon: Sun },
  { name: "Love", meaning: "The simplest, truest name", icon: Heart },
  { name: "Mine", meaning: "Because you are, completely and forever", icon: Crown },
];

const Page13_YourNames = ({ onNext }: PageProps) => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 py-20">
      <TwinklingStars />
      
      <motion.div
        className="relative z-10 text-center max-w-5xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="font-display text-4xl md:text-6xl font-bold mb-4 text-gradient-romantic glow-text"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          The names I call you
        </motion.h1>
        <motion.h2
          className="font-script text-2xl md:text-4xl text-lavender mb-12"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          and why each one matters
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          {names.map((item, index) => (
            <motion.div
              key={index}
              className="glass-card rounded-xl p-4 text-left flex items-start gap-3"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1 + index * 0.1 }}
              whileHover={{ scale: 1.02, boxShadow: "0 0 25px hsl(330, 70%, 75%, 0.3)" }}
            >
              <item.icon className="w-6 h-6 text-blush flex-shrink-0 mt-1" />
              <div>
                <p className="font-display text-lg text-champagne">{item.name}</p>
                <p className="font-body text-sm text-cream/70">{item.meaning}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 3 }}
        >
          <NavigationButton onClick={onNext}>
            Now let me tell you your beautiful qualities
          </NavigationButton>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Page13_YourNames;
