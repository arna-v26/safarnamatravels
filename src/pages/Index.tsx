import { useState } from "react";
import { MobileContainer } from "@/components/layout/MobileContainer";
import { BottomNav } from "@/components/layout/BottomNav";
import { DiscoverScreen } from "@/components/screens/DiscoverScreen";
import { CircuitBuilderScreen } from "@/components/screens/CircuitBuilderScreen";
import { BookingScreen } from "@/components/screens/BookingScreen";
import { ActiveTripScreen } from "@/components/screens/ActiveTripScreen";
import { PostTripScreen } from "@/components/screens/PostTripScreen";
import { MyCircuitsScreen } from "@/components/screens/MyCircuitsScreen";
import { SavedScreen } from "@/components/screens/SavedScreen";
import { ProfileScreen } from "@/components/screens/ProfileScreen";

type Screen = "discover" | "builder" | "booking" | "active" | "postTrip" | "circuits" | "saved" | "profile";
type Tab = "explore" | "circuits" | "saved" | "profile";

const Index = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>("discover");
  const [activeTab, setActiveTab] = useState<Tab>("explore");

  const handleTabChange = (tab: Tab) => {
    setActiveTab(tab);
    // Navigate to appropriate screen based on tab
    switch (tab) {
      case "explore":
        setCurrentScreen("discover");
        break;
      case "circuits":
        setCurrentScreen("circuits");
        break;
      case "saved":
        setCurrentScreen("saved");
        break;
      case "profile":
        setCurrentScreen("profile");
        break;
    }
  };

  // Determine if bottom nav should be shown
  const showBottomNav = ["discover", "circuits", "saved", "profile", "postTrip"].includes(currentScreen);

  const renderScreen = () => {
    switch (currentScreen) {
      case "discover":
        return (
          <DiscoverScreen
            onSelectFestival={() => setCurrentScreen("builder")}
          />
        );
      case "circuits":
        return (
          <MyCircuitsScreen
            onViewCircuit={() => setCurrentScreen("active")}
          />
        );
      case "saved":
        return (
          <SavedScreen
            onSelectItem={() => setCurrentScreen("builder")}
          />
        );
      case "profile":
        return (
          <ProfileScreen
            onNavigate={(section) => console.log("Navigate to:", section)}
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
            onPlanNext={() => {
              setActiveTab("explore");
              setCurrentScreen("discover");
            }}
          />
        );
      default:
        return null;
    }
  };

  return (
    <MobileContainer hasBottomNav={showBottomNav}>
      {renderScreen()}
      {showBottomNav && (
        <BottomNav activeTab={activeTab} onTabChange={handleTabChange} />
      )}
    </MobileContainer>
  );
};

export default Index;
