import { motion } from "framer-motion";
import { Sparkles, Growth } from "lucide-react";
import NavigationButton from "@/components/NavigationButton";
import FloatingHearts from "@/components/FloatingHearts";

interface PageProps {
  onNext: () => void;
}

const commitments = [
  { emoji: "✨", text: "Listen with my whole heart" },
  { emoji: "✨", text: "React with understanding instead of emotion" },
  { emoji: "✨", text: "Show up completely" },
  { emoji: "✨", text: "Put us before myself" },
  { emoji: "✨", text: "Grow continuously" },
  { emoji: "✨", text: "Love you better every day" },
  { emoji: "✨", text: "Be the man you deserve" },
];

const Page35_CommitmentToGrowth = ({ onNext }: PageProps) => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 py-20">
      <FloatingHearts />
      
      <motion.div
        className="relative z-10 text-center max-w-4xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="mb-6 flex justify-center gap-3"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring" }}
        >
          <Sparkles className="w-14 h-14 text-lavender" />
          <Growth className="w-12 h-12 text-champagne" />
        </motion.div>

        <motion.h1
          className="font-display text-4xl md:text-5xl font-bold mb-4 text-gradient-romantic glow-text"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          My Commitment to Growth
        </motion.h1>
        <motion.h2
          className="font-script text-2xl md:text-3xl text-champagne mb-12"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          I'm not sorry for my potential, I'm sorry for not using it
        </motion.h2>

        <motion.div
          className="glass-card rounded-3xl p-8 md:p-12 mb-12"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <motion.div
            className="mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <p className="font-body text-lg text-cream/90 mb-8">
              But here's the thing, baby:
            </p>
            <p className="font-body text-lg text-cream/90 mb-4">
              I'm not broken. I'm not unlovable. I'm not hopeless.
            </p>
            <p className="font-body text-lg text-blush font-semibold">
              I'm just learning.
            </p>
          </motion.div>

          <motion.div
            className="my-8 py-6 bg-gradient-to-r from-blush/20 to-lavender/20 rounded-2xl"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 2 }}
          >
            <p className="font-display text-lg text-lavender mb-2">
              And I'm learning to be better for you.
            </p>
          </motion.div>

          <motion.div
            className="mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5 }}
          >
            <p className="font-display text-lg text-lavender mb-4">From now on, I promise to:</p>
            <div className="space-y-3">
              {commitments.map((commitment, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-4 bg-midnight/40 rounded-xl p-4"
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 2.7 + index * 0.12 }}
                >
                  <span className="text-2xl">{commitment.emoji}</span>
                  <p className="font-body text-cream/90">{commitment.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="pt-6 border-t border-blush/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.5 }}
          >
            <p className="font-body text-lg text-cream/90 mb-4">
              This isn't a promise I'm making because I have to.
            </p>
            <p className="font-body text-xl text-champagne font-semibold">
              It's a promise I'm making because you're worth it. 💕
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 4 }}
        >
          <NavigationButton onClick={onNext}>
            Now let me write you something from my deepest soul →
          </NavigationButton>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Page35_CommitmentToGrowth;
