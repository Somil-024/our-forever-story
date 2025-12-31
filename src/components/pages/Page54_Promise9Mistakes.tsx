import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import NavigationButton from "@/components/NavigationButton";
import FloatingHearts from "@/components/FloatingHearts";

interface PageProps {
  onNext: () => void;
}

const Page54_Promise9Mistakes = ({ onNext }: PageProps) => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 py-20">
      <FloatingHearts />
      <motion.div className="relative z-10 text-center max-w-4xl mx-auto" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <motion.h1 className="font-display text-4xl md:text-5xl font-bold mb-4 text-gradient-romantic glow-text" initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5 }}>Promise #9: I'll Admit Mistakes</motion.h1>
        <motion.h2 className="font-script text-2xl md:text-3xl text-champagne mb-12" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.7 }}>Own and fix them</motion.h2>
        <motion.div className="glass-card rounded-3xl p-8 md:p-12 mb-12" initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1 }}>
          <p className="font-body text-lg text-cream/90 mb-8">I will mess up. You know this.</p>
          <div className="space-y-4 mb-8">
            <p className="font-body text-lg text-lavender">🔧 Admit when I'm wrong</p>
            <p className="font-body text-lg text-lavender">🔧 Apologize sincerely</p>
            <p className="font-body text-lg text-lavender">🔧 Make amends</p>
            <p className="font-body text-lg text-lavender">🔧 Not repeat the mistake</p>
          </div>
          <motion.div className="pt-6 border-t border-blush/20" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}>
            <p className="font-body text-xl text-champagne font-semibold">Accountability is how I show respect. 🔧💕</p>
          </motion.div>
        </motion.div>
        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 2.5 }}>
          <NavigationButton onClick={onNext}>Promise #10 →</NavigationButton>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Page54_Promise9Mistakes;
