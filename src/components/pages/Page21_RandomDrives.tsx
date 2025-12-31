import { motion } from "framer-motion";
import { Car, Music, MapPin } from "lucide-react";
import NavigationButton from "@/components/NavigationButton";
import FloatingHearts from "@/components/FloatingHearts";

interface PageProps {
  onNext: () => void;
}

const drives = [
  { emoji: "🛣️", text: "Windows down, music loud" },
  { emoji: "🛣️", text: "Your hand on my thigh (or holding mine)" },
  { emoji: "🛣️", text: "Singing off-key together" },
  { emoji: "🛣️", text: "Random deep conversations" },
  { emoji: "🛣️", text: "Stopping at unexpected places" },
  { emoji: "🛣️", text: "Taking blurry selfies with silly faces" },
  { emoji: "🛣️", text: "Getting lost and not caring" },
  { emoji: "🛣️", text: "Every moment feeling like an adventure" },
];

const Page21_RandomDrives = ({ onNext }: PageProps) => {
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
          <Car className="w-14 h-14 text-lavender" />
          <Music className="w-12 h-12 text-champagne" />
        </motion.div>

        <motion.h1
          className="font-display text-4xl md:text-5xl font-bold mb-4 text-gradient-romantic glow-text"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Random Drives
        </motion.h1>
        <motion.h2
          className="font-script text-2xl md:text-3xl text-champagne mb-12"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          No destination, just you and me
        </motion.h2>

        <motion.div
          className="glass-card rounded-3xl p-8 md:p-12 mb-12"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <p className="font-body text-xl text-cream/90 mb-8">
            Some of our best moments happened on roads to nowhere.
          </p>
          <p className="font-body text-lg text-cream/80 mb-8">
            We'd get in the car with no plan:
          </p>

          <motion.div
            className="mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <div className="space-y-3">
              {drives.map((drive, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-4 bg-midnight/40 rounded-xl p-4"
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1.7 + index * 0.12 }}
                >
                  <span className="text-2xl">{drive.emoji}</span>
                  <p className="font-body text-cream/90 text-left">{drive.text}</p>
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
            <p className="font-body text-xl text-cream/90 mb-4">
              Those drives taught me that the destination doesn't matter.
            </p>
            <p className="font-body text-xl text-champagne font-semibold">
              What matters is the person sitting next to you. 🚗💕
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 3.7 }}
        >
          <NavigationButton onClick={onNext}>
            Every place became special because you were there →
          </NavigationButton>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Page21_RandomDrives;
