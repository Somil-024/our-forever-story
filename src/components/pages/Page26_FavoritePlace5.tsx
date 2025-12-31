import { motion } from "framer-motion";
import { MapPin, Star } from "lucide-react";
import NavigationButton from "@/components/NavigationButton";
import FloatingHearts from "@/components/FloatingHearts";

interface PageProps {
  onNext: () => void;
}

const Page26_FavoritePlace5 = ({ onNext }: PageProps) => {
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
          <Star className="w-12 h-12 text-champagne" />
        </motion.div>

        <motion.h1
          className="font-display text-4xl md:text-5xl font-bold mb-4 text-gradient-romantic glow-text"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Our Fifth Memory
        </motion.h1>
        <motion.h2
          className="font-script text-2xl md:text-3xl text-champagne mb-12"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          The place that captured our love best
        </motion.h2>

        <motion.div
          className="glass-card rounded-3xl p-8 md:p-12 mb-12"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <p className="font-body text-xl text-cream/90 mb-8">
            These five places we've shared tell our story better than words ever could.
          </p>

          <motion.div
            className="my-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <p className="font-display text-lg text-lavender mb-6">
              Together, we learned:
            </p>
            <div className="space-y-4">
              <p className="font-body text-lg text-cream/90">
                💖 That love isn't a destination
              </p>
              <p className="font-body text-lg text-cream/90">
                💖 That home is wherever you are
              </p>
              <p className="font-body text-lg text-cream/90">
                💖 That the journey matters more than the place
              </p>
              <p className="font-body text-lg text-cream/90">
                💖 That memories with you are precious beyond measure
              </p>
            </div>
          </motion.div>

          <motion.div
            className="pt-6 border-t border-blush/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5 }}
          >
            <p className="font-body text-lg text-cream/90 mb-3">
              No location could ever be more beautiful than having you there.
            </p>
            <p className="font-body text-xl text-champagne font-semibold">
              Thank you for painting my world in color. 🌍✨💕
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 3.2 }}
        >
          <NavigationButton onClick={onNext}>
            The quiet moments mattered most →
          </NavigationButton>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Page26_FavoritePlace5;
