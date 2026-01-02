"use client";

import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";

export function ViewToggle() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isTextOnly = searchParams.get("text") === "true";

  return (
    <div className="flex items-center gap-2 text-sm mb-6">
      <span className="text-dev-secondary">View:</span>
      <div className="inline-flex rounded-md border border-dev-text/20 overflow-hidden">
        <Link
          href={pathname}
          className={`px-3 py-1.5 transition-colors no-underline ${
            !isTextOnly
              ? "bg-dev-accent text-white"
              : "bg-dev-card text-dev-text hover:bg-dev-card-02"
          }`}
        >
          📷 Screenshots
        </Link>
        <Link
          href={`${pathname}?text=true`}
          className={`px-3 py-1.5 transition-colors no-underline ${
            isTextOnly
              ? "bg-dev-accent text-white"
              : "bg-dev-card text-dev-text hover:bg-dev-card-02"
          }`}
        >
          📝 Text Only
        </Link>
      </div>
    </div>
  );
}

