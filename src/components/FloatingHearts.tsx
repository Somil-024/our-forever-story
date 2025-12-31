import { useEffect, useState } from "react";
import { Heart } from "lucide-react";

interface FloatingHeart {
  id: number;
  x: number;
  size: number;
  delay: number;
  duration: number;
  opacity: number;
}

const FloatingHearts = () => {
  const [hearts, setHearts] = useState<FloatingHeart[]>([]);

  useEffect(() => {
    const generateHearts = () => {
      const newHearts: FloatingHeart[] = [];
      for (let i = 0; i < 15; i++) {
        newHearts.push({
          id: i,
          x: Math.random() * 100,
          size: Math.random() * 20 + 10,
          delay: Math.random() * 8,
          duration: Math.random() * 6 + 6,
          opacity: Math.random() * 0.3 + 0.1,
        });
      }
      setHearts(newHearts);
    };

    generateHearts();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute animate-rise"
          style={{
            left: `${heart.x}%`,
            bottom: "-50px",
            animationDelay: `${heart.delay}s`,
            animationDuration: `${heart.duration}s`,
            animationIterationCount: "infinite",
          }}
        >
          <Heart
            size={heart.size}
            className="text-blush fill-blush"
            style={{ opacity: heart.opacity }}
          />
        </div>
      ))}
    </div>
  );
};

export default FloatingHearts;
