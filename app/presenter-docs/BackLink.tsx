"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

export function BackLink() {
  const searchParams = useSearchParams();
  const openParam = searchParams.get("open");
  
  const href = openParam 
    ? `/presenter-docs?open=${openParam}` 
    : "/presenter-docs";

  return (
    <Link
      href={href}
      className="text-dev-accent hover:text-dev-text"
    >
      ← Back to all docs
    </Link>
  );
}


