import { useState } from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import NavigationButton from "@/components/NavigationButton";
import FloatingHearts from "@/components/FloatingHearts";

interface Page91Props {
  onNext: () => void;
  onBackToStory: (pageNum: number) => void;
}

const Page91_LoveMeter = ({ onNext, onBackToStory }: Page91Props) => {
  const [clicked, setClicked] = useState(false);
  const [result, setResult] = useState("");

  const results = [
    "100% se zyada! System overload 😍",
    "Error 404: Low love not found 😂",
    "Tum officially meri ho 💘",
    "Infinity % + 1 💕",
    "My heart can't even calculate 🥰"
  ];

  const checkLoveMeter = () => {
    const randomResult = results[Math.floor(Math.random() * results.length)];
    setResult(randomResult);
    setClicked(true);
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
          Kitna pyaar karti ho? 😂
        </motion.h1>

        <motion.p className="font-script text-2xl md:text-3xl text-champagne mb-12"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}>
          Yaha totally scientific Love Meter hai (always 100% for you)
        </motion.p>

        <motion.div className="glass-card rounded-3xl p-8 md:p-12 mb-12"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}>
          
          <button
            onClick={checkLoveMeter}
            className="w-full px-8 py-6 bg-gradient-to-r from-blush to-love-red rounded-full font-display text-xl text-white hover:shadow-glow transition-all transform hover:scale-105 active:scale-95">
            Check Love % 💘
          </button>

          {clicked && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-8 p-6 bg-gradient-to-r from-blush/20 to-love-red/20 rounded-2xl">
              <p className="font-body text-xl text-cream/90 font-semibold">
                {result}
              </p>
            </motion.div>
          )}
        </motion.div>

        <motion.div className="flex flex-col gap-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 2.5 }}>
          <button
            onClick={() => onBackToStory(13)}
            className="px-8 py-4 bg-gradient-to-r from-lavender to-blush rounded-full font-display text-midnight-deep hover:shadow-glow transition-all">
            Back to Story → Page 13
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Page91_LoveMeter;
