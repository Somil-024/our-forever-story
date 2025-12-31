import { motion } from "framer-motion";
import { Sparkles, Heart, Star, Sun } from "lucide-react";
import NavigationButton from "@/components/NavigationButton";
import FloatingHearts from "@/components/FloatingHearts";

interface PageProps {
  onNext: () => void;
}

const beauties = [
  { text: "Smile like you mean it", icon: Sparkles },
  { text: "Look at me like I matter", icon: Heart },
  { text: "Move with quiet confidence", icon: Star },
  { text: "Light up when you're excited", icon: Sun },
  { text: "Concentrate intensely on something", icon: Sparkles },
  { text: "Laugh without holding back", icon: Heart },
  { text: "Exist completely in the moment", icon: Star },
];

const Page18_YourBeauty = ({ onNext }: PageProps) => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 py-20">
      <FloatingHearts />
      
      {/* Soft light glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-champagne/10 blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      
      <motion.div
        className="relative z-10 text-center max-w-4xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="mb-6"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring" }}
        >
          <Sparkles className="w-16 h-16 text-champagne mx-auto" />
        </motion.div>

        <motion.h1
          className="font-display text-4xl md:text-5xl font-bold mb-4 text-gradient-romantic glow-text"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Your Physical Beauty
        </motion.h1>
        <motion.h2
          className="font-script text-2xl md:text-3xl text-champagne mb-12"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          How you make me speechless
        </motion.h2>

        <motion.div
          className="glass-card rounded-3xl p-8 md:p-12 mb-12"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <p className="font-body text-xl text-cream/90 mb-4">
            I need to say this: <span className="text-blush font-semibold">You are stunning.</span>
          </p>
          <p className="font-body text-xl text-cream/80 mb-8">
            Not just physically (though yes, you're absolutely beautiful).
          </p>

          <motion.div
            className="mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <p className="font-display text-lg text-lavender mb-4">But the way you:</p>
            <div className="space-y-3">
              {beauties.map((beauty, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 bg-midnight/40 rounded-lg p-3"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 1.7 + index * 0.15 }}
                >
                  <beauty.icon className="w-5 h-5 text-champagne flex-shrink-0" />
                  <p className="font-body text-cream/90">{beauty.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="pt-6 border-t border-blush/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3 }}
          >
            <p className="font-body text-xl text-cream/90 mb-4">
              Your beauty isn't about your face 
              <span className="text-muted-foreground"> (though I could stare at it forever 😊)</span>.
            </p>
            <p className="font-display text-2xl text-gradient-romantic mb-4">
              It's about the light that comes from within.
            </p>
            <p className="font-script text-xl text-champagne">
              You're beautiful inside and outside, and I never want you to doubt that. 💕✨
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 3.5 }}
        >
          <NavigationButton onClick={onNext}>
            Now let me take you through our moments of 2025
          </NavigationButton>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Page18_YourBeauty;
