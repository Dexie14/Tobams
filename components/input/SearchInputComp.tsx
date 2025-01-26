import { SearchIcon } from "@/icons/svgComp/General";
import React from "react";

interface SearchInputProps {
  placeholder?: string;
  className?: string;
  inputClassName?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: () => void;
  icon?: React.ReactNode;
  value?: string;
}

const SearchInputComp = ({
  placeholder = "Search",
  onChange,
  onClick,
  className,
  icon,
  inputClassName,
  value,
}: SearchInputProps) => {
  return (
    <div
      className={`flex items-center text-subText border border-borderColor bg-white p-4 h-[38px] w-[240px] sm:w-[388px] focus-within:border-[#D5D5D5] focus-within:outline-none focus-within:border ${className}`}
    >
      {/* Input */}
      <input
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        onClick={onClick}
        className={`flex-grow bg-transparent outline-none placeholder-subText text-subText text-sm font-light w-full ${inputClassName}`}
      />

      {/* Search Icon */}
      {!icon && (
        <div className="ml-2">
          <SearchIcon />
        </div>
      )}
      {/* 
      {icon && <div className="ml-2">{icon}</div>} */}
    </div>
  );
};

export default SearchInputComp;
