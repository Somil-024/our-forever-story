import { useState } from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import FloatingHearts from "@/components/FloatingHearts";

interface Page94Props {
  onNext: () => void;
  onBackToStory: (pageNum: number) => void;
}

const Page94_TruthOrDare = ({ onNext, onBackToStory }: Page94Props) => {
  const [selected, setSelected] = useState<"truth" | "dare" | null>(null);

  const truths = [
    "Mere bare mein sabse pehle kya notice kiya tha? (Honest batao 😏)",
    "Kab mujhe pehli baar 'cute' bola internally?",
    "Hamari sabse embarrassing moment kaunsi thi?",
    "Mera ek habit jo tumhe secretly bohot pasand hai?",
    "Jab main gussa hota hoon, tumhe kaisa lagta hai?",
    "Tumhara favorite 'our moment' kaunsa hai?",
    "Mujhse kab pehli baar impress hui thi?",
    "Mera ek outfit jo tumhe bohot pasand aaya?",
    "Hamari pehli fight mein tum sach mein kya soch rahi thi?",
    "Mere bare mein ek cheez jo tumne kabhi kisi ko nahi batayi?",
    "Mujhe kis cheez mein weak feel karti ho?",
    "Hamari chemistry kitni perfect hai? (1-10)"
  ];

  const dares = [
    "Aaj mujhe 3 selfies bhejna (no filter, natural wali 😘)",
    "Mera favorite song dedicate karke voice note bhejna 🎵",
    "Tumhari DP 24 hours ke liye hamari ek photo rakhni hai 📸",
    "Mujhe ek 30 sec ka 'I miss you' video bhejna 📹",
    "Aaj raat 11 baje goodnight call karna (no excuses 🌙)",
    "Mere naam se ek Instagram story daalna 💕",
    "Kal subah pehla message sirf mujhe bhejna (good morning wala ☀️)",
    "Ek photo bhejna jisme tum meri photo ke saath ho 🖼️",
    "Mujhe apna current mood emoji bhejna + reason 🤭",
    "Aaj koi bhi decision lene se pehle mujhse poochna 😂",
    "Mera naam 10 baar bolke video bhejna (cutely) 🥰",
    "Aaj mujhe 'baby' bolke 5 messages bhejna 💕"
  ];

  const randomTruth = truths[Math.floor(Math.random() * truths.length)];
  const randomDare = dares[Math.floor(Math.random() * dares.length)];

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 py-20">
      <FloatingHearts />
      <motion.div className="relative z-10 text-center max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}>
        
        <motion.div className="mb-6 flex justify-center"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring" }}>
          <Heart className="w-14 h-14 text-lavender" />
        </motion.div>

        <motion.h1 className="font-display text-4xl md:text-5xl font-bold mb-4 text-gradient-romantic"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}>
          Truth ya Dare 💋
        </motion.h1>

        <motion.div className="glass-card rounded-3xl p-8 md:p-12 mb-12"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}>
          
          {!selected ? (
            <div className="flex flex-col gap-4">
              <button
                onClick={() => setSelected("truth")}
                className="px-8 py-6 bg-gradient-to-r from-lavender to-lavender-dark rounded-full font-display text-lg text-white hover:shadow-glow transition-all transform hover:scale-105 active:scale-95">
                Truth 🙈
              </button>

              <button
                onClick={() => setSelected("dare")}
                className="px-8 py-6 bg-gradient-to-r from-lavender to-lavender-dark rounded-full font-display text-lg text-cream hover:shadow-glow transition-all transform hover:scale-105 active:scale-95">
                Dare 🔥
              </button>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="space-y-6">
              <p className="font-display text-2xl text-cream/90 mb-4">
                {selected === "truth" ? "Truth:" : "Dare:"}
              </p>
              <p className="font-body text-xl text-cream/90 font-semibold mb-6">
                {selected === "truth" ? randomTruth : randomDare}
              </p>
              <button
                onClick={() => setSelected(null)}
                className="px-6 py-3 bg-lavender/30 text-cream/80 rounded-lg font-display text-sm hover:shadow-glow transition-all">
                Next Truth/Dare
              </button>
            </motion.div>
          )}
        </motion.div>

        <motion.div className="flex flex-col gap-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 2.5 }}>
          <button
            onClick={() => onBackToStory(36)}
            className="px-8 py-4 bg-gradient-to-r from-lavender to-lavender-dark rounded-full font-display text-cream hover:shadow-glow transition-all">
            Back to Story → Page 36
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Page94_TruthOrDare;
