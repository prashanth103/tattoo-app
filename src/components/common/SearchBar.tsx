import { Search } from "lucide-react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export default function SearchBar({
  value,
  onChange,
  placeholder = "Search",
  className = "",
}: SearchBarProps) {
  return (
    <div
      className={`flex items-center gap-3 border-b border-border pb-3 focus-within:border-primary transition-colors duration-300 ${className}`}
    >
      <Search size={16} strokeWidth={1.5} className="text-text-muted shrink-0" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full bg-transparent font-body text-sm text-text-primary placeholder:text-text-muted focus:outline-none"
      />
    </div>
  );
}
