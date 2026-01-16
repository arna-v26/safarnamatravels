import { useState } from "react";
import { MobileContainer } from "@/components/layout/MobileContainer";
import { BottomNav } from "@/components/layout/BottomNav";
import { DiscoverScreen } from "@/components/screens/DiscoverScreen";
import { CircuitBuilderScreen } from "@/components/screens/CircuitBuilderScreen";
import { BookingScreen } from "@/components/screens/BookingScreen";
import { ActiveTripScreen } from "@/components/screens/ActiveTripScreen";
import { PostTripScreen } from "@/components/screens/PostTripScreen";

type Screen = "discover" | "builder" | "booking" | "active" | "postTrip";
type Tab = "explore" | "circuits" | "saved" | "profile";

const Index = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>("discover");
  const [activeTab, setActiveTab] = useState<Tab>("explore");

  const handleTabChange = (tab: Tab) => {
    setActiveTab(tab);
    // Reset to discover when changing tabs
    if (tab === "explore") {
      setCurrentScreen("discover");
    }
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case "discover":
        return (
          <DiscoverScreen
            onSelectFestival={() => setCurrentScreen("builder")}
          />
        );
      case "builder":
        return (
          <CircuitBuilderScreen
            onBack={() => setCurrentScreen("discover")}
            onContinue={() => setCurrentScreen("booking")}
          />
        );
      case "booking":
        return (
          <BookingScreen
            onBack={() => setCurrentScreen("builder")}
            onConfirm={() => setCurrentScreen("active")}
          />
        );
      case "active":
        return (
          <ActiveTripScreen
            onComplete={() => setCurrentScreen("postTrip")}
          />
        );
      case "postTrip":
        return (
          <PostTripScreen
            onPlanNext={() => setCurrentScreen("discover")}
          />
        );
      default:
        return null;
    }
  };

  return (
    <MobileContainer hasBottomNav={currentScreen === "discover" || currentScreen === "postTrip"}>
      {renderScreen()}
      {(currentScreen === "discover" || currentScreen === "postTrip") && (
        <BottomNav activeTab={activeTab} onTabChange={handleTabChange} />
      )}
    </MobileContainer>
  );
};

export default Index;
