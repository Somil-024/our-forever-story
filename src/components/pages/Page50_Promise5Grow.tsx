import { motion } from "framer-motion";
import { TrendingUp, Heart } from "lucide-react";
import NavigationButton from "@/components/NavigationButton";
import FloatingHearts from "@/components/FloatingHearts";

interface PageProps {
  onNext: () => void;
}

const Page50_Promise5Grow = ({ onNext }: PageProps) => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 py-20">
      <FloatingHearts />
      <motion.div className="relative z-10 text-center max-w-4xl mx-auto" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <motion.div className="mb-6 flex justify-center gap-3" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.3, type: "spring" }}>
          <TrendingUp className="w-14 h-14 text-lavender" />
          <Heart className="w-12 h-12 text-blush fill-blush" />
        </motion.div>
        <motion.h1 className="font-display text-4xl md:text-5xl font-bold mb-4 text-gradient-romantic glow-text" initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5 }}>Promise #5: I'll Grow</motion.h1>
        <motion.h2 className="font-script text-2xl md:text-3xl text-champagne mb-12" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.7 }}>Evolve emotionally for us</motion.h2>
        <motion.div className="glass-card rounded-3xl p-8 md:p-12 mb-12" initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1 }}>
          <p className="font-body text-lg text-cream/90 mb-8">I'm not perfect. But I'm committed to becoming better.</p>
          <div className="space-y-4 mb-8">
            <p className="font-body text-lg text-lavender">📈 Face my flaws</p>
            <p className="font-body text-lg text-lavender">📈 Work on my patterns</p>
            <p className="font-body text-lg text-lavender">📈 Become more patient</p>
            <p className="font-body text-lg text-lavender">📈 Become more understanding</p>
            <p className="font-body text-lg text-lavender">📈 Become more you-worthy</p>
          </div>
          <motion.div className="pt-6 border-t border-blush/20" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}>
            <p className="font-body text-xl text-champagne font-semibold">Growth is my love language. 📈💕</p>
          </motion.div>
        </motion.div>
        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 2.5 }}>
          <NavigationButton onClick={onNext}>More promises →</NavigationButton>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Page50_Promise5Grow;
