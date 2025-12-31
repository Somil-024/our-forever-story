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
import Page11_TheGiftYouGaveMe from "@/components/pages/Page11_TheGiftYouGaveMe";
import Page12_SectionTransition from "@/components/pages/Page12_SectionTransition";
import Page13_YourNames from "@/components/pages/Page13_YourNames";
import Page14_YourMind from "@/components/pages/Page14_YourMind";
import Page15_YourHeart from "@/components/pages/Page15_YourHeart";
import Page16_YourStrength from "@/components/pages/Page16_YourStrength";
import Page17_YourQuirks from "@/components/pages/Page17_YourQuirks";
import Page18_YourBeauty from "@/components/pages/Page18_YourBeauty";
import Page19_PanipuriDates from "@/components/pages/Page19_PanipuriDates";
import Page20_MovieNights from "@/components/pages/Page20_MovieNights";
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
      case 1: return <Page1_EntranceCeremony onNext={goToNextPage} />;
      case 2: return <Page2_BeforeYouArrived onNext={goToNextPage} />;
      case 3: return <Page3_TheFirstMoment onNext={goToNextPage} />;
      case 4: return <Page4_FirstConversation onNext={goToNextPage} />;
      case 5: return <Page5_ObsessionWithYou onNext={goToNextPage} />;
      case 6: return <Page6_TheRealization onNext={goToNextPage} />;
      case 7: return <Page7_AdmittingTheLove onNext={goToNextPage} />;
      case 8: return <Page8_TheYearYouArrived onNext={goToNextPage} />;
      case 9: return <Page9_TransitionTo2025 onNext={goToNextPage} />;
      case 10: return <Page10_PromiseToCherish onNext={goToNextPage} />;
      case 11: return <Page11_TheGiftYouGaveMe onNext={goToNextPage} />;
      case 12: return <Page12_SectionTransition onNext={goToNextPage} />;
      case 13: return <Page13_YourNames onNext={goToNextPage} />;
      case 14: return <Page14_YourMind onNext={goToNextPage} />;
      case 15: return <Page15_YourHeart onNext={goToNextPage} />;
      case 16: return <Page16_YourStrength onNext={goToNextPage} />;
      case 17: return <Page17_YourQuirks onNext={goToNextPage} />;
      case 18: return <Page18_YourBeauty onNext={goToNextPage} />;
      case 19: return <Page19_PanipuriDates onNext={goToNextPage} />;
      case 20: return <Page20_MovieNights onNext={goToNextPage} />;
      case 100: return <Page100_ForeverPage onRestart={() => goToPage(1)} />;
      default:
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
