import { useState } from "react";
import { Search, Calendar, MapPin } from "lucide-react";
import { FilterDropdown } from "@/components/common/FilterDropdown";
import { FeaturedCircuitCard } from "@/components/common/FeaturedCircuitCard";
import gayaCircuitHero from "@/assets/gaya-circuit-hero.jpg";
import festivalHero from "@/assets/festival-hero.jpg";
import folkMusic from "@/assets/folk-music.jpg";
import craftWorkshop from "@/assets/craft-workshop.jpg";

interface Festival {
  id: string;
  name: string;
  location: string;
  date: string;
  image: string;
  duration: string;
}

const festivals: Festival[] = [
  {
    id: "1",
    name: "Sekrenyi Festival",
    location: "Nagaland",
    date: "Feb 25-27",
    image: festivalHero,
    duration: "3D/2N",
  },
  {
    id: "2",
    name: "Folk Music Fest",
    location: "Rajasthan",
    date: "Mar 15-17",
    image: folkMusic,
    duration: "2D/1N",
  },
  {
    id: "3",
    name: "Craft Heritage Tour",
    location: "Gujarat",
    date: "Apr 5-8",
    image: craftWorkshop,
    duration: "4D/3N",
  },
];

interface DiscoverScreenProps {
  onSelectFestival: (festival?: Festival) => void;
}

export function DiscoverScreen({ onSelectFestival }: DiscoverScreenProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  return (
    <div className="flex flex-col animate-fade-in">
      {/* Header */}
      <div className="screen-padding pb-0">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl text-foreground">Explore</h1>
            <p className="text-sm text-muted-foreground">Invisible India</p>
          </div>
          <button className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
            <Calendar className="h-5 w-5 text-primary" />
          </button>
        </div>

        {/* Search Bar */}
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search regions, circuits or festivals..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full h-12 pl-11 pr-4 rounded-xl bg-secondary border-none text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
        </div>

        {/* Filter Dropdown */}
        <div className="mb-5">
          <FilterDropdown
            selectedFilters={selectedFilters}
            onFilterChange={setSelectedFilters}
          />
        </div>
      </div>

      {/* Featured Circuit Section */}
      <div className="screen-padding pt-0">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-semibold text-foreground">
            Featured Circuit
          </h2>
        </div>

        {/* Gaya Circuit Card */}
        <FeaturedCircuitCard
          title="Gaya Circuit"
          subtitle="Spiritual Heritage Experience"
          description="Explore the spiritual and cultural heritage of Gaya through ancient caves, sacred stupas, and traditional Tikuli art workshops."
          image={gayaCircuitHero}
          badge="Heritage Route"
          location="Bihar, India"
          duration="3 Days / 2 Nights"
          spotsLeft={8}
          onClick={() => onSelectFestival()}
        />

        {/* Itinerary Preview */}
        <div className="mt-4 p-4 rounded-xl bg-secondary/50 border border-border">
          <h3 className="text-sm font-semibold text-foreground mb-3">Circuit Highlights</h3>
          <div className="space-y-2">
            <div className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center">1</span>
              <div>
                <p className="text-sm font-medium text-foreground">Gurpa Hills & Sujata Stupa</p>
                <p className="text-xs text-muted-foreground">Sacred Buddhist pilgrimage sites</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center">2</span>
              <div>
                <p className="text-sm font-medium text-foreground">Barabar Caves & Tikuli Workshop</p>
                <p className="text-xs text-muted-foreground">Ancient rock-cut caves & traditional art</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center">3</span>
              <div>
                <p className="text-sm font-medium text-foreground">Temples & Tibetan Market</p>
                <p className="text-xs text-muted-foreground">Spiritual exploration & local crafts</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Festival Calendar Section */}
      <div className="screen-padding">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-semibold text-foreground">
            Festival Calendar
          </h2>
          <button className="text-sm text-primary font-medium">View All</button>
        </div>

        {/* Horizontal Scroll Festival Cards */}
        <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-2 -mx-4 px-4">
          {festivals.map((festival, index) => (
            <button
              key={festival.id}
              onClick={() => onSelectFestival(festival)}
              className="flex-shrink-0 w-56 card-cultural group animate-fade-in text-left"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-36 overflow-hidden">
                <img
                  src={festival.image}
                  alt={festival.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 gradient-overlay" />
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="text-primary-foreground font-semibold text-sm">
                    {festival.name}
                  </p>
                </div>
                <div className="absolute top-2 right-2">
                  <span className="px-2 py-1 rounded-full bg-card/90 text-xs font-medium text-foreground">
                    {festival.duration}
                  </span>
                </div>
              </div>
              <div className="p-3">
                <div className="flex items-center gap-1 text-muted-foreground text-xs mb-1">
                  <MapPin className="h-3 w-3" />
                  {festival.location}
                </div>
                <div className="flex items-center gap-1 text-primary text-xs font-medium">
                  <Calendar className="h-3 w-3" />
                  {festival.date}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Bottom Spacing for nav */}
      <div className="h-4" />
    </div>
  );
}
