import { motion } from "framer-motion";
import { Cloud, CloudRain, Heart } from "lucide-react";
import NavigationButton from "@/components/NavigationButton";
import FloatingHearts from "@/components/FloatingHearts";

interface PageProps {
  onNext: () => void;
}

const fights = [
  { emoji: "💔", text: "You were hurt, and I didn't understand why" },
  { emoji: "💔", text: "I reacted instead of listened" },
  { emoji: "💔", text: "Misunderstandings became walls between us" },
  { emoji: "💔", text: "I said things I regret" },
  { emoji: "💔", text: "You cried, and I felt helpless" },
  { emoji: "💔", text: "Distance crept in where there should be closeness" },
  { emoji: "💔", text: "I was selfish when you needed me to be selfless" },
];

const Page28_Fights = ({ onNext }: PageProps) => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 py-20">
      <FloatingHearts />
      
      <motion.div
        className="absolute inset-0 pointer-events-none"
      >
        <motion.div
          className="absolute top-20 left-10 text-6xl opacity-20"
          animate={{ y: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
        >
          ☁️
        </motion.div>
      </motion.div>
      
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
          <CloudRain className="w-14 h-14 text-lavender" />
          <Cloud className="w-12 h-12 text-cream/60" />
        </motion.div>

        <motion.h1
          className="font-display text-4xl md:text-5xl font-bold mb-4 text-gradient-romantic glow-text"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          When Love Meant Fighting
        </motion.h1>
        <motion.h2
          className="font-script text-2xl md:text-3xl text-champagne mb-12"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          When love meant fighting for each other
        </motion.h2>

        <motion.div
          className="glass-card rounded-3xl p-8 md:p-12 mb-12"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <p className="font-body text-xl text-cream/90 mb-8">
            Real love isn't always soft, sweetheart.
          </p>
          <p className="font-body text-lg text-cream/80 mb-8">
            Sometimes it means fighting.
          </p>

          <motion.div
            className="mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <p className="font-display text-lg text-lavender mb-4">We had fights where:</p>
            <div className="space-y-3">
              {fights.map((fight, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4 bg-midnight/40 rounded-xl p-4"
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1.7 + index * 0.12 }}
                >
                  <span className="text-2xl mt-1">{fight.emoji}</span>
                  <p className="font-body text-cream/90 text-left">{fight.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="pt-6 border-t border-blush/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.3 }}
          >
            <p className="font-body text-lg text-cream/90 mb-4">
              Those fights were painful.
            </p>
            <p className="font-body text-xl text-champagne font-semibold">
              But they taught us so much about love. 💔→💕
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 3.8 }}
        >
          <NavigationButton onClick={onNext}>
            Because we always chose to fix it →
          </NavigationButton>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Page28_Fights;
