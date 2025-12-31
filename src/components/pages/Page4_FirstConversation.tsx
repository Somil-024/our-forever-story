import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import NavigationButton from "@/components/NavigationButton";
import TwinklingStars from "@/components/TwinklingStars";

interface PageProps {
  onNext: () => void;
}

const chatMessages = [
  { side: "right", text: "Dreams, fears, hopes...", delay: 1.5 },
  { side: "left", text: "Silly jokes, deep truths...", delay: 2 },
  { side: "right", text: "Random thoughts that made sense...", delay: 2.5 },
  { side: "left", text: "Hours felt like minutes 💫", delay: 3 },
];

const Page4_FirstConversation = ({ onNext }: PageProps) => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 py-20">
      <TwinklingStars />
      
      <motion.div
        className="relative z-10 text-center max-w-4xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Header */}
        <motion.div
          className="flex justify-center mb-6"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring" }}
        >
          <MessageCircle className="w-12 h-12 text-blush" />
        </motion.div>

        <motion.h1
          className="font-display text-4xl md:text-6xl font-bold mb-4 text-gradient-romantic"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          How we talked till
        </motion.h1>
        <motion.h2
          className="font-script text-3xl md:text-4xl text-lavender mb-12"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          the world disappeared
        </motion.h2>

        {/* Chat bubbles animation */}
        <motion.div
          className="mb-10 space-y-4 max-w-lg mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          {chatMessages.map((msg, index) => (
            <motion.div
              key={index}
              className={`flex ${msg.side === "right" ? "justify-end" : "justify-start"}`}
              initial={{ 
                opacity: 0, 
                x: msg.side === "right" ? 50 : -50,
                scale: 0.8 
              }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ delay: msg.delay, duration: 0.5 }}
            >
              <div
                className={`px-5 py-3 rounded-2xl max-w-xs ${
                  msg.side === "right"
                    ? "bg-blush/20 text-blush-light rounded-tr-sm"
                    : "bg-lavender/20 text-lavender rounded-tl-sm"
                }`}
              >
                <p className="font-body text-lg">{msg.text}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main content */}
        <motion.div
          className="glass-card rounded-3xl p-8 md:p-12 mb-12 text-left"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 3.5 }}
        >
          <p className="font-body text-xl md:text-2xl text-cream/90 leading-relaxed mb-8">
            Do you remember our first real conversation?
            <br />
            When we talked and talked and talked...
          </p>

          <p className="font-body text-lg text-cream/80 mb-8">
            I wasn't even watching the clock. <span className="text-blush/80">(I never do when you're involved.)</span>
            <br />
            Hours passed like minutes.
            <br />
            You made thinking feel like <span className="text-champagne">flying</span>. 🦅
          </p>

          <p className="font-display text-xl text-blush-light mb-4">I learned that you're:</p>
          
          <ul className="space-y-3 font-body text-lg">
            {[
              { icon: "🧠", text: "Intelligent in a way that makes me feel smarter" },
              { icon: "💭", text: "Thoughtful in a way that makes my heart soften" },
              { icon: "🎭", text: "Real in a way that makes the world feel honest" },
              { icon: "👑", text: "Special in a way that makes forever feel possible" },
            ].map((item, index) => (
              <motion.li
                key={index}
                className="flex items-center gap-3 text-cream/90"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 4 + index * 0.2 }}
              >
                <span className="text-xl">{item.icon}</span>
                <span>{item.text}</span>
              </motion.li>
            ))}
          </ul>

          <motion.div
            className="mt-10 pt-8 border-t border-blush/20 space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 5 }}
          >
            <p className="font-body text-lg text-cream/80">After that conversation, I knew:</p>
            <p className="font-body text-xl text-lavender">
              I want to have a <em>thousand</em> more conversations with you.
            </p>
            <p className="font-body text-xl text-blush">
              I want to know every part of your mind.
            </p>
            <p className="font-body text-xl text-champagne">
              I want to be the person you call first. 📞
            </p>
            <p className="font-display text-xl text-cream mt-6">
              And baby, I do. Every single day. 💬
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 5.5 }}
        >
          <NavigationButton onClick={onNext}>
            And then I started thinking about you... constantly
          </NavigationButton>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Page4_FirstConversation;
