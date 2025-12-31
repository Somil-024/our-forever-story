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
import Page21_RandomDrives from "@/components/pages/Page21_RandomDrives";
import Page22_FavoritePlace1 from "@/components/pages/Page22_FavoritePlace1";
import Page23_FavoritePlace2 from "@/components/pages/Page23_FavoritePlace2";
import Page24_FavoritePlace3 from "@/components/pages/Page24_FavoritePlace3";
import Page25_FavoritePlace4 from "@/components/pages/Page25_FavoritePlace4";
import Page26_FavoritePlace5 from "@/components/pages/Page26_FavoritePlace5";
import Page27_QuietMoments from "@/components/pages/Page27_QuietMoments";
import Page28_Fights from "@/components/pages/Page28_Fights";
import Page29_Forgiveness from "@/components/pages/Page29_Forgiveness";
import Page30_ApologyBegins from "@/components/pages/Page30_ApologyBegins";
import Page31_ApologyForNotListening from "@/components/pages/Page31_ApologyForNotListening";
import Page32_ApologyForReactions from "@/components/pages/Page32_ApologyForReactions";
import Page33_ApologyForNotPresent from "@/components/pages/Page33_ApologyForNotPresent";
import Page34_ApologyForSelfishness from "@/components/pages/Page34_ApologyForSelfishness";
import Page35_CommitmentToGrowth from "@/components/pages/Page35_CommitmentToGrowth";
import Page36_LetterOpening from "@/components/pages/Page36_LetterOpening";
import Page37_LetterGratitude from "@/components/pages/Page37_LetterGratitude";
import Page38_SpecificGratitude from "@/components/pages/Page38_SpecificGratitude";
import Page39_LoveYourMind from "@/components/pages/Page39_LoveYourMind";
import Page40_LoveYourHeart from "@/components/pages/Page40_LoveYourHeart";
import Page41_LoveYourStrength from "@/components/pages/Page41_LoveYourStrength";
import Page42_ILoveYou from "@/components/pages/Page42_ILoveYou";
import Page43_OurFuture from "@/components/pages/Page43_OurFuture";
import Page44_MyPromise from "@/components/pages/Page44_MyPromise";
import Page45_ClosingWords from "@/components/pages/Page45_ClosingWords";
import Page46_Promise1Listen from "@/components/pages/Page46_Promise1Listen";
import Page47_Promise2Understand from "@/components/pages/Page47_Promise2Understand";
import Page48_Promise3ChooseLove from "@/components/pages/Page48_Promise3ChooseLove";
import Page49_Promise4Protect from "@/components/pages/Page49_Promise4Protect";
import Page50_Promise5Grow from "@/components/pages/Page50_Promise5Grow";
import Page51_Promise6Affection from "@/components/pages/Page51_Promise6Affection";
import Page52_Promise7Independence from "@/components/pages/Page52_Promise7Independence";
import Page53_Promise8Celebrate from "@/components/pages/Page53_Promise8Celebrate";
import Page54_Promise9Mistakes from "@/components/pages/Page54_Promise9Mistakes";
import Page55_Promise10Love from "@/components/pages/Page55_Promise10Love";
import Page56_YouAreBeautiful from "@/components/pages/Page56_YouAreBeautiful";
import Page57_YouAreWorthy from "@/components/pages/Page57_YouAreWorthy";
import Page58_YouAreStrong from "@/components/pages/Page58_YouAreStrong";
import Page59_YouAreEnough from "@/components/pages/Page59_YouAreEnough";
import Page60_YouAreChosen from "@/components/pages/Page60_YouAreChosen";
import Page61_WeCommunicate from "@/components/pages/Page61_WeCommunicate";
import Page62_WeRespect from "@/components/pages/Page62_WeRespect";
import Page63_WeLaugh from "@/components/pages/Page63_WeLaugh";
import Page64_WeSurvived from "@/components/pages/Page64_WeSurvived";
import Page65_WeChoose from "@/components/pages/Page65_WeChoose";
import Page91_LoveMeter from "@/components/pages/Page91_LoveMeter";
import Page92_WillYouChooseMe from "@/components/pages/Page92_WillYouChooseMe";
import Page93_WhoIsMore from "@/components/pages/Page93_WhoIsMore";
import Page94_TruthOrDare from "@/components/pages/Page94_TruthOrDare";
import Page95_ComplimentGenerator from "@/components/pages/Page95_ComplimentGenerator";
import Page96_EmojiStory from "@/components/pages/Page96_EmojiStory";
import Page97_FuturePicker from "@/components/pages/Page97_FuturePicker";
import Page98_GuessMyAnswer from "@/components/pages/Page98_GuessMyAnswer";
import Page99_GameHub from "@/components/pages/Page99_GameHub";
import GenericPageComponent from "@/components/pages/GenericPage";
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
      case 12: return <Page12_SectionTransition onNext={goToNextPage} onGameClick={goToPage} />;
      case 13: return <Page13_YourNames onNext={goToNextPage} />;
      case 14: return <Page14_YourMind onNext={goToNextPage} />;
      case 15: return <Page15_YourHeart onNext={goToNextPage} />;
      case 16: return <Page16_YourStrength onNext={goToNextPage} />;
      case 17: return <Page17_YourQuirks onNext={goToNextPage} />;
      case 18: return <Page18_YourBeauty onNext={goToNextPage} />;
      case 19: return <Page19_PanipuriDates onNext={goToNextPage} />;
      case 20: return <Page20_MovieNights onNext={goToNextPage} />;
      case 21: return <Page21_RandomDrives onNext={goToNextPage} />;
      case 22: return <Page22_FavoritePlace1 onNext={goToNextPage} />;
      case 23: return <Page23_FavoritePlace2 onNext={goToNextPage} />;
      case 24: return <Page24_FavoritePlace3 onNext={goToNextPage} />;
      case 25: return <Page25_FavoritePlace4 onNext={goToNextPage} />;
      case 26: return <Page26_FavoritePlace5 onNext={goToNextPage} />;
      case 27: return <Page27_QuietMoments onNext={goToNextPage} />;
      case 28: return <Page28_Fights onNext={goToNextPage} />;
      case 29: return <Page29_Forgiveness onNext={goToNextPage} />;
      case 30: return <Page30_ApologyBegins onNext={goToNextPage} />;
      case 31: return <Page31_ApologyForNotListening onNext={goToNextPage} />;
      case 32: return <Page32_ApologyForReactions onNext={goToNextPage} />;
      case 33: return <Page33_ApologyForNotPresent onNext={goToNextPage} />;
      case 34: return <Page34_ApologyForSelfishness onNext={goToNextPage} />;
      case 35: return <Page35_CommitmentToGrowth onNext={goToNextPage} />;
      case 36: return <Page36_LetterOpening onNext={goToNextPage} />;
      case 37: return <Page37_LetterGratitude onNext={goToNextPage} />;
      case 38: return <Page38_SpecificGratitude onNext={goToNextPage} />;
      case 39: return <Page39_LoveYourMind onNext={goToNextPage} />;
      case 40: return <Page40_LoveYourHeart onNext={goToNextPage} />;
      case 41: return <Page41_LoveYourStrength onNext={goToNextPage} />;
      case 42: return <Page42_ILoveYou onNext={goToNextPage} />;
      case 43: return <Page43_OurFuture onNext={goToNextPage} />;
      case 44: return <Page44_MyPromise onNext={goToNextPage} />;
      case 45: return <Page45_ClosingWords onNext={goToNextPage} />;
      case 46: return <Page46_Promise1Listen onNext={goToNextPage} />;
      case 47: return <Page47_Promise2Understand onNext={goToNextPage} />;
      case 48: return <Page48_Promise3ChooseLove onNext={goToNextPage} />;
      case 49: return <Page49_Promise4Protect onNext={goToNextPage} />;
      case 50: return <Page50_Promise5Grow onNext={goToNextPage} />;
      case 51: return <Page51_Promise6Affection onNext={goToNextPage} />;
      case 52: return <Page52_Promise7Independence onNext={goToNextPage} />;
      case 53: return <Page53_Promise8Celebrate onNext={goToNextPage} />;
      case 54: return <Page54_Promise9Mistakes onNext={goToNextPage} />;
      case 55: return <Page55_Promise10Love onNext={goToNextPage} />;
      case 56: return <Page56_YouAreBeautiful onNext={goToNextPage} />;
      case 57: return <Page57_YouAreWorthy onNext={goToNextPage} />;
      case 58: return <Page58_YouAreStrong onNext={goToNextPage} />;
      case 59: return <Page59_YouAreEnough onNext={goToNextPage} />;
      case 60: return <Page60_YouAreChosen onNext={goToNextPage} />;
      case 61: return <Page61_WeCommunicate onNext={goToNextPage} />;
      case 62: return <Page62_WeRespect onNext={goToNextPage} />;
      case 63: return <Page63_WeLaugh onNext={goToNextPage} />;
      case 64: return <Page64_WeSurvived onNext={goToNextPage} />;
      case 65: return <Page65_WeChoose onNext={goToNextPage} />;
      case 91: return <Page91_LoveMeter onNext={goToNextPage} onBackToStory={goToPage} />;
      case 92: return <Page92_WillYouChooseMe onNext={goToNextPage} onBackToStory={goToPage} />;
      case 93: return <Page93_WhoIsMore onNext={goToNextPage} onBackToStory={goToPage} />;
      case 94: return <Page94_TruthOrDare onNext={goToNextPage} onBackToStory={goToPage} />;
      case 95: return <Page95_ComplimentGenerator onNext={goToNextPage} onBackToStory={goToPage} />;
      case 96: return <Page96_EmojiStory onNext={goToNextPage} onBackToStory={goToPage} />;
      case 97: return <Page97_FuturePicker onNext={goToNextPage} onBackToStory={goToPage} />;
      case 98: return <Page98_GuessMyAnswer onNext={goToNextPage} onBackToStory={goToPage} />;
      case 99: return <Page99_GameHub onNext={goToNextPage} onGameClick={goToPage} />;
      case 100: return <Page100_ForeverPage onRestart={() => goToPage(1)} />;
      default:
        if (currentPage > 65 && currentPage < 91) {
          return <GenericPageComponent pageNumber={currentPage} onNext={goToNextPage} />;
        }
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
