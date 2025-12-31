import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";
import NavigationButton from "@/components/NavigationButton";
import FloatingHearts from "@/components/FloatingHearts";
import TwinklingStars from "@/components/TwinklingStars";

interface Page1Props {
  onNext: () => void;
}

const Page1_EntranceCeremony = ({ onNext }: Page1Props) => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6">
      <FloatingHearts />
      <TwinklingStars />
      
      {/* Radial glow background */}
      <div className="absolute inset-0 bg-gradient-glow pointer-events-none" />
      
      {/* Main content */}
      <motion.div
        className="relative z-10 text-center max-w-4xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        {/* Decorative hearts */}
        <motion.div
          className="flex justify-center gap-4 mb-8"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <Heart className="w-6 h-6 text-blush/60 fill-blush/60 animate-float" />
          <Sparkles className="w-8 h-8 text-champagne animate-twinkle" />
          <Heart className="w-6 h-6 text-lavender/60 fill-lavender/60 animate-float delay-200" />
        </motion.div>

        {/* Main title */}
        <motion.h1
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 glow-text"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <span className="text-gradient-romantic">Happy New Year,</span>
          <br />
          <span className="text-champagne">Baby</span>
          <motion.span
            className="inline-block ml-2"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            ❤️
          </motion.span>
        </motion.h1>

        {/* Hindi subtitle */}
        <motion.p
          className="font-script text-2xl md:text-3xl text-lavender mb-12 italic"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          "Tum meri zindagi ka wo hissa ho jo sab kuch thoda zyada khoobsurat bana deta hai."
        </motion.p>

        {/* Content card */}
        <motion.div
          className="glass-card rounded-3xl p-8 md:p-12 mb-12 text-left"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <p className="font-body text-xl md:text-2xl text-cream/90 leading-relaxed mb-8">
            In the grand tapestry of my life, 2024 was the chapter where an angel entered.
            Not with fanfare. Not with announcements.
            Just quietly, gently, with a smile that changed everything.
          </p>

          <p className="font-display text-xl text-blush-light mb-6">
            Your arrival felt like:
          </p>

          <ul className="space-y-3 font-body text-lg text-cream/80">
            {[
              { icon: "🎵", text: "A song I didn't know I needed to hear" },
              { icon: "💡", text: "A light finding darkness" },
              { icon: "🧩", text: "A puzzle piece clicking into place" },
              { icon: "🌬️", text: "A breath I'd been holding finally being released" },
              { icon: "🏠", text: "Home, when I didn't even know I was lost" },
            ].map((item, index) => (
              <motion.li
                key={index}
                className="flex items-center gap-3"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.3 + index * 0.15 }}
              >
                <span className="text-2xl">{item.icon}</span>
                <span>{item.text}</span>
              </motion.li>
            ))}
          </ul>

          <motion.p
            className="font-body text-xl text-cream mt-8 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2 }}
          >
            From that moment, betu, my life gained a new meaning. And that meaning is:{" "}
            <span className="text-champagne font-semibold">You.</span> 💫
          </motion.p>
        </motion.div>

        {/* Navigation button */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 2.5 }}
        >
          <NavigationButton onClick={onNext}>
            Let me take you through my heart
          </NavigationButton>
        </motion.div>
      </motion.div>

      {/* Bottom decoration */}
      <motion.div
        className="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
      >
        <span className="text-blush/40 text-sm font-body">Scroll or click to continue</span>
      </motion.div>
    </div>
  );
};

export default Page1_EntranceCeremony;
