import { motion } from "framer-motion";
import { Infinity, Heart } from "lucide-react";
import NavigationButton from "@/components/NavigationButton";
import FloatingHearts from "@/components/FloatingHearts";

interface PageProps {
  onNext: () => void;
}

const Page55_Promise10Love = ({ onNext }: PageProps) => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 py-20">
      <FloatingHearts />
      <motion.div className="relative z-10 text-center max-w-4xl mx-auto" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <motion.h1 className="font-display text-4xl md:text-5xl font-bold mb-4 text-gradient-romantic glow-text" initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5 }}>Promise #10: Love You Better Each Year</motion.h1>
        <motion.h2 className="font-script text-2xl md:text-3xl text-champagne mb-12" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.7 }}>This is just the beginning</motion.h2>
        <motion.div className="glass-card rounded-3xl p-8 md:p-12 mb-12" initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1 }}>
          <p className="font-body text-lg text-cream/90 mb-8">Our love will deepen. Not fade. Not plateau. But continuously grow.</p>
          <div className="space-y-4 mb-8">
            <p className="font-body text-lg text-lavender">♾️ Love you more next year than this year</p>
            <p className="font-body text-lg text-lavender">♾️ Understand you deeper</p>
            <p className="font-body text-lg text-lavender">♾️ Appreciate you more</p>
            <p className="font-body text-lg text-lavender">♾️ Be more devoted</p>
          </div>
          <motion.div className="pt-6 border-t border-blush/20" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}>
            <p className="font-body text-lg text-cream/90 mb-4">Forever with you doesn't feel like forever.</p>
            <p className="font-body text-xl text-champagne font-semibold">It feels like home. ♾️💕</p>
          </motion.div>
        </motion.div>
        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 2.5 }}>
          <NavigationButton onClick={onNext}>Now let me affirm who you are →</NavigationButton>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Page55_Promise10Love;
