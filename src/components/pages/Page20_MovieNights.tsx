import { motion } from "framer-motion";
import { Film, Heart, Moon, Popcorn } from "lucide-react";
import NavigationButton from "@/components/NavigationButton";
import FloatingHearts from "@/components/FloatingHearts";

interface PageProps {
  onNext: () => void;
  onGameClick?: (pageNum: number) => void;
}

const memories = [
  { emoji: "🎬", text: "You crying at emotional scenes (and me holding you)" },
  { emoji: "😂", text: "You laughing at jokes (and forgetting to watch the movie)" },
  { emoji: "😴", text: "You dozing off (and looking absolutely peaceful)" },
  { emoji: "💬", text: "Your commentary on everything (which I loved more than the movie)" },
  { emoji: "🍿", text: "Sharing popcorn and sneaking extra without admitting it" },
  { emoji: "⏪", text: "Rewinding scenes because you were too busy talking" },
  { emoji: "❤️", text: "The way the movie didn't matter — just being with you mattered" },
];

const Page20_MovieNights = ({ onNext, onGameClick }: PageProps) => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 py-20">
      <FloatingHearts />
      
      {/* Cinema lights effect */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-midnight-deep/80 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      />
      
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
          <Film className="w-14 h-14 text-lavender" />
          <Popcorn className="w-12 h-12 text-champagne" />
        </motion.div>

        <motion.h1
          className="font-display text-4xl md:text-5xl font-bold mb-4 text-gradient-romantic glow-text"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Movie Nights
        </motion.h1>
        <motion.h2
          className="font-script text-2xl md:text-3xl text-champagne mb-12"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          Your head on my shoulder, my heart in your hands
        </motion.h2>

        <motion.div
          className="glass-card rounded-3xl p-8 md:p-12 mb-12"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <p className="font-body text-xl text-cream/90 mb-4">
            Movie nights with you were my favorite escape.
          </p>
          <p className="font-body text-lg text-cream/80 mb-8">
            Sometimes we watched. Sometimes we talked through the entire thing.
          </p>

          <motion.div
            className="mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <p className="font-display text-lg text-lavender mb-4">I remember:</p>
            <div className="space-y-3">
              {memories.map((memory, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-4 bg-midnight/40 rounded-xl p-4"
                  initial={{ x: index % 2 === 0 ? -30 : 30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1.7 + index * 0.15 }}
                >
                  <span className="text-2xl">{memory.emoji}</span>
                  <p className="font-body text-cream/90 text-left">{memory.text}</p>
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
              Those dark theaters are actually the <span className="text-champagne">brightest</span> moments of my life.
            </p>
            <p className="font-script text-xl text-lavender flex items-center justify-center gap-2">
              <Moon className="w-6 h-6" />
              💫🎭
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex flex-col gap-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 3.5 }}
        >
          <motion.div
            className="p-6 bg-gradient-to-r from-blush/10 to-love-red/10 rounded-2xl border border-blush/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.8 }}>
            <p className="font-body text-lg text-cream/90 mb-4">
              Yaadein dekh li? Ab choice time!
            </p>
            <button
              onClick={() => onGameClick?.(92)}
              className="w-full px-6 py-3 bg-gradient-to-r from-blush to-love-red rounded-full font-display text-white hover:shadow-glow transition-all transform hover:scale-105">
              Will You Choose Me Again? → Page 92
            </button>
          </motion.div>
          <NavigationButton onClick={onNext}>
            The spontaneous adventures were magical
          </NavigationButton>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Page20_MovieNights;
