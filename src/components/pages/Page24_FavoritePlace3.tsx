import { motion } from "framer-motion";
import { MapPin, Heart } from "lucide-react";
import NavigationButton from "@/components/NavigationButton";
import FloatingHearts from "@/components/FloatingHearts";

interface PageProps {
  onNext: () => void;
}

const Page24_FavoritePlace3 = ({ onNext }: PageProps) => {
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
          <MapPin className="w-14 h-14 text-lavender" />
          <Heart className="w-12 h-12 text-blush" />
        </motion.div>

        <motion.h1
          className="font-display text-4xl md:text-5xl font-bold mb-4 text-gradient-romantic glow-text"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Our Third Paradise
        </motion.h1>
        <motion.h2
          className="font-script text-2xl md:text-3xl text-champagne mb-12"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          Where my heart truly felt home
        </motion.h2>

        <motion.div
          className="glass-card rounded-3xl p-8 md:p-12 mb-12"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <p className="font-body text-xl text-cream/90 mb-8">
            This place holds something sacred between us.
          </p>

          <motion.div
            className="my-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <p className="font-display text-lg text-lavender mb-6">
              Here, I saw:
            </p>
            <div className="space-y-4">
              <p className="font-body text-lg text-cream/90">
                ✨ Your vulnerability and strength intertwined
              </p>
              <p className="font-body text-lg text-cream/90">
                ✨ The real you, unfiltered and perfect
              </p>
              <p className="font-body text-lg text-cream/90">
                ✨ How deeply you love
              </p>
              <p className="font-body text-lg text-cream/90">
                ✨ My forever reflected in your eyes
              </p>
            </div>
          </motion.div>

          <motion.div
            className="pt-6 border-t border-blush/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5 }}
          >
            <p className="font-body text-xl text-cream/90 mb-3">
              You made every place magical.
            </p>
            <p className="font-body text-xl text-champagne font-semibold">
              But this one... this one changed me. 💫🌹
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 3.2 }}
        >
          <NavigationButton onClick={onNext}>
            There's more beauty we shared →
          </NavigationButton>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Page24_FavoritePlace3;
