import { motion } from "framer-motion";
import { Calendar, Star, Sparkles } from "lucide-react";
import NavigationButton from "@/components/NavigationButton";
import TwinklingStars from "@/components/TwinklingStars";

interface PageProps {
  onNext: () => void;
}

const yearHighlights = [
  { icon: "🌟", text: "A year of discovery (learning who you are)" },
  { icon: "🌟", text: "A year of wonder (believing in us)" },
  { icon: "🌟", text: "A year of warmth (feeling your presence)" },
  { icon: "🌟", text: "A year of growth (becoming better because of you)" },
  { icon: "🌟", text: "A year of hope (dreaming about forever with you)" },
];

const Page8_TheYearYouArrived = ({ onNext }: PageProps) => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 py-20">
      <TwinklingStars />
      
      {/* Calendar flip animation background */}
      <motion.div
        className="absolute top-1/4 left-1/2 -translate-x-1/2"
        initial={{ rotateX: 0 }}
        animate={{ rotateX: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <Calendar className="w-32 h-32 text-blush/20" />
      </motion.div>
      
      <motion.div
        className="relative z-10 text-center max-w-4xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Year display */}
        <motion.div
          className="mb-8"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, type: "spring" }}
        >
          <span className="font-display text-8xl md:text-9xl font-bold text-gradient-romantic glow-text">
            2024
          </span>
        </motion.div>

        <motion.h1
          className="font-display text-3xl md:text-5xl font-bold mb-4 text-champagne"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          The Year You Arrived
        </motion.h1>
        <motion.h2
          className="font-script text-2xl md:text-3xl text-lavender mb-12"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          The year everything changed
        </motion.h2>

        {/* Main content */}
        <motion.div
          className="glass-card rounded-3xl p-8 md:p-12 mb-12 text-left"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <p className="font-body text-xl md:text-2xl text-cream/90 leading-relaxed mb-8 text-center">
            2024 will forever be special — not because of the date, 
            <br />
            but because of the <span className="text-blush">person</span> who arrived.
          </p>

          <motion.div
            className="space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
          >
            <p className="font-display text-xl text-blush-light mb-6 text-center">
              That year was:
            </p>
            
            <div className="space-y-4">
              {yearHighlights.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-4 bg-midnight/40 rounded-xl p-4"
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1.5 + index * 0.2 }}
                >
                  <motion.span
                    className="text-2xl"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                  >
                    {item.icon}
                  </motion.span>
                  <span className="font-body text-lg text-cream/90">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="mt-10 pt-8 border-t border-blush/20 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.8 }}
          >
            <p className="font-display text-2xl text-champagne">
              2024 wasn't just a year.
            </p>
            <p className="font-script text-3xl text-gradient-romantic mt-2">
              It was the beginning of everything. 🎬
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 3.2 }}
        >
          <NavigationButton onClick={onNext}>
            And then 2025 arrived...
          </NavigationButton>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Page8_TheYearYouArrived;
