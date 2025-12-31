import { motion } from "framer-motion";
import { Heart, Flame, PuzzleIcon } from "lucide-react";
import NavigationButton from "@/components/NavigationButton";
import FloatingHearts from "@/components/FloatingHearts";

interface PageProps {
  onNext: () => void;
}

const loveWords = [
  "I love you",
  "Te amo", 
  "Je t'aime",
  "Ich liebe dich",
  "愛してる",
  "사랑해",
  "Σ'αγαπώ",
  "أحبك",
  "Я тебя люблю",
  "Ti amo",
  "我爱你",
];

const Page7_AdmittingTheLove = ({ onNext }: PageProps) => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 py-20">
      <FloatingHearts />
      
      {/* Fire background effect */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-40"
        style={{
          background: "linear-gradient(to top, hsl(330, 70%, 50%, 0.3) 0%, transparent 100%)",
        }}
        animate={{ opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      
      <motion.div
        className="relative z-10 text-center max-w-4xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Fire icon */}
        <motion.div
          className="flex justify-center mb-6"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", bounce: 0.5 }}
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <Flame className="w-16 h-16 text-blush fill-blush/50" />
          </motion.div>
        </motion.div>

        <motion.h1
          className="font-display text-4xl md:text-6xl font-bold mb-4 text-gradient-romantic glow-text"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          The day I couldn't
        </motion.h1>
        <motion.h2
          className="font-script text-3xl md:text-5xl text-champagne mb-12"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          hide it anymore
        </motion.h2>

        {/* "I love you" in many languages - floating */}
        <motion.div
          className="relative h-24 mb-8 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          {loveWords.map((word, index) => (
            <motion.span
              key={index}
              className="absolute font-script text-lg md:text-xl"
              style={{
                left: `${(index * 10) % 90}%`,
                color: index % 3 === 0 ? "hsl(330, 70%, 75%)" : index % 3 === 1 ? "hsl(270, 40%, 80%)" : "hsl(45, 70%, 80%)",
              }}
              initial={{ y: 100, opacity: 0 }}
              animate={{ 
                y: [-20, -60, -100],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 4,
                delay: index * 0.5,
                repeat: Infinity,
                repeatDelay: 3,
              }}
            >
              {word}
            </motion.span>
          ))}
        </motion.div>

        {/* Main content */}
        <motion.div
          className="glass-card rounded-3xl p-8 md:p-12 mb-12 text-left"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <div className="space-y-4 font-body text-xl text-cream/80 mb-8">
            <p>I tried to keep it inside.</p>
            <p>I tried to be casual.</p>
            <p>I tried to play it cool.</p>
            <p className="font-display text-2xl text-blush pt-4">
              But baby, you can't hide a fire that big. 🔥
            </p>
          </div>

          <motion.div
            className="bg-midnight/50 rounded-2xl p-6 border border-blush/20 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <p className="font-body text-lg text-cream/80 mb-4">
              There was a moment when I just <span className="text-champagne">looked</span> at you.
              <br />
              Really looked at you.
              <br />
              And every word I'd been holding back came rushing forward.
            </p>
          </motion.div>

          <motion.div
            className="space-y-3 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
          >
            <p className="font-display text-lg text-lavender">I wanted to say:</p>
            <div className="grid md:grid-cols-2 gap-2 font-body text-lg text-cream/90">
              {[
                "I love you.",
                "I love the way you think.",
                "I love your laugh.",
                "I love how you care.",
                "I love your strength.",
                "I love your vulnerability.",
                "I love you so much it scares me.",
                "I love you so much it completes me.",
              ].map((text, index) => (
                <motion.p
                  key={index}
                  className="flex items-center gap-2"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 2.2 + index * 0.1 }}
                >
                  <Heart className="w-4 h-4 text-blush fill-blush flex-shrink-0" />
                  {text}
                </motion.p>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="pt-8 border-t border-blush/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.2 }}
          >
            <p className="font-body text-lg text-cream/80 mb-4">
              And when I finally said it{" "}
              <span className="text-blush/60">(or when you said it first, because you always know before I do 😊)</span>,
              it felt like every puzzle piece of my life finally fit together.
            </p>
            <motion.div
              className="flex items-center justify-center gap-2"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <PuzzleIcon className="w-6 h-6 text-champagne" />
              <PuzzleIcon className="w-6 h-6 text-blush" />
              <PuzzleIcon className="w-6 h-6 text-lavender" />
            </motion.div>
            <p className="font-display text-2xl text-gradient-romantic text-center mt-6">
              I love you, baby.
            </p>
            <p className="font-body text-lg text-cream/80 text-center mt-2">
              Not because I have to.
              <br />
              Because I <span className="text-champagne font-semibold">choose</span> to. Every. Single. Day. 💕
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 3.8 }}
        >
          <NavigationButton onClick={onNext}>
            Now let me tell you about our journey through 2024
          </NavigationButton>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Page7_AdmittingTheLove;
