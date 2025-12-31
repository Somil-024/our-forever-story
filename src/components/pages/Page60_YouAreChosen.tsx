import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import NavigationButton from "@/components/NavigationButton";
import FloatingHearts from "@/components/FloatingHearts";

interface PageProps {
  onNext: () => void;
  onGameClick?: (pageNum: number) => void;
}

const Page60_YouAreChosen = ({ onNext, onGameClick }: PageProps) => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 py-20">
      <FloatingHearts />
      <motion.div className="relative z-10 text-center max-w-4xl mx-auto" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <motion.h1 className="font-display text-4xl md:text-5xl font-bold mb-4 text-gradient-romantic" initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5 }}>You Are Chosen</motion.h1>
        <motion.h2 className="font-script text-2xl md:text-3xl text-champagne mb-12" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.7 }}>Every single day</motion.h2>
        <motion.div className="glass-card rounded-3xl p-8 md:p-12 mb-12" initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1 }}>
          <p className="font-body text-lg text-cream/90 mb-6">Not by accident.</p>
          <p className="font-body text-lg text-cream/90 mb-6">Not by default.</p>
          <p className="font-body text-lg text-lavender mb-6">By choice.</p>
          <p className="font-body text-lg text-cream/90 mb-6">Every morning, I choose you.</p>
          <p className="font-body text-lg text-cream/90 mb-6">Every night, I choose you.</p>
          <p className="font-body text-xl text-champagne font-semibold">Every moment, you're my choice. 💕</p>
        </motion.div>
        <motion.div className="flex flex-col gap-4" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 2.5 }}>
          <motion.div className="p-6 bg-gradient-to-r from-blush/10 to-love-red/10 rounded-2xl border border-blush/20" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.8 }}>
            <p className="font-body text-lg text-cream/90 mb-4">Emoji se kahaani banao!</p>
            <button onClick={() => onGameClick?.(96)} className="w-full px-6 py-3 bg-gradient-to-r from-blush to-love-red rounded-full font-display text-white hover:shadow-glow transition-all transform hover:scale-105">Emoji Story Builder → Page 96</button>
          </motion.div>
          <NavigationButton onClick={onNext}>Let's talk about our forever →</NavigationButton>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Page60_YouAreChosen;
