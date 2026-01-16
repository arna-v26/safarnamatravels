import { useState } from "react";
import { Search, Calendar, MapPin, Users } from "lucide-react";
import { Chip } from "@/components/common/Chip";
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

const filters = ["2D/1N", "Craft Heritage", "Photography", "Weekend"];

interface DiscoverScreenProps {
  onSelectFestival: (festival: Festival) => void;
}

export function DiscoverScreen({ onSelectFestival }: DiscoverScreenProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const toggleFilter = (filter: string) => {
    setActiveFilters((prev) =>
      prev.includes(filter)
        ? prev.filter((f) => f !== filter)
        : [...prev, filter]
    );
  };

  return (
    <div className="screen-padding animate-fade-in">
      {/* Header */}
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
      <div className="relative mb-5">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search regions or festivals..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full h-12 pl-11 pr-4 rounded-xl bg-secondary border-none text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
        />
      </div>

      {/* Filter Chips */}
      <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-2 mb-5">
        {filters.map((filter) => (
          <Chip
            key={filter}
            active={activeFilters.includes(filter)}
            onClick={() => toggleFilter(filter)}
          >
            {filter}
          </Chip>
        ))}
      </div>

      {/* Festival Calendar Section */}
      <div className="mb-5">
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
              className="flex-shrink-0 w-56 card-cultural group animate-fade-in"
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

      {/* Featured Circuit */}
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-foreground mb-3">
          Featured Circuit
        </h2>
        <button
          onClick={() => onSelectFestival(festivals[0])}
          className="w-full card-cultural overflow-hidden group"
        >
          <div className="relative h-44">
            <img
              src={festivalHero}
              alt="Hornbill Festival"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 gradient-overlay" />
            <div className="absolute bottom-4 left-4 right-4">
              <p className="text-primary-foreground font-display text-xl font-semibold mb-1">
                Hornbill Festival Circuit
              </p>
              <p className="text-primary-foreground/80 text-sm">
                Experience Nagaland's vibrant tribal culture
              </p>
            </div>
            <div className="absolute top-3 left-3 flex gap-2">
              <span className="badge-verified">
                <Users className="h-3 w-3" />
                12 Spots Left
              </span>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}
