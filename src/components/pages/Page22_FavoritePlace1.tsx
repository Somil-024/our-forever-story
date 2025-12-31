import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import NavigationButton from "@/components/NavigationButton";
import FloatingHearts from "@/components/FloatingHearts";

interface PageProps {
  onNext: () => void;
}

const qualities = [
  { emoji: "❄️", text: "Excited like a child seeing snow" },
  { emoji: "📸", text: "Beautiful in natural light" },
  { emoji: "😊", text: "Real and present with me" },
  { emoji: "😄", text: "Laughing at jokes no one else would find funny" },
  { emoji: "🌅", text: "Looking at the view (but I was looking at you)" },
];

const Page22_FavoritePlace1 = ({ onNext }: PageProps) => {
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
          <MapPin className="w-14 h-14 text-lavender" />
        </motion.div>

        <motion.h1
          className="font-display text-4xl md:text-5xl font-bold mb-4 text-gradient-romantic glow-text"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Our First Special Place
        </motion.h1>
        <motion.h2
          className="font-script text-2xl md:text-3xl text-champagne mb-12"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          The day that place became ours
        </motion.h2>

        <motion.div
          className="glass-card rounded-3xl p-8 md:p-12 mb-12"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <p className="font-body text-xl text-cream/90 mb-8">
            That day will stay with me forever.
          </p>

          <motion.div
            className="mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <p className="font-display text-lg text-lavender mb-4">You were:</p>
            <div className="space-y-3">
              {qualities.map((quality, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-4 bg-midnight/40 rounded-xl p-4"
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1.7 + index * 0.12 }}
                >
                  <span className="text-2xl">{quality.emoji}</span>
                  <p className="font-body text-cream/90 text-left">{quality.text}</p>
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
              It wasn't about the location.
            </p>
            <p className="font-body text-xl text-champagne font-semibold">
              It was about you there, experiencing it with me. 🌍💕
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 3.7 }}
        >
          <NavigationButton onClick={onNext}>
            Then we discovered this place →
          </NavigationButton>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Page22_FavoritePlace1;
