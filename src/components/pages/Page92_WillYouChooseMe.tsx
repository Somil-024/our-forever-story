import { useState } from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import NavigationButton from "@/components/NavigationButton";
import FloatingHearts from "@/components/FloatingHearts";

interface Page92Props {
  onNext: () => void;
  onBackToStory: (pageNum: number) => void;
}

const Page92_WillYouChooseMe = ({ onNext, onBackToStory }: Page92Props) => {
  const [answered, setAnswered] = useState(false);
  const [selectedChoice, setSelectedChoice] = useState<string | null>(null);

  const handleChoice = (choice: string) => {
    setSelectedChoice(choice);
    setAnswered(true);
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 py-20">
      <FloatingHearts />
      <motion.div className="relative z-10 text-center max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}>
        
        <motion.div className="mb-6 flex justify-center"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring" }}>
          <Heart className="w-14 h-14 text-love-red" />
        </motion.div>

        <motion.h1 className="font-display text-4xl md:text-5xl font-bold mb-4 text-gradient-romantic"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}>
          Phir se choose karogi mujhe? 😏
        </motion.h1>

        <motion.p className="font-script text-2xl md:text-3xl text-champagne mb-12"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}>
          Agar life restart ho jaaye?
        </motion.p>

        <motion.div className="glass-card rounded-3xl p-8 md:p-12 mb-12"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}>
          
          {!answered ? (
            <div className="flex flex-col gap-4">
              <button
                onClick={() => handleChoice("yes")}
                className="px-8 py-6 bg-gradient-to-r from-blush to-love-red rounded-full font-display text-lg text-white hover:shadow-glow transition-all transform hover:scale-105 active:scale-95">
                Haan, 100 baar 🤍
              </button>

              <motion.button
                id="noBtn"
                animate={{
                  x: [0, 20, -20, 0],
                }}
                transition={{
                  duration: 0.5,
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
                onClick={() => handleChoice("no")}
                className="px-8 py-6 bg-gradient-to-r from-lavender to-blush rounded-full font-display text-lg text-midnight-deep hover:shadow-glow transition-all">
                Nahi… (bhaagta rahega)
              </motion.button>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              <button
                onClick={() => handleChoice("yes")}
                disabled
                className="px-8 py-6 bg-gradient-to-r from-blush to-love-red rounded-full font-display text-lg text-white/50 transition-all opacity-50 cursor-not-allowed">
                Haan, 100 baar 🤍
              </button>

              <button
                disabled
                className={`px-8 py-6 rounded-full font-display text-lg transition-all opacity-50 cursor-not-allowed ${
                  selectedChoice === "no"
                    ? "bg-gradient-to-r from-lavender to-blush text-midnight-deep"
                    : "bg-gradient-to-r from-lavender to-blush text-midnight-deep"
                }`}>
                Nahi… (bhaagta rahega)
              </button>
            </div>
          )}

          {answered && selectedChoice === "yes" && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-8 p-6 bg-gradient-to-r from-blush/20 to-love-red/20 rounded-2xl">
              <p className="font-body text-xl text-cream/90 font-semibold">
                Jaanta tha! Main bhi tumhe hi choose karunga 💕
              </p>
            </motion.div>
          )}
        </motion.div>

        <motion.div className="flex flex-col gap-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 2.5 }}>
          <button
            onClick={() => onBackToStory(21)}
            className="px-8 py-4 bg-gradient-to-r from-lavender to-blush rounded-full font-display text-midnight-deep hover:shadow-glow transition-all">
            Back to Story → Page 21
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Page92_WillYouChooseMe;
