import { getDocData, getAllDocSlugs, getBreadcrumbs } from "@/lib/presenter-docs";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { BackLink } from "../BackLink";
import { Breadcrumbs } from "../Breadcrumbs";
import { CollapsibleContent } from "../CollapsibleContent";
import { ViewToggle } from "../ViewToggle";

export async function generateStaticParams() {
  const slugs = getAllDocSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const docData = await getDocData(slug);
  if (!docData) {
    return { title: "Doc not found" };
  }
  return { title: docData.title };
}

export default async function PresenterDoc({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string[] }>;
  searchParams: Promise<{ text?: string }>;
}) {
  const { slug } = await params;
  const { text } = await searchParams;
  
  // Strip images when ?text=true is passed
  const stripImages = text === "true";
  const docData = await getDocData(slug, { stripImages });

  if (!docData) {
    notFound();
  }

  const breadcrumbs = getBreadcrumbs(slug);

  return (
    <div className="px-6 py-8 md:px-16 md:py-12 lg:px-24 max-w-5xl mx-auto">
      {/* Breadcrumbs */}
      <Suspense fallback={<nav className="mb-6 text-sm text-dev-secondary">Loading...</nav>}>
        <Breadcrumbs breadcrumbs={breadcrumbs} />
      </Suspense>

      {/* View Toggle */}
      <Suspense fallback={null}>
        <ViewToggle />
      </Suspense>

      {/* Content with collapsible section tracking */}
      <CollapsibleContent contentHtml={docData.contentHtml} />

      {/* Back link */}
      <div className="mt-12 pt-6 border-t border-dev-secondary">
        <Suspense fallback={<span className="text-dev-secondary">Loading...</span>}>
          <BackLink />
        </Suspense>
      </div>
    </div>
  );
}

