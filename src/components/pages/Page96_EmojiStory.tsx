import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import FloatingHearts from "@/components/FloatingHearts";

interface Page96Props {
  onNext: () => void;
  onBackToStory: (pageNum: number) => void;
}

const Page96_EmojiStory = ({ onNext, onBackToStory }: Page96Props) => {
  const emojiStoryExamples = [
    "🌅 ☕ 😂 🎬 🥰 🌙",
    "🎒 🚗 🏕️ 🔥 ✨ 💑",
    "🍕 🎥 🚶 🌃 😴 💭",
    "🎵 🎧 🚗 🌌 🤫 💕"
  ];

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
          Emoji se hamari kahani 🤭
        </motion.h1>

        <motion.div className="glass-card rounded-3xl p-8 md:p-12 mb-12"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}>
          
          <p className="font-body text-lg text-cream/90 mb-8">
            Yaha hamari kahani emoji se likhi hai. Tum apni favorite choose karo aur WhatsApp pe mujhe bhejna! 📱
          </p>

          <div className="space-y-4">
            {emojiStoryExamples.map((story, idx) => (
              <motion.button
                key={idx}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.3 + idx * 0.1 }}
                onClick={() => {
                  navigator.clipboard.writeText(story);
                  alert("Emoji story copied! Ab WhatsApp pe bhejna 😊");
                }}
                className="w-full px-6 py-4 bg-lavender/30 hover:bg-gradient-to-r hover:from-blush/30 hover:to-love-red/30 rounded-xl font-body text-2xl transition-all transform hover:scale-105">
                {story}
              </motion.button>
            ))}
          </div>

          <p className="font-body text-sm text-cream/60 mt-6">
            Click to copy aur WhatsApp pe share karo! 💌
          </p>
        </motion.div>

        <motion.div className="flex flex-col gap-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 2.5 }}>
          <button
            onClick={() => onBackToStory(61)}
            className="px-8 py-4 bg-gradient-to-r from-lavender to-blush rounded-full font-display text-midnight-deep hover:shadow-glow transition-all">
            Back to Story → Page 61
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Page96_EmojiStory;
