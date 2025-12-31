import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";
import NavigationButton from "@/components/NavigationButton";
import FloatingHearts from "@/components/FloatingHearts";

interface GenericPageProps {
  pageNumber: number;
  title: string;
  subtitle: string;
  content: string[];
  onNext: () => void;
}

const pageData: { [key: number]: GenericPageProps } = {
  66: {
    pageNumber: 66,
    title: "100 Reasons Why You're My Favorite",
    subtitle: "The list begins...",
    content: [
      "1. Your laugh 2. Your kindness 3. Your strength 4. Your vulnerability",
      "5. Your intelligence 6. Your beauty 7. Your weirdness 8. Your authenticity",
      "9. The way you think 10. How you love 11. Your passion 12. Your creativity",
      "13. Your resilience 14. Your humor 15. Your wisdom 16. Your compassion",
      "17. Your independence 18. Your loyalty 19. Your warmth 20. Your light"
    ],
    onNext: () => {},
  },
  67: {
    pageNumber: 67,
    title: "100 Reasons - Part 2",
    subtitle: "Reasons 21-40",
    content: [
      "21. How you see the world 22. Your dreams 23. Your determination",
      "24. Your grace under pressure 25. Your authenticity 26. Your boundaries",
      "27. Your generosity 28. Your forgiveness 29. Your honesty",
      "30. How you grow 31. Your courage 32. Your heart 33. Your soul",
      "34. Your presence 35. Your energy 36. Your aura 37. Your essence"
    ],
    onNext: () => {},
  },
  68: {
    pageNumber: 68,
    title: "100 Reasons - Part 3",
    subtitle: "Reasons 41-60",
    content: [
      "41. Your smile 42. Your eyes 43. Your touch 44. Your voice",
      "45. The way you listen 46. The way you understand 47. Your support",
      "48. Your encouragement 49. Your belief in me 50. Your faith in us",
      "51. How you challenge me 52. How you inspire me 53. How you complete me",
      "54. Your weird habits 55. Your cute quirks 56. Your random thoughts"
    ],
    onNext: () => {},
  },
  69: {
    pageNumber: 69,
    title: "100 Reasons - Part 4",
    subtitle: "Reasons 61-80",
    content: [
      "61. The way you hug 62. The way you hold my hand 63. How you look at me",
      "64. The way you say my name 65. Your texts 66. Your calls 67. Your presence",
      "68. Your absence (I notice) 69. Your love 70. Your trust",
      "71. Your honesty 72. Your vulnerability 73. Your strength 74. You",
      "75. Your independence 76. How safe you feel 77. How safe I feel"
    ],
    onNext: () => {},
  },
  70: {
    pageNumber: 70,
    title: "100 Reasons - Final",
    subtitle: "Reasons 81-100",
    content: [
      "81. Our chemistry 82. Our timing 83. Our destiny 84. Your future",
      "85. Our future 86. Memories we'll make 87. Life we'll build",
      "88. Our adventures 89. Growing old with you 90. Your evolution",
      "91. My evolution 92. Our evolution together 93. The story we're writing",
      "94-96. The ordinary moments made special 97-99. How you make me better",
      "100. Everything about you. Simply, completely, eternally 💕"
    ],
    onNext: () => {},
  },
  71: {
    pageNumber: 71,
    title: "Our 2026 Dreams",
    subtitle: "What I want for us this year",
    content: [
      "🌟 Adventures: Road trips, new cities, creating memories",
      "🌟 Growth: Learning together, becoming better versions",
      "🌟 Deeper Love: Understanding each other more",
      "🌟 Stability: Building something solid and lasting",
      "🌟 Fun: More laughter, silliness, joy",
      "🌟 Quality Time: Less phone, more presence",
      "🌟 Surprises: Magic in small moments",
      "2026 is our year to shine. Together. ✨"
    ],
    onNext: () => {},
  },
  72: {
    pageNumber: 72,
    title: "Our 5-Year Vision",
    subtitle: "Where I see us in 2030",
    content: [
      "In 2030, I see us:",
      "📍 More in love than ever",
      "📍 Having built dreams together",
      "📍 Knowing each other inside out",
      "📍 Having faced challenges and triumphed",
      "📍 Still laughing, growing, choosing each other",
      "📍 Creating a life that feels like a dream",
      "I don't know all details. But I know: I want you there. 💕"
    ],
    onNext: () => {},
  },
  73: {
    pageNumber: 73,
    title: "Our Forever",
    subtitle: "No matter how many years pass",
    content: [
      "I think about forever with you.",
      "Growing old together.",
      "Your hair turning gray (you'll still be most beautiful).",
      "My love growing deeper every year.",
      "Our story becoming longer, richer, more beautiful.",
      "I want to hold your hand when we're 80.",
      "Still making you laugh.",
      "Our love lasting lifetimes. 💫"
    ],
    onNext: () => {},
  },
  74: {
    pageNumber: 74,
    title: "A Home With You",
    subtitle: "Where forever feels like home",
    content: [
      "Home isn't a place. Home is you.",
      "I want to build a place where:",
      "🏠 You feel safe",
      "🏠 You feel loved",
      "🏠 You feel like you belong",
      "🏠 We create memories",
      "🏠 Laughter echoes",
      "A home with you would be my greatest dream. 💕"
    ],
    onNext: () => {},
  },
  75: {
    pageNumber: 75,
    title: "Our Maybe Future",
    subtitle: "If we're blessed with children",
    content: [
      "I think about little versions of you.",
      "With your eyes, your smile, your heart.",
      "I want to teach them:",
      "👶 How to love fiercely",
      "👶 How to be kind",
      "👶 How to respect women (by respecting their mother)",
      "👶 How to dream big",
      "Most importantly? They'll see how I love their mother. 💕👨‍👩‍👧"
    ],
    onNext: () => {},
  },
  76: {
    pageNumber: 76,
    title: "Reflection on 2025",
    subtitle: "The year that changed everything",
    content: [
      "2025, what a year you've been.",
      "You brought us:",
      "✨ Deeper understanding",
      "✨ Greater challenges",
      "✨ Immense growth",
      "✨ Beautiful memories",
      "✨ Lessons in love",
      "Thank you, 2025. You taught us well. 📅💕"
    ],
    onNext: () => {},
  },
  77: {
    pageNumber: 77,
    title: "Midnight Moment",
    subtitle: "It's 11:59 PM on December 31st",
    content: [
      "In just seconds, we step into a new year.",
      "A fresh start.",
      "A blank page.",
      "A new chapter in our love story.",
      "And baby, I'm so excited to write it with you. 💫🎆",
      "Let there be fireworks!",
      "Let there be confetti!",
      "Let there be celebration!"
    ],
    onNext: () => {},
  },
  78: {
    pageNumber: 78,
    title: "HAPPY NEW YEAR!",
    subtitle: "IT'S 12:00 AM!",
    content: [
      "🎆 Let there be fireworks!",
      "🎊 Let there be confetti!",
      "🎉 Let there be celebration!",
      "🌟 Let there be infinite moments with you!",
      "Happy New Year, baby.",
      "Happy New Year to us.",
      "Happy New Year to forever. 🥂💕"
    ],
    onNext: () => {},
  },
  79: {
    pageNumber: 79,
    title: "Close your eyes... ready?",
    subtitle: "I have one more surprise",
    content: [
      "Baby, I know you love surprises.",
      "So I've hidden something for you on the next page.",
      "Something from my heart to yours.",
      "Are you ready? 👀💕",
      "It could be:",
      "• Photo gallery of our memories",
      "• Voice notes saying 'I love you'",
      "• Our favorite songs together"
    ],
    onNext: () => {},
  },
  80: {
    pageNumber: 80,
    title: "The Surprise Page",
    subtitle: "Open your heart, baby",
    content: [
      "This page can be customized with:",
      "•	A photo gallery of your memories together",
      "•	A voice note (if possible) saying 'I love you'",
      "•	Handwritten-style letter scan",
      "•	Playlist of 'our songs'",
      "•	Video messages (if you can embed)",
      "•	Polaroid-style memory collage",
      "Whatever personal touch you want to add. 💝"
    ],
    onNext: () => {},
  },
  81: {
    pageNumber: 81,
    title: "My Vow to You",
    subtitle: "My promises as vows",
    content: [
      "I vow to love you fiercely and completely.",
      "I vow to be your biggest supporter and greatest cheerleader.",
      "I vow to handle your heart like it's the most precious thing.",
      "I vow to be honest, even when it's hard.",
      "I vow to grow with you and because of you.",
      "I vow to choose love, always.",
      "Not because I have to.",
      "But because you're worth a lifetime of promises. 💍💕"
    ],
    onNext: () => {},
  },
  82: {
    pageNumber: 82,
    title: "365 Days of Love Project",
    subtitle: "One reason I love you for each day",
    content: [
      "Baby, I'm planning something special.",
      "Every single day of 2026, you're getting a reason why I love you.",
      "365 reasons. 365 days. 365 reminders.",
      "Preview:",
      "Day 1: Because you make mornings worth waking up for",
      "Day 2: Because your laugh is my favorite song",
      "Day 3: Because you understand me without words",
      "Day 4: Because you make ordinary days extraordinary"
    ],
    onNext: () => {},
  },
  83: {
    pageNumber: 83,
    title: "Letter to My Future Self",
    subtitle: "Remember this love",
    content: [
      "Dear Future Me,",
      "If you ever doubt how much this woman means to you, read this.",
      "If love ever gets hard, remember this.",
      "If you ever forget how blessed you are, come back here.",
      "You have a woman who loves you completely.",
      "You have a partnership built on honesty and genuine love.",
      "You have a future worth fighting for.",
      "Love her better each day. Be worthy of her. 💌"
    ],
    onNext: () => {},
  },
  84: {
    pageNumber: 84,
    title: "In Verses, My Love",
    subtitle: "Poetry for you",
    content: [
      "In a world of billions, I chose you.",
      "In infinite possibilities, you chose me.",
      "In countless moments, we chose us.",
      "And that, my love, is everything.",
      "Your love rewrote my story.",
      "Your presence made ordinary days extraordinary.",
      "Your heart taught me what forever means.",
      "You are my greatest love story. 💕"
    ],
    onNext: () => {},
  },
  85: {
    pageNumber: 85,
    title: "Our Song",
    subtitle: "This is our love in music",
    content: [
      "Our favorite songs describe our love:",
      "🎵 'Thinking Out Loud' — Ed Sheeran",
      "🎵 'All of Me' — John Legend",
      "🎵 [Your special songs together]",
      "Each one tells part of our story.",
      "When I hear these songs,",
      "I think of you.",
      "Music and love. Both timeless. 🎵💕"
    ],
    onNext: () => {},
  },
  86: {
    pageNumber: 86,
    title: "The Infinite Loop",
    subtitle: "Where love begins again",
    content: [
      "Baby, this website is a circle.",
      "Not a line.",
      "Because our love isn't a story with an ending.",
      "It's a story that keeps beginning.",
      "Over and over.",
      "Forever and ever.",
      "Every time you read it, you feel my love. 💫",
      "This is eternal. ♾️💕"
    ],
    onNext: () => {},
  },
  87: {
    pageNumber: 87,
    title: "Easter Egg - Secret Page",
    subtitle: "You found the hidden page!",
    content: [
      "Congratulations, sweetheart! 🎉",
      "You discovered the hidden page!",
      "Only you would be curious enough to find this.",
      "Only you would care enough to read twice.",
      "Only you would love us enough to come back.",
      "This page is just for you:",
      "I see you. The real, raw, authentic YOU.",
      "Keep being you. Forever. 🖤💕"
    ],
    onNext: () => {},
  },
  88: {
    pageNumber: 88,
    title: "Memory Gallery",
    subtitle: "Our memories in motion",
    content: [
      "[Gallery of photos, videos, illustrations organized as:]",
      "•	How It Began (2024 moments)",
      "•	We Lived, We Loved, We Learned (2025 highlights)",
      "•	Our Favorite Places",
      "•	Just Us Being Us",
      "•	Laughing (Always Laughing)",
      "•	The Quiet Beautiful Moments",
      "•	Dreams & Possibilities",
      "Our story in pictures. Our love in moments. 📸💕"
    ],
    onNext: () => {},
  },
  89: {
    pageNumber: 89,
    title: "Final Gratitude",
    subtitle: "Thank you, baby",
    content: [
      "Thank you for reading every word.",
      "Thank you for letting me pour my heart out.",
      "Thank you for being someone worth pouring my heart out to.",
      "This website is just pixels and code.",
      "But every word is real.",
      "Every promise is sincere.",
      "Every emotion is authentic.",
      "You mean everything to me. Thank you. 💕"
    ],
    onNext: () => {},
  },
  90: {
    pageNumber: 90,
    title: "The Forever Page",
    subtitle: "No matter what year it is...",
    content: [
      "Baby, my love, my everything:",
      "No matter if it's 2026 or 2050.",
      "No matter if life changes or we grow.",
      "No matter what storms come or how time passes.",
      "One truth will remain eternal:",
      "You are my life's most special part.",
      "You are not just my story.",
      "You are my forever. ♾️💕🌙"
    ],
    onNext: () => {},
  },
};

