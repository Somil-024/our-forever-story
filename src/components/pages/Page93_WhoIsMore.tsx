import { useState } from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import FloatingHearts from "@/components/FloatingHearts";

interface Page93Props {
  onNext: () => void;
  onBackToStory: (pageNum: number) => void;
}

const Page93_WhoIsMore = ({ onNext, onBackToStory }: Page93Props) => {
  const [answered, setAnswered] = useState<{ [key: number]: boolean }>({});

  const questions = [
    { id: 1, text: "Kaun possessive?", options: ["Tum", "Main", "Dono ✓"] },
    { id: 2, text: "Kaun pehle mana leta?", options: ["Tum", "Main", "Dono ✓"] },
  ];

  const handleAnswer = (questionId: number) => {
    setAnswered((prev) => ({
      ...prev,
      [questionId]: true,
    }));
  };

  const allAnswered = Object.keys(answered).length === questions.length;

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
          Kaun zyada…? 😏
        </motion.h1>

        <motion.div className="glass-card rounded-3xl p-8 md:p-12 mb-12"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}>
          
          <div className="space-y-8">
            {questions.map((question, idx) => (
              <motion.div
                key={question.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 + idx * 0.2 }}
                className="space-y-4">
                <p className="font-body text-lg text-cream/90">
                  {question.text}
                </p>
                <div className="grid grid-cols-3 gap-3">
                  {question.options.map((option) => (
                    <button
                      key={option}
                      onClick={() => handleAnswer(question.id)}
                      className={`px-4 py-3 rounded-lg font-display text-sm transition-all ${
                        answered[question.id]
                          ? "bg-gradient-to-r from-lavender to-lavender-dark text-white shadow-glow"
                          : "bg-lavender/30 text-cream/80 hover:shadow-glow"
                      }`}>
                      {option}
                    </button>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {allAnswered && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-8 p-6 bg-gradient-to-r from-lavender/20 to-lavender-dark/20 rounded-2xl">
              <p className="font-body text-xl text-cream/90 font-semibold">
                Jo bhi ho, hum ek dusre ke bina nahi reh sakte 💑
              </p>
            </motion.div>
          )}
        </motion.div>

        <motion.div className="flex flex-col gap-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 2.5 }}>
          <button
            onClick={() => onBackToStory(28)}
            className="px-8 py-4 bg-gradient-to-r from-lavender to-lavender-dark rounded-full font-display text-cream hover:shadow-glow transition-all">
            Back to Story → Page 28
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Page93_WhoIsMore;
