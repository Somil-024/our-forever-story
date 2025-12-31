import { useState } from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import FloatingHearts from "@/components/FloatingHearts";

interface Page95Props {
  onNext: () => void;
  onBackToStory: (pageNum: number) => void;
}

const Page95_ComplimentGenerator = ({ onNext, onBackToStory }: Page95Props) => {
  const [currentCompliment, setCurrentCompliment] = useState("");
  const [showCompliment, setShowCompliment] = useState(false);

  const compliments = [
    "Tumhari smile illegal hai 😂",
    "Tum meri therapy ho 🥰",
    "Tum meri favorite distraction ho",
    "Tum perfect nahi par meri pasand ho",
    "Tum mere liye adequate+ ho 😌",
    "Tum sabse cute person ho jo mera naam bolti ho",
    "Tum jab haste ho sab sahi ho jata hai",
    "Tum mere liye everything ho",
    "Tum mujhe better version banati ho",
    "Tum jo bhi wear karo, usse style milta hai"
  ];

  const generateCompliment = () => {
    const random = compliments[Math.floor(Math.random() * compliments.length)];
    setCurrentCompliment(random);
    setShowCompliment(true);
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
          <Heart className="w-14 h-14 text-lavender" />
        </motion.div>

        <motion.h1 className="font-display text-4xl md:text-5xl font-bold mb-4 text-gradient-romantic"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}>
          Click karo, compliment lo 😌
        </motion.h1>

        <motion.div className="glass-card rounded-3xl p-8 md:p-12 mb-12"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}>
          
          <button
            onClick={generateCompliment}
            className="w-full px-8 py-6 bg-gradient-to-r from-lavender to-lavender-dark rounded-full font-display text-xl text-white hover:shadow-glow transition-all transform hover:scale-105 active:scale-95 mb-8">
            Compliment do 💕
          </button>

          {showCompliment && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="p-6 bg-gradient-to-r from-lavender/20 to-lavender-dark/20 rounded-2xl">
              <p className="font-body text-2xl text-cream/90 font-semibold">
                {currentCompliment}
              </p>
            </motion.div>
          )}
        </motion.div>

        <motion.div className="flex flex-col gap-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 2.5 }}>
          <button
            onClick={() => onBackToStory(46)}
            className="px-8 py-4 bg-gradient-to-r from-lavender to-lavender-dark rounded-full font-display text-cream hover:shadow-glow transition-all">
            Back to Story → Page 46
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Page95_ComplimentGenerator;