const getPageData = (pageNumber: number) => {
  return pageData[pageNumber] || {
    pageNumber,
    title: `Page ${pageNumber}`,
    subtitle: "Continuing our love story...",
    content: ["This page is part of our beautiful journey together. 💕"],
    onNext: () => {},
  };
};

interface GenericPageComponentProps {
  pageNumber: number;
  onNext: () => void;
  onGameClick?: (pageNum: number) => void;
}

const GenericPageComponent = ({ pageNumber, onNext, onGameClick }: GenericPageComponentProps) => {
  const page = getPageData(pageNumber);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 py-20">
      <FloatingHearts />
      <motion.div className="relative z-10 text-center max-w-4xl mx-auto" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <motion.div className="mb-6 flex justify-center" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.3, type: "spring" }}>
          <Sparkles className="w-14 h-14 text-lavender" />
        </motion.div>
        <motion.h1 className="font-display text-4xl md:text-5xl font-bold mb-4 text-gradient-romantic" initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5 }}>
          {page.title}
        </motion.h1>
        <motion.h2 className="font-script text-2xl md:text-3xl text-champagne mb-12" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.7 }}>
          {page.subtitle}
        </motion.h2>
        <motion.div className="glass-card rounded-3xl p-8 md:p-12 mb-12" initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1 }}>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}>
            {page.content.map((line, index) => (
              <motion.p key={index} className="font-body text-lg text-cream/90 mb-4" initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 1.7 + index * 0.1 }}>
                {line}
              </motion.p>
            ))}
          </motion.div>
        </motion.div>
        <motion.div className="flex flex-col gap-4" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 2.5 }}>
          {pageNumber === 75 && (
            <motion.div className="p-6 bg-gradient-to-r from-blush/10 to-love-red/10 rounded-2xl border border-blush/20" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.8 }}>
              <p className="font-body text-lg text-cream/90 mb-4">Future plan karte hain?</p>
              <button onClick={() => onGameClick?.(97)} className="w-full px-6 py-3 bg-gradient-to-r from-blush to-love-red rounded-full font-display text-white hover:shadow-glow transition-all transform hover:scale-105">Future Picker → Page 97</button>
            </motion.div>
          )}
          {pageNumber === 85 && (
            <motion.div className="p-6 bg-gradient-to-r from-blush/10 to-love-red/10 rounded-2xl border border-blush/20" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.8 }}>
              <p className="font-body text-lg text-cream/90 mb-4">Last game before forever!</p>
              <button onClick={() => onGameClick?.(98)} className="w-full px-6 py-3 bg-gradient-to-r from-blush to-love-red rounded-full font-display text-white hover:shadow-glow transition-all transform hover:scale-105">Guess My Answer → Page 98</button>
            </motion.div>
          )}
          <NavigationButton onClick={onNext}>Continue →</NavigationButton>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default GenericPageComponent;
