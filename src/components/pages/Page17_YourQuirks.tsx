import { motion } from "framer-motion";
import { Smile, Heart, Sparkles, Star } from "lucide-react";
import NavigationButton from "@/components/NavigationButton";
import TwinklingStars from "@/components/TwinklingStars";

interface PageProps {
  onNext: () => void;
}

const quirks = [
  { text: "The way you scrunch your nose when you laugh", emoji: "😊" },
  { text: "How you get excited about panipuri dates", emoji: "🥰" },
  { text: "When you pretend to be angry but can't hide your smile", emoji: "😤" },
  { text: "Your obsession with random facts and trivia", emoji: "🤓" },
  { text: "The way you react when I tease you", emoji: "😅" },
  { text: "How you zone out thinking about something deep", emoji: "💭" },
  { text: "Your random bursts of energy at midnight", emoji: "✨" },
];

const Page17_YourQuirks = ({ onNext }: PageProps) => {
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
          className="mb-6 flex justify-center gap-2"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring" }}
        >
          <Smile className="w-14 h-14 text-champagne" />
          <Sparkles className="w-10 h-10 text-lavender animate-pulse" />
        </motion.div>

        <motion.h1
          className="font-display text-4xl md:text-5xl font-bold mb-4 text-gradient-romantic glow-text"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Your Quirks
        </motion.h1>
        <motion.h2
          className="font-script text-2xl md:text-3xl text-champagne mb-12"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          The weird, wonderful things I absolutely adore
        </motion.h2>

        <motion.div
          className="glass-card rounded-3xl p-8 md:p-12 mb-12"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <p className="font-body text-xl text-cream/90 mb-8">
            Now, can we talk about your quirks? Because they're <span className="text-blush">my favorite</span>.
          </p>

          <div className="space-y-4 mb-10">
            {quirks.map((quirk, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-4 bg-midnight/40 rounded-xl p-4"
                initial={{ x: index % 2 === 0 ? -30 : 30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.3 + index * 0.2 }}
                whileHover={{ scale: 1.02 }}
              >
                <span className="text-2xl">{quirk.emoji}</span>
                <p className="font-body text-lg text-cream/90">{quirk.text}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="pt-6 border-t border-blush/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3 }}
          >
            <p className="font-body text-xl text-cream/90 mb-4">
              These aren't flaws, betu.
            </p>
            <p className="font-body text-xl text-cream/90 mb-4">
              These are the things that make you <span className="text-gradient-romantic font-semibold">you</span>.
            </p>
            <p className="font-display text-xl text-lavender mb-4">
              And I don't just love them — I treasure them.
            </p>
            <p className="font-script text-xl text-champagne flex items-center justify-center gap-2">
              Never change, never apologize for being authentically, beautifully, weirdly you.
              <Heart className="w-6 h-6 text-blush fill-blush" />
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 3.5 }}
        >
          <NavigationButton onClick={onNext}>
            Your beauty takes my breath away
          </NavigationButton>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Page17_YourQuirks;
