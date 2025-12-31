import { motion } from "framer-motion";
import { Heart, ArrowDown, Shield, Sparkles } from "lucide-react";
import NavigationButton from "@/components/NavigationButton";
import TwinklingStars from "@/components/TwinklingStars";

interface PageProps {
  onNext: () => void;
}

const Page6_TheRealization = ({ onNext }: PageProps) => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 py-20">
      <TwinklingStars />
      
      {/* Falling animation background */}
      <motion.div
        className="absolute top-20 left-1/2 -translate-x-1/2"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 200, opacity: [0, 1, 1, 0] }}
        transition={{ duration: 4, repeat: Infinity, repeatDelay: 2 }}
      >
        <Heart className="w-8 h-8 text-blush fill-blush" />
      </motion.div>
      
      <motion.div
        className="relative z-10 text-center max-w-4xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Falling icon */}
        <motion.div
          className="flex justify-center mb-8"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, type: "spring", bounce: 0.4 }}
        >
          <ArrowDown className="w-12 h-12 text-blush animate-bounce" />
        </motion.div>

        <motion.h1
          className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-gradient-romantic glow-text"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          When I realized
        </motion.h1>
        <motion.h2
          className="font-script text-3xl md:text-5xl text-lavender mb-12"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          I was falling
        </motion.h2>

        {/* Content */}
        <motion.div
          className="glass-card rounded-3xl p-8 md:p-12 mb-12 text-left"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <p className="font-body text-xl md:text-2xl text-cream/90 leading-relaxed mb-6">
            There was this moment — I remember <em className="text-champagne">exactly</em> when.
          </p>

          <motion.div
            className="bg-midnight/50 rounded-2xl p-6 border border-lavender/20 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
          >
            <p className="font-body text-lg text-lavender/90 italic">
              I was driving, and a song came on.
              <br />
              And suddenly, I wasn't just <em>thinking</em> about you — I was <span className="text-blush">feeling</span> you.
              <br />
              Not just <em>missing</em> you — I was <span className="text-champagne">longing</span> for you.
              <br />
              Not just <em>liking</em> you — I was completely, utterly, irrevocably <span className="text-blush-light">falling</span>.
            </p>
          </motion.div>

          <motion.div
            className="space-y-4 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
          >
            <p className="font-display text-xl text-cream">
              And it <span className="text-blush">terrified</span> me.
            </p>
            <ul className="space-y-2 font-body text-lg text-cream/80 pl-4">
              <li>Because falling means <span className="text-lavender">losing control</span>.</li>
              <li>Falling means <span className="text-champagne">vulnerability</span>.</li>
              <li>Falling means <span className="text-blush">trusting someone with your heart completely</span>.</li>
            </ul>
          </motion.div>

          <motion.div
            className="pt-8 border-t border-blush/20 space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5 }}
          >
            <p className="font-display text-xl text-champagne">
              But then I realized:
            </p>
            <p className="font-body text-xl text-cream/90">
              If I had to fall for anyone, I'm grateful it's <span className="text-gradient-romantic font-semibold">you</span>. 💫
            </p>
            
            <div className="grid md:grid-cols-3 gap-4 mt-6">
              {[
                { icon: Shield, text: "You catch me. Every single time." },
                { icon: Heart, text: "You understand me. Without judgment." },
                { icon: Sparkles, text: "You love me. Even my imperfect parts." },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="text-center p-4"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 3 + index * 0.2 }}
                >
                  <item.icon className="w-8 h-8 mx-auto mb-2 text-blush" />
                  <p className="font-body text-sm text-cream/80">{item.text}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="text-center mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.8 }}
            >
              <p className="font-display text-2xl text-blush-light mb-2">So I let myself fall.</p>
              <p className="font-script text-3xl text-gradient-romantic">
                Completely. Unapologetically. Eternally.
              </p>
              <motion.span
                className="inline-block text-4xl mt-4"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                📉💕
              </motion.span>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 4.2 }}
        >
          <NavigationButton onClick={onNext}>
            And you caught me, my love
          </NavigationButton>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Page6_TheRealization;
