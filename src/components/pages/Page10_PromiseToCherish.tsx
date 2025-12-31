import { motion } from "framer-motion";
import { Coffee, Film, Sunrise, Heart } from "lucide-react";
import NavigationButton from "@/components/NavigationButton";
import TwinklingStars from "@/components/TwinklingStars";

interface PageProps {
  onNext: () => void;
}

const moments = [
  { icon: Coffee, text: "A coffee date with you > fancy dinner without you" },
  { icon: Film, text: "A silent moment with you > crowded party without you" },
  { icon: Sunrise, text: "A normal day with you > holiday without you" },
];

const Page10_PromiseToCherish = ({ onNext }: PageProps) => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 py-20">
      <TwinklingStars />
      
      {/* Glowing moments timeline */}
      <motion.div
        className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-blush/30 to-transparent"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 2 }}
      />
      
      <motion.div
        className="relative z-10 text-center max-w-4xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="mb-8"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring" }}
        >
          <Heart className="w-16 h-16 text-blush fill-blush/50 mx-auto animate-heartbeat" />
        </motion.div>

        <motion.h1
          className="font-display text-4xl md:text-6xl font-bold mb-4 text-gradient-romantic glow-text"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Every moment,
        </motion.h1>
        <motion.h2
          className="font-script text-3xl md:text-4xl text-lavender mb-12"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          every day, every year
        </motion.h2>

        {/* Main content */}
        <motion.div
          className="glass-card rounded-3xl p-8 md:p-12 mb-12"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <p className="font-body text-xl md:text-2xl text-cream/90 leading-relaxed mb-8">
            Baby, I don't know what the future holds.
            <br />
            But I know one thing for certain:
            <br />
            <span className="text-champagne font-semibold">Every moment with you will be treasured.</span>
          </p>

          <motion.div
            className="space-y-6 mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <p className="font-body text-lg text-cream/80">
              Whether we're doing something <em className="text-lavender">extraordinary</em> or something <em className="text-blush">ordinary</em> —
              <br />
              It's extraordinary because <span className="text-champagne">you're there</span>.
            </p>
          </motion.div>

          <div className="space-y-4">
            {moments.map((moment, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-4 bg-midnight/40 rounded-xl p-4"
                initial={{ x: index % 2 === 0 ? -30 : 30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 2 + index * 0.3 }}
              >
                <moment.icon className="w-8 h-8 text-blush flex-shrink-0" />
                <p className="font-body text-lg text-cream/90">{moment.text}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-10 pt-8 border-t border-blush/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3 }}
          >
            <p className="font-body text-xl text-cream/80 mb-4">
              Because it's not about the <em>activity</em>.
            </p>
            <p className="font-display text-2xl text-gradient-romantic">
              It's about the <span className="underline decoration-champagne">person</span>. 💝
            </p>
            <p className="font-script text-2xl text-champagne mt-4">
              And that person is you, sweetheart. Always you. 🌹
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 3.5 }}
        >
          <NavigationButton onClick={onNext}>
            Now let's celebrate the beautiful year we lived
          </NavigationButton>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Page10_PromiseToCherish;
