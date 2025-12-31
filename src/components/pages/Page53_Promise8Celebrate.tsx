import { motion } from "framer-motion";
import { Award, Heart } from "lucide-react";
import NavigationButton from "@/components/NavigationButton";
import FloatingHearts from "@/components/FloatingHearts";

interface PageProps {
  onNext: () => void;
}

const Page53_Promise8Celebrate = ({ onNext }: PageProps) => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 py-20">
      <FloatingHearts />
      <motion.div className="relative z-10 text-center max-w-4xl mx-auto" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <motion.h1 className="font-display text-4xl md:text-5xl font-bold mb-4 text-gradient-romantic glow-text" initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5 }}>Promise #8: I'll Celebrate You</motion.h1>
        <motion.h2 className="font-script text-2xl md:text-3xl text-champagne mb-12" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.7 }}>Your wins are my wins</motion.h2>
        <motion.div className="glass-card rounded-3xl p-8 md:p-12 mb-12" initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1 }}>
          <div className="space-y-4 mb-8">
            <p className="font-body text-lg text-lavender">🎉 Genuine happiness for your success</p>
            <p className="font-body text-lg text-lavender">🎉 Loud cheers for your victories</p>
            <p className="font-body text-lg text-lavender">🎉 Pride in your accomplishments</p>
            <p className="font-body text-lg text-lavender">🎉 Genuine excitement for your future</p>
          </div>
          <motion.div className="pt-6 border-t border-blush/20" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}>
            <p className="font-body text-xl text-champagne font-semibold">Your joy is my greatest joy. 🎉💕</p>
          </motion.div>
        </motion.div>
        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 2.5 }}>
          <NavigationButton onClick={onNext}>Promise #9 →</NavigationButton>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Page53_Promise8Celebrate;
