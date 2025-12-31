import { useState, useCallback, useEffect } from "react";
import PageTransition from "@/components/PageTransition";
import PageIndicator from "@/components/PageIndicator";
import Page1_EntranceCeremony from "@/components/pages/Page1_EntranceCeremony";
import Page2_BeforeYouArrived from "@/components/pages/Page2_BeforeYouArrived";
import Page3_TheFirstMoment from "@/components/pages/Page3_TheFirstMoment";
import Page4_FirstConversation from "@/components/pages/Page4_FirstConversation";
import Page5_ObsessionWithYou from "@/components/pages/Page5_ObsessionWithYou";
import Page6_TheRealization from "@/components/pages/Page6_TheRealization";
import Page7_AdmittingTheLove from "@/components/pages/Page7_AdmittingTheLove";
import Page8_TheYearYouArrived from "@/components/pages/Page8_TheYearYouArrived";
import Page9_TransitionTo2025 from "@/components/pages/Page9_TransitionTo2025";
import Page10_PromiseToCherish from "@/components/pages/Page10_PromiseToCherish";
import Page100_ForeverPage from "@/components/pages/Page100_ForeverPage";

const TOTAL_PAGES = 100;

const Index = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const goToNextPage = useCallback(() => {
    setCurrentPage((prev) => Math.min(prev + 1, TOTAL_PAGES));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const goToPrevPage = useCallback(() => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const goToPage = useCallback((page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        goToNextPage();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        goToPrevPage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToNextPage, goToPrevPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 1:
        return <Page1_EntranceCeremony onNext={goToNextPage} />;
      case 2:
        return <Page2_BeforeYouArrived onNext={goToNextPage} />;
      case 3:
        return <Page3_TheFirstMoment onNext={goToNextPage} />;
      case 4:
        return <Page4_FirstConversation onNext={goToNextPage} />;
      case 5:
        return <Page5_ObsessionWithYou onNext={goToNextPage} />;
      case 6:
        return <Page6_TheRealization onNext={goToNextPage} />;
      case 7:
        return <Page7_AdmittingTheLove onNext={goToNextPage} />;
      case 8:
        return <Page8_TheYearYouArrived onNext={goToNextPage} />;
      case 9:
        return <Page9_TransitionTo2025 onNext={goToNextPage} />;
      case 10:
        return <Page10_PromiseToCherish onNext={goToNextPage} />;
      case 100:
        return <Page100_ForeverPage onRestart={() => goToPage(1)} />;
      default:
        // For pages not yet implemented, show a placeholder that advances
        return (
          <div className="min-h-screen flex flex-col items-center justify-center px-6">
            <div className="text-center glass-card rounded-3xl p-12 max-w-2xl">
              <h1 className="font-display text-4xl text-gradient-romantic mb-4">
                Page {currentPage}
              </h1>
              <p className="font-body text-xl text-cream/80 mb-8">
                This beautiful page is coming soon...
              </p>
              <button
                onClick={goToNextPage}
                className="px-8 py-4 bg-gradient-to-r from-blush to-lavender rounded-full font-display text-midnight-deep hover:shadow-glow transition-all"
              >
                Continue the journey →
              </button>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-hero overflow-hidden">
      <PageTransition pageKey={currentPage}>
        {renderPage()}
      </PageTransition>
      <PageIndicator
        currentPage={currentPage}
        totalPages={TOTAL_PAGES}
        onPageClick={goToPage}
      />
    </div>
  );
};

export default Index;
