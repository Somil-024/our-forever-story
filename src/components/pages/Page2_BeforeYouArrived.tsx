import { motion } from "framer-motion";
import NavigationButton from "@/components/NavigationButton";
import TwinklingStars from "@/components/TwinklingStars";

interface PageProps {
  onNext: () => void;
}

const Page2_BeforeYouArrived = ({ onNext }: PageProps) => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6">
      <TwinklingStars />
      
      {/* Grayscale to color effect overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-transparent pointer-events-none"
        initial={{ opacity: 0.8 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 4, delay: 1 }}
      />
      
      <motion.div
        className="relative z-10 text-center max-w-4xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Title */}
        <motion.h1
          className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-gradient-romantic"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          The gray world,
        </motion.h1>
        <motion.h2
          className="font-script text-3xl md:text-5xl text-lavender mb-12"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          waiting for color
        </motion.h2>

        {/* Content */}
        <motion.div
          className="glass-card rounded-3xl p-8 md:p-12 mb-12 text-left"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <p className="font-body text-xl md:text-2xl text-cream/90 leading-relaxed mb-8">
            Before you, my days were... functional.
            <br />
            I woke up. I worked. I lived. But I wasn't <em className="text-lavender">living</em>, you know?
          </p>

          <p className="font-display text-xl text-blush-light mb-6">
            The world was in shades of gray:
          </p>

          <ul className="space-y-4 font-body text-lg">
            {[
              { icon: "☀️", text: "Mornings were just mornings", color: "text-cream/60" },
              { icon: "🎧", text: "Music was just sound", color: "text-cream/65" },
              { icon: "⏳", text: "Days were just passing", color: "text-cream/70" },
              { icon: "😊", text: "Smiles were polite, not genuine", color: "text-cream/75" },
              { icon: "🚶", text: "Life was movement without meaning", color: "text-cream/80" },
            ].map((item, index) => (
              <motion.li
                key={index}
                className={`flex items-center gap-3 ${item.color}`}
                initial={{ x: -20, opacity: 0, filter: "grayscale(100%)" }}
                animate={{ x: 0, opacity: 1, filter: "grayscale(0%)" }}
                transition={{ delay: 1 + index * 0.3, duration: 0.8 }}
              >
                <span className="text-2xl">{item.icon}</span>
                <span>{item.text}</span>
              </motion.li>
            ))}
          </ul>

          <motion.div
            className="mt-10 space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.8 }}
          >
            <p className="font-body text-xl text-cream/80">
              I didn't know I was incomplete.
              <br />
              I thought I was fine.
            </p>
            <p className="font-display text-2xl text-blush">
              But fine isn't <em>good</em>, baby.
            </p>
            <motion.p
              className="font-body text-xl text-champagne pt-4"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ delay: 3.5, type: "spring" }}
            >
              And then you happened.
              <br />
              And suddenly, <span className="text-gradient-romantic font-semibold">everything made sense.</span> 💝
            </motion.p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 4 }}
        >
          <NavigationButton onClick={onNext}>
            The moment you changed everything
          </NavigationButton>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Page2_BeforeYouArrived;
