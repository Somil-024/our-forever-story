import { useState } from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import FloatingHearts from "@/components/FloatingHearts";

interface Page98Props {
  onNext: () => void;
  onBackToStory: (pageNum: number) => void;
}

const Page98_GuessMyAnswer = ({ onNext, onBackToStory }: Page98Props) => {
  const [selected, setSelected] = useState<string | null>(null);
  const [answered, setAnswered] = useState(false);

  const options = [
    { text: "Tum cute ho", emoji: "🥰" },
    { text: "Tum meri jaan ho", emoji: "💘" }
  ];

  const handleAnswer = (option: string) => {
    setSelected(option);
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
          Guess karo main kya sochta hoon 🧠
        </motion.h1>

        <motion.div className="glass-card rounded-3xl p-8 md:p-12 mb-12"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}>
          
          <div className="space-y-4">
            {options.map((option, idx) => (
              <motion.button
                key={option.text}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + idx * 0.1 }}
                onClick={() => handleAnswer(option.text)}
                disabled={answered}
                className={`w-full px-8 py-6 rounded-full font-display text-lg transition-all transform hover:scale-105 active:scale-95 ${
                  selected === option.text
                    ? "bg-gradient-to-r from-blush to-love-red text-white shadow-glow"
                    : "bg-lavender/30 text-cream/80 hover:shadow-glow"
                } ${answered ? "opacity-75" : ""}`}>
                <div className="text-2xl mb-2">{option.emoji}</div>
                {option.text}
              </motion.button>
            ))}
          </div>

          {answered && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-8 p-6 bg-gradient-to-r from-blush/20 to-love-red/20 rounded-2xl">
              <p className="font-body text-xl text-cream/90 font-bold leading-relaxed">
                Are Betu Itna Kya sochna tum dono ho Aur mai sirf tumhare baare m sochta hu 💕
              </p>
            </motion.div>
          )}
        </motion.div>

        <motion.div className="flex flex-col gap-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 2.5 }}>
          <button
            onClick={() => onBackToStory(86)}
            className="px-8 py-4 bg-gradient-to-r from-lavender to-blush rounded-full font-display text-midnight-deep hover:shadow-glow transition-all">
            Back to Story → Page 86
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Page98_GuessMyAnswer;
