"use client";

import { useState } from "react";
import { useFilter } from "@/app/context/FilterContext";
import { PostData } from "@/lib/posts";
import Input from "./Input";
import Button from "./Button";

interface SidebarProps {
  groupedPosts: { [year: string]: { [month: string]: PostData[] } };
}

const Sidebar = ({ groupedPosts }: SidebarProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const { filter, setFilter } = useFilter();
  const [expandedYear, setExpandedYear] = useState<string | null>(null);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const handleFilterSubmit = () => {
    setFilter(inputValue);
    setIsSidebarOpen(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isSidebarOpen) {
      setFilter(e.target.value);
    }
    setInputValue(e.target.value);
  };

  // Native input event for browser automation compatibility (Playwright/Puppeteer)
  const handleNativeInput = (e: React.FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    if (!isSidebarOpen) {
      setFilter(value);
    }
    setInputValue(value);
  };

  const handleMonthClick = (year: string, month: string) => {
    const dateFilter = `date:${year}-${month}`;
    setFilter(dateFilter);
    if (isSidebarOpen) {
      setIsSidebarOpen(false);
    }
  };

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        className="fixed left-4 top-4 z-40 text-2xl md:hidden text-dev-text"
        onClick={toggleSidebar}
      >
        {isSidebarOpen ? "" : "☰"}
      </button>

      <div
        className={`fixed inset-y-0 left-0 z-30 w-full transform bg-dev-bg p-0 text-4xl text-dev-text transition-transform duration-300 ease-in-out md:static md:w-1/3 md:transform-none ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        {/* Close Button for Mobile */}
        {isSidebarOpen && (
          <button
            className="absolute right-4 top-4 text-2xl md:hidden text-dev-text"
            onClick={toggleSidebar}
          >
            ✕
          </button>
        )}

        <div className="ml-2 mt-10 flex flex-col gap-3 p-4">
          <h1 className="text-dev-text">Cursor Curious</h1>
          <div className="text-base text-dev-secondary">
            Clean, markdown-powered blogging for developers who love to write.
          </div>
        </div>
        <div className="flex items-center p-4">
          <Input
            value={inputValue}
            onChange={handleInputChange}
            onInput={handleNativeInput}
            placeholder="search posts, tags, keywords..."
          />
          <Button
            onClick={handleFilterSubmit}
            variant="primary"
            className="ml-2 block md:hidden"
          >
            Search
          </Button>
        </div>

        <div className="mt-6 p-4">
          {Object.keys(groupedPosts).map((year) => (
            <div key={year} className="mb-2">
              <button
                className="flex items-center gap-2 text-2xl font-semibold text-dev-text"
                onClick={() =>
                  setExpandedYear(expandedYear === year ? null : year)
                }
              >
                {expandedYear === year ? "▾" : "▸"}{" "}
                <div className="text-base">{year}</div>
              </button>
              {expandedYear === year && groupedPosts[year] && (
                <div className="pl-4">
                  {Object.keys(groupedPosts[year]).map((month) => {
                    const isSelected = filter === `date:${year}-${month}`;
                    return (
                      <button
                        key={month}
                        className={`block px-4 py-2 text-base ${
                          isSelected
                            ? "rounded-md text-dev-text"
                            : "text-dev-text hover:underline"
                        }`}
                        style={isSelected ? { backgroundColor: 'rgba(6, 48, 43, 0.2)' } : undefined}
                        onClick={() => handleMonthClick(year, month)}
                      >
                        {month}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
