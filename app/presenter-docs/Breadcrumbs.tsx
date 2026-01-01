"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

type Breadcrumb = {
  title: string;
  href: string;
  isClickable: boolean;
};

type BreadcrumbsProps = {
  breadcrumbs: Breadcrumb[];
};

export function Breadcrumbs({ breadcrumbs }: BreadcrumbsProps) {
  const searchParams = useSearchParams();
  const openParam = searchParams.get("open");

  function getHrefWithOpen(href: string): string {
    if (!openParam) {return href;}
    const separator = href.includes("?") ? "&" : "?";
    return `${href}${separator}open=${openParam}`;
  }

  return (
    <nav className="mb-6 text-sm">
      {breadcrumbs.map((crumb, i) => (
        <span key={crumb.href}>
          {crumb.isClickable ? (
            <Link
              href={getHrefWithOpen(crumb.href)}
              className="text-dev-accent hover:text-dev-text hover:underline"
            >
              {crumb.title}
            </Link>
          ) : (
            <span className="text-dev-secondary">{crumb.title}</span>
          )}
          {i < breadcrumbs.length - 1 && (
            <span className="text-dev-secondary mx-2">/</span>
          )}
        </span>
      ))}
    </nav>
  );
}

