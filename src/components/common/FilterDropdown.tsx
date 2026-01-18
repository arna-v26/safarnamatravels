import { useState, useRef, useEffect } from "react";
import { ChevronDown, Filter, X } from "lucide-react";

interface FilterOption {
  label: string;
  value: string;
  group: string;
}

const filterOptions: FilterOption[] = [
  // Circuit Type
  { label: "Spiritual", value: "spiritual", group: "Circuit Type" },
  { label: "Cultural", value: "cultural", group: "Circuit Type" },
  { label: "Heritage", value: "heritage", group: "Circuit Type" },
  // Duration
  { label: "2 Days / 1 Night", value: "2d1n", group: "Duration" },
  { label: "3 Days / 2 Nights", value: "3d2n", group: "Duration" },
  { label: "4+ Days", value: "4d+", group: "Duration" },
  // Region
  { label: "Bihar", value: "bihar", group: "Region" },
  { label: "Rajasthan", value: "rajasthan", group: "Region" },
  { label: "Northeast", value: "northeast", group: "Region" },
  { label: "Gujarat", value: "gujarat", group: "Region" },
  // Popularity
  { label: "Trending", value: "trending", group: "Popularity" },
  { label: "New", value: "new", group: "Popularity" },
  { label: "Most Booked", value: "most-booked", group: "Popularity" },
];

const groups = ["Circuit Type", "Duration", "Region", "Popularity"];

interface FilterDropdownProps {
  selectedFilters: string[];
  onFilterChange: (filters: string[]) => void;
}

export function FilterDropdown({ selectedFilters, onFilterChange }: FilterDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleFilter = (value: string) => {
    if (selectedFilters.includes(value)) {
      onFilterChange(selectedFilters.filter((f) => f !== value));
    } else {
      onFilterChange([...selectedFilters, value]);
    }
  };

  const clearFilters = () => {
    onFilterChange([]);
  };

  const getSelectedLabels = () => {
    return filterOptions
      .filter((opt) => selectedFilters.includes(opt.value))
      .map((opt) => opt.label);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground transition-all duration-200 hover:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/30"
      >
        <div className="flex items-center gap-2">
          <Filter className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium">
            {selectedFilters.length > 0
              ? `${selectedFilters.length} filter${selectedFilters.length > 1 ? "s" : ""} applied`
              : "Filter circuits"}
          </span>
        </div>
        <ChevronDown
          className={`h-4 w-4 text-muted-foreground transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Selected Tags */}
      {selectedFilters.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-2">
          {getSelectedLabels().map((label, index) => (
            <span
              key={index}
              className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium"
            >
              {label}
              <button
                onClick={() => {
                  const option = filterOptions.find((o) => o.label === label);
                  if (option) toggleFilter(option.value);
                }}
                className="hover:bg-primary/20 rounded-full p-0.5"
              >
                <X className="h-3 w-3" />
              </button>
            </span>
          ))}
          <button
            onClick={clearFilters}
            className="text-xs text-muted-foreground hover:text-foreground underline"
          >
            Clear all
          </button>
        </div>
      )}

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-card border border-border rounded-xl shadow-elevated z-50 overflow-hidden animate-fade-in">
          <div className="max-h-80 overflow-y-auto">
            {groups.map((group) => (
              <div key={group} className="border-b border-border last:border-b-0">
                <div className="px-4 py-2 bg-secondary/50">
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                    {group}
                  </span>
                </div>
                <div className="p-2">
                  {filterOptions
                    .filter((opt) => opt.group === group)
                    .map((option) => (
                      <button
                        key={option.value}
                        onClick={() => toggleFilter(option.value)}
                        className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm transition-colors ${
                          selectedFilters.includes(option.value)
                            ? "bg-primary/10 text-primary font-medium"
                            : "text-foreground hover:bg-secondary"
                        }`}
                      >
                        {option.label}
                        {selectedFilters.includes(option.value) && (
                          <div className="h-2 w-2 rounded-full bg-primary" />
                        )}
                      </button>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
