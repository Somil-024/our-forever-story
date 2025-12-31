import { motion } from "framer-motion";
import { Utensils, Heart, MessageCircle, Laugh } from "lucide-react";
import NavigationButton from "@/components/NavigationButton";
import TwinklingStars from "@/components/TwinklingStars";

interface PageProps {
  onNext: () => void;
}

const memories = [
  { icon: Heart, text: "Me watching you wake up", color: "text-blush" },
  { icon: Laugh, text: "You slowly becoming yourself", color: "text-champagne" },
  { icon: MessageCircle, text: "Hours of conversation over spicy treats", color: "text-lavender" },
  { icon: Heart, text: "Comfortable silence", color: "text-blush" },
  { icon: Heart, text: "Your hand reaching for mine across the table", color: "text-champagne" },
  { icon: MessageCircle, text: "Plans made and dreams shared", color: "text-lavender" },
  { icon: Heart, text: "The world disappearing when you're in front of me", color: "text-blush" },
];

const Page19_PanipuriDates = ({ onNext }: PageProps) => {
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
          className="mb-6 flex justify-center gap-3"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring" }}
        >
          <Utensils className="w-14 h-14 text-champagne" />
          <Heart className="w-10 h-10 text-blush animate-heartbeat" />
        </motion.div>

        <motion.h1
          className="font-display text-4xl md:text-5xl font-bold mb-4 text-gradient-romantic glow-text"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          The Panipuri Dates
        </motion.h1>
        <motion.h2
          className="font-script text-2xl md:text-3xl text-champagne mb-12"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          Where it all felt real
        </motion.h2>

        <motion.div
          className="glass-card rounded-3xl p-8 md:p-12 mb-12"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <p className="font-body text-xl text-cream/90 mb-4">
            Do you remember our panipuri dates?
          </p>
          <p className="font-body text-lg text-cream/80 mb-8">
            Those early moments when you were still sleepy.
            <br />
            That grumpy face slowly transforming into a smile.
          </p>

          <motion.div
            className="mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <p className="font-display text-lg text-blush mb-4">
              Those weren't just about food. 🍽️
              <br />
              Those were about:
            </p>
            <div className="space-y-3">
              {memories.map((memory, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 bg-midnight/40 rounded-lg p-3"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1.7 + index * 0.15 }}
                >
                  <memory.icon className={`w-5 h-5 ${memory.color} flex-shrink-0`} />
                  <p className={`font-body ${memory.color}`}>{memory.text}</p>
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
            <p className="font-script text-xl text-champagne">
              Every street food stall became our place because you were there. 💑🍽️
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 3.5 }}
        >
          <NavigationButton onClick={onNext}>
            Then came the movie dates
          </NavigationButton>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Page19_PanipuriDates;
