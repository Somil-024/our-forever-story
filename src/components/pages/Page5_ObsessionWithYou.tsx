import { motion } from "framer-motion";
import { Heart, Sun, Moon, Sunset, Smile, Coffee, Music } from "lucide-react";
import NavigationButton from "@/components/NavigationButton";
import FloatingHearts from "@/components/FloatingHearts";

interface PageProps {
  onNext: () => void;
}

const thoughts = [
  { time: "6:00 AM", icon: Sun, text: "First thought: her smile", color: "text-champagne" },
  { time: "9:00 AM", icon: Coffee, text: "Wish she was here for coffee", color: "text-blush" },
  { time: "12:00 PM", icon: Music, text: "This song reminds me of her", color: "text-lavender" },
  { time: "3:00 PM", icon: Smile, text: "Can't wait to tell her this", color: "text-champagne" },
  { time: "6:00 PM", icon: Sunset, text: "She'd love this sunset", color: "text-blush" },
  { time: "11:00 PM", icon: Moon, text: "Last thought: her voice", color: "text-lavender" },
];

const Page5_ObsessionWithYou = ({ onNext }: PageProps) => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 py-20">
      <FloatingHearts />
      
      {/* Pulsing heart background */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <Heart className="w-96 h-96 text-blush/20 fill-blush/20" />
      </motion.div>
      
      <motion.div
        className="relative z-10 text-center max-w-4xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="font-display text-4xl md:text-6xl font-bold mb-4 text-gradient-romantic glow-text"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          How you became
        </motion.h1>
        <motion.h2
          className="font-script text-3xl md:text-5xl text-champagne mb-12"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          my favorite thought
        </motion.h2>

        {/* Timeline of thoughts */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          {thoughts.map((thought, index) => (
            <motion.div
              key={index}
              className="glass-card rounded-2xl p-4 text-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1 + index * 0.2 }}
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px hsl(330, 70%, 75%, 0.3)" }}
            >
              <thought.icon className={`w-8 h-8 mx-auto mb-2 ${thought.color}`} />
              <p className="font-body text-sm text-muted-foreground">{thought.time}</p>
              <p className={`font-body text-sm ${thought.color}`}>{thought.text}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Main content */}
        <motion.div
          className="glass-card rounded-3xl p-8 md:p-12 mb-12 text-left"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 2.5 }}
        >
          <p className="font-body text-xl md:text-2xl text-cream/90 leading-relaxed mb-8">
            After you entered my life, you never left my mind.
            <br />
            And I mean that <em className="text-blush">literally</em>.
          </p>

          <div className="space-y-4 font-body text-lg text-cream/80">
            <p>I'd be working, and suddenly I'd think of something you said.</p>
            <p>I'd see a song and immediately think: <span className="text-lavender">"I'll send this to her."</span></p>
            <p>A funny video? I'd pause everything to share it with you.</p>
            <p>A sunset? <span className="text-champagne">"She'd love this."</span></p>
            <p>A sad moment? <span className="text-blush">"I need her."</span></p>
            <p>A happy moment? <span className="text-lavender">"She's the only one I want to celebrate with."</span></p>
          </div>

          <motion.div
            className="mt-10 pt-8 border-t border-blush/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.5 }}
          >
            <p className="font-display text-xl text-blush-light mb-4">You became my:</p>
            <ul className="space-y-2 font-body text-lg">
              <li className="flex items-center gap-2 text-champagne">
                <Sun className="w-5 h-5" /> First thought in the morning
              </li>
              <li className="flex items-center gap-2 text-lavender">
                <Moon className="w-5 h-5" /> Last thought before sleep
              </li>
              <li className="flex items-center gap-2 text-blush">
                <Smile className="w-5 h-5" /> Reason for every smile throughout the day
              </li>
              <li className="flex items-center gap-2 text-cream">
                <Heart className="w-5 h-5" /> Comfort during every uncertainty
              </li>
            </ul>
            <p className="font-body text-lg text-cream/70 mt-6">
              Not in an obsessive way <span className="text-blush/60">(okay, maybe a little 😅)</span>.
            </p>
            <p className="font-display text-xl text-cream mt-4">
              But in the way where you just <span className="text-gradient-romantic">matter</span> — more than anything else. ❤️
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 4 }}
        >
          <NavigationButton onClick={onNext}>
            My feelings grew deeper every single day
          </NavigationButton>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Page5_ObsessionWithYou;
