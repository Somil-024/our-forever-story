import { motion } from "framer-motion";
import { Gamepad2, Heart } from "lucide-react";
import FloatingHearts from "@/components/FloatingHearts";

interface Page99Props {
  onNext: () => void;
  onGameClick: (pageNum: number) => void;
}

const Page99_GameHub = ({ onNext, onGameClick }: Page99Props) => {
  const games = [
    { page: 91, title: "Love Meter", emoji: "💘" },
    { page: 92, title: "Will You Choose Me?", emoji: "🤍" },
    { page: 93, title: "Who Is More?", emoji: "😏" },
    { page: 94, title: "Truth or Dare", emoji: "💋" },
    { page: 95, title: "Compliment Generator", emoji: "😌" },
    { page: 96, title: "Emoji Story", emoji: "🤭" },
    { page: 97, title: "Future Picker", emoji: "🔮" },
    { page: 98, title: "Guess My Answer", emoji: "🧠" },
  ];

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 py-20">
      <FloatingHearts />
      <motion.div className="relative z-10 max-w-4xl mx-auto w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}>
        
        <motion.div className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}>
          <motion.div className="flex justify-center gap-3 mb-6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring" }}>
            <Gamepad2 className="w-10 h-10 text-blush" />
            <Heart className="w-10 h-10 text-love-red" />
            <Gamepad2 className="w-10 h-10 text-lavender" />
          </motion.div>

          <motion.h1 className="font-display text-5xl md:text-6xl font-bold mb-4 text-gradient-romantic"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}>
            Game Zone Complete Collection 🎮
          </motion.h1>

          <motion.p className="font-body text-xl text-cream/80"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}>
            Saari games ek jagah! Pick any game to play 💕
          </motion.p>
        </motion.div>

        <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}>
          {games.map((game, idx) => (
            <motion.button
              key={game.page}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.1 + idx * 0.05 }}
              onClick={() => onGameClick(game.page)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-4 bg-gradient-to-br from-blush/20 to-love-red/20 hover:from-blush/40 hover:to-love-red/40 rounded-2xl transition-all group">
              <div className="text-4xl mb-2 group-hover:scale-125 transition-transform">
                {game.emoji}
              </div>
              <p className="font-display text-sm text-cream/90 group-hover:text-cream">
                {game.title}
              </p>
            </motion.button>
          ))}
        </motion.div>

        <motion.div className="glass-card rounded-3xl p-8 text-center"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 2 }}>
          <p className="font-body text-lg text-cream/90 mb-8">
            Sab games khel liye? Chalo story khatam karte hain! 📖💕
          </p>
          <button
            onClick={onNext}
            className="px-8 py-4 bg-gradient-to-r from-blush to-love-red rounded-full font-display text-white hover:shadow-glow transition-all transform hover:scale-105">
            Finish Games → Page 100
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Page99_GameHub;
