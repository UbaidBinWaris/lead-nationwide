"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { MdSearch, MdClear, MdFilterList } from "react-icons/md";
import { useDebounce } from "@/hooks/useDebounce";

export function AdvancedFilters() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  
  const [searchTerm, setSearchTerm] = useState(searchParams.get("search") || "");
  const [email, setEmail] = useState(searchParams.get("email") || "");
  const [status, setStatus] = useState(searchParams.get("status") || "all");
  const [fromDate, setFromDate] = useState(searchParams.get("from") || "");
  const [toDate, setToDate] = useState(searchParams.get("to") || "");

  const debouncedSearch = useDebounce(searchTerm, 500);
  const debouncedEmail = useDebounce(email, 500);

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    let hasChanges = false;

    const updateParam = (key: string, value: string) => {
      if (value && value !== "all") {
        if (params.get(key) !== value) {
          params.set(key, value);
          hasChanges = true;
        }
      } else if (params.has(key)) {
        params.delete(key);
        hasChanges = true;
      }
    };

    updateParam("search", debouncedSearch);
    updateParam("email", debouncedEmail);
    updateParam("status", status);
    updateParam("from", fromDate);
    updateParam("to", toDate);

    if (hasChanges) {
      params.set("page", "1"); // Reset pagination on new filter
      router.replace(`${pathname}?${params.toString()}`);
    }
  }, [debouncedSearch, debouncedEmail, status, fromDate, toDate, pathname, router, searchParams]);

  const clearFilters = () => {
    setSearchTerm("");
    setEmail("");
    setStatus("all");
    setFromDate("");
    setToDate("");
  };

  return (
    <div className="w-full flex flex-col gap-3">
      {/* Top Search & Toggle */}
      <div className="flex w-full items-center gap-3">
        <div className="relative flex-1">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-slate-500">
            <MdSearch size={20} />
          </div>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search messages..."
            className="w-full rounded-xl border border-slate-700 bg-slate-800 py-2.5 pl-10 pr-10 text-sm text-slate-200 placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm("")}
              className="absolute inset-y-0 right-0 flex items-center pr-3 text-slate-500 hover:text-slate-300"
            >
              <MdClear size={18} />
            </button>
          )}
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`flex items-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-medium transition-colors ${
            isOpen || status !== 'all' || email || fromDate || toDate
              ? 'bg-blue-500/10 border-blue-500/30 text-blue-400' 
              : 'border-slate-700 bg-slate-800 text-slate-300 hover:bg-slate-700'
          }`}
        >
          <MdFilterList size={18} />
          Filters
        </button>
      </div>

      {/* Expandable Filter Panel */}
      {isOpen && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 rounded-xl border border-slate-700 bg-slate-800/50 p-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-slate-400">Status</label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-slate-200 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            >
              <option value="all">All Messages</option>
              <option value="unread">Unread</option>
              <option value="read">Read</option>
            </select>
          </div>
          
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-slate-400">Email Address</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Filter by email..."
              className="w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-slate-200 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-slate-400">From Date</label>
            <input
              type="date"
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)}
              className="w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-slate-200 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-slate-400">To Date</label>
            <div className="flex items-center gap-2">
              <input
                type="date"
                value={toDate}
                onChange={(e) => setToDate(e.target.value)}
                className="w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-slate-200 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              {(status !== 'all' || email || fromDate || toDate) && (
                <button
                  onClick={clearFilters}
                  title="Clear all filters"
                  className="rounded-lg p-2 text-slate-400 hover:bg-slate-700 hover:text-white transition-colors"
                >
                  <MdClear size={18} />
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
