import { motion } from "framer-motion";
import { Heart } from "lucide-react";

interface PageIndicatorProps {
  currentPage: number;
  totalPages: number;
  onPageClick?: (page: number) => void;
}

const PageIndicator = ({ currentPage, totalPages, onPageClick }: PageIndicatorProps) => {
  // Show limited dots for better UX
  const maxVisibleDots = 7;
  const halfVisible = Math.floor(maxVisibleDots / 2);
  
  let startPage = Math.max(1, currentPage - halfVisible);
  let endPage = Math.min(totalPages, startPage + maxVisibleDots - 1);
  
  if (endPage - startPage < maxVisibleDots - 1) {
    startPage = Math.max(1, endPage - maxVisibleDots + 1);
  }

  const visiblePages = Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i
  );

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
      <motion.div 
        className="flex items-center gap-2 px-6 py-3 rounded-full glass-card"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {/* First page indicator */}
        {startPage > 1 && (
          <>
            <button
              onClick={() => onPageClick?.(1)}
              className="w-3 h-3 rounded-full bg-blush/30 hover:bg-blush/50 transition-colors"
            />
            {startPage > 2 && <span className="text-blush/50 text-xs">...</span>}
          </>
        )}
        
        {visiblePages.map((page) => (
          <motion.button
            key={page}
            onClick={() => onPageClick?.(page)}
            className={`relative transition-all duration-300 ${
              page === currentPage
                ? "w-8 h-8"
                : "w-3 h-3 hover:w-4 hover:h-4"
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {page === currentPage ? (
              <Heart className="w-full h-full text-blush fill-blush animate-heartbeat" />
            ) : (
              <div className="w-full h-full rounded-full bg-blush/30 hover:bg-blush/50" />
            )}
          </motion.button>
        ))}
        
        {/* Last page indicator */}
        {endPage < totalPages && (
          <>
            {endPage < totalPages - 1 && <span className="text-blush/50 text-xs">...</span>}
            <button
              onClick={() => onPageClick?.(totalPages)}
              className="w-3 h-3 rounded-full bg-blush/30 hover:bg-blush/50 transition-colors"
            />
          </>
        )}
        
        <span className="ml-4 text-sm text-muted-foreground font-body">
          {currentPage} / {totalPages}
        </span>
      </motion.div>
    </div>
  );
};

export default PageIndicator;
