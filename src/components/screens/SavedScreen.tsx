import { Heart, MapPin, Calendar, Star } from "lucide-react";
import festivalHero from "@/assets/festival-hero.jpg";
import folkMusic from "@/assets/folk-music.jpg";
import pottery from "@/assets/pottery.jpg";
import homestay from "@/assets/homestay.jpg";

interface SavedScreenProps {
  onSelectItem?: () => void;
}

const savedItems = [
  {
    id: 1,
    type: "festival",
    name: "Hornbill Festival",
    location: "Kisama, Nagaland",
    dates: "Dec 1-10",
    image: festivalHero,
    rating: 4.9,
  },
  {
    id: 2,
    type: "experience",
    name: "Traditional Folk Music Evening",
    location: "Majuli, Assam",
    duration: "3 hours",
    image: folkMusic,
    rating: 4.7,
  },
  {
    id: 3,
    type: "stay",
    name: "Heritage Pottery Village Stay",
    location: "Khurja, Uttar Pradesh",
    price: "₹2,500/night",
    image: pottery,
    rating: 4.6,
  },
  {
    id: 4,
    type: "stay",
    name: "Bamboo Cottage Homestay",
    location: "Ziro Valley, Arunachal",
    price: "₹1,800/night",
    image: homestay,
    rating: 4.8,
  },
];

export function SavedScreen({ onSelectItem }: SavedScreenProps) {
  return (
    <div className="flex flex-col min-h-full bg-background">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-background/95 backdrop-blur-sm border-b border-border px-4 py-4 safe-top">
        <h1 className="font-display text-2xl font-bold text-foreground">Saved</h1>
        <p className="text-sm text-muted-foreground mt-1">{savedItems.length} items saved for later</p>
      </header>

      <div className="flex-1 overflow-y-auto px-4 py-4">
        {savedItems.length > 0 ? (
          <div className="grid grid-cols-2 gap-3">
            {savedItems.map((item) => (
              <div
                key={item.id}
                className="card-cultural p-0 overflow-hidden group cursor-pointer"
                onClick={onSelectItem}
              >
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-28 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <button className="absolute top-2 right-2 p-1.5 bg-background/80 backdrop-blur-sm rounded-full">
                    <Heart className="h-4 w-4 text-primary fill-primary" />
                  </button>
                  <div className="absolute bottom-2 left-2 px-2 py-0.5 bg-background/80 backdrop-blur-sm rounded-full">
                    <span className="text-xs font-medium capitalize text-foreground">{item.type}</span>
                  </div>
                </div>
                <div className="p-3">
                  <h3 className="font-semibold text-foreground text-sm line-clamp-2 mb-1">{item.name}</h3>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground mb-2">
                    <MapPin className="h-3 w-3 flex-shrink-0" />
                    <span className="line-clamp-1">{item.location}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <Star className="h-3 w-3 text-primary fill-primary" />
                      <span className="text-xs font-medium text-foreground">{item.rating}</span>
                    </div>
                    {item.dates && (
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        <span>{item.dates}</span>
                      </div>
                    )}
                    {item.price && (
                      <span className="text-xs font-medium text-primary">{item.price}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-full py-16">
            <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
              <Heart className="h-8 w-8 text-muted-foreground" />
            </div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-2">No saved items yet</h3>
            <p className="text-sm text-muted-foreground text-center max-w-xs">
              Tap the heart icon on any festival, stay, or experience to save it here
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
