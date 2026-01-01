"use client";

import Link from "next/link";
import { DocEntry } from "@/lib/presenter-docs";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useCallback, useMemo } from "react";

function DocLink({
  entry,
  openFolders,
  toggleFolder,
  openParam,
}: {
  entry: DocEntry;
  openFolders: Set<string>;
  toggleFolder: (slug: string) => void;
  openParam: string;
}) {
  const basePath = `/presenter-docs/${entry.slug.join("/")}`;
  const href = openParam ? `${basePath}?open=${openParam}` : basePath;
  const slugKey = entry.slug.join("/");
  const isOpen = openFolders.has(slugKey);

  if (entry.isDirectory && entry.children) {
    return (
      <div>
        <button
          onClick={() => toggleFolder(slugKey)}
          className="flex items-center gap-2 py-2 text-dev-text font-semibold hover:text-dev-accent select-none w-full text-left"
        >
          <svg
            className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-90" : ""}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
          {entry.title}
          <span className="text-dev-secondary text-sm font-normal">
            ({entry.children.length})
          </span>
        </button>
        {isOpen && (
          <div className="ml-5 border-l-2 border-dev-secondary pl-4">
            {entry.children.map((child) => (
              <DocLink
                key={child.slug.join("/")}
                entry={child}
                openFolders={openFolders}
                toggleFolder={toggleFolder}
                openParam={openParam}
              />
            ))}
          </div>
        )}
      </div>
    );
  }

  // Check if this is the README/Start Here entry
  const isStartHere = entry.slug[entry.slug.length - 1]?.toLowerCase() === "readme";

  if (isStartHere) {
    return (
      <div className="py-2 mb-3">
        <Link
          href={href}
          className="inline-flex items-center px-4 py-2.5 rounded-lg font-semibold text-dev-text bg-dev-card border-2 border-dev-accent hover:bg-dev-bg transition-colors"
        >
          {entry.title}
        </Link>
      </div>
    );
  }

  return (
    <div className="py-1.5">
      <Link
        href={href}
        className="text-dev-accent hover:text-dev-text hover:underline"
      >
        {entry.title}
      </Link>
    </div>
  );
}

export function DocsNav({ entries }: { entries: DocEntry[] }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  // Parse open folders from URL param
  const openParam = searchParams.get("open") || "";
  const openFolders = useMemo(
    () => new Set(openParam ? openParam.split(",") : []),
    [openParam]
  );

  const toggleFolder = useCallback(
    (slug: string) => {
      const newOpen = new Set(openFolders);
      if (newOpen.has(slug)) {
        newOpen.delete(slug);
      } else {
        newOpen.add(slug);
      }

      const params = new URLSearchParams(searchParams.toString());
      if (newOpen.size > 0) {
        params.set("open", Array.from(newOpen).join(","));
      } else {
        params.delete("open");
      }

      router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    },
    [openFolders, searchParams, router, pathname]
  );

  return (
    <div className="space-y-1">
      {entries.map((entry) => (
        <DocLink
          key={entry.slug.join("/")}
          entry={entry}
          openFolders={openFolders}
          toggleFolder={toggleFolder}
          openParam={openParam}
        />
      ))}
    </div>
  );
}
