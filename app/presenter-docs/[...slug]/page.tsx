import { getDocData, getAllDocSlugs, getBreadcrumbs } from "@/lib/presenter-docs";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { BackLink } from "../BackLink";
import { Breadcrumbs } from "../Breadcrumbs";

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
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const docData = await getDocData(slug);

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

      {/* Content */}
      <article
        className="prose prose-lg max-w-none text-dev-text
          prose-headings:text-dev-text
          prose-a:text-dev-accent prose-a:no-underline hover:prose-a:underline
          prose-strong:text-dev-text
          prose-code:text-dev-accent prose-code:bg-dev-card prose-code:px-1 prose-code:py-0.5 prose-code:rounded
          prose-pre:bg-dev-card prose-pre:text-dev-text
          prose-blockquote:border-dev-accent prose-blockquote:text-dev-secondary
          prose-img:rounded-lg prose-img:shadow-md
          [&_table]:w-full [&_table]:border-collapse [&_table]:my-6
          [&_th]:border [&_th]:border-dev-text/20 [&_th]:bg-dev-card [&_th]:px-4 [&_th]:py-2 [&_th]:text-left [&_th]:font-semibold
          [&_td]:border [&_td]:border-dev-text/20 [&_td]:px-4 [&_td]:py-2
          [&_tr:nth-child(even)]:bg-dev-card/50"
        dangerouslySetInnerHTML={{ __html: docData.contentHtml }}
      />

      {/* Back link */}
      <div className="mt-12 pt-6 border-t border-dev-secondary">
        <Suspense fallback={<span className="text-dev-secondary">Loading...</span>}>
          <BackLink />
        </Suspense>
      </div>
    </div>
  );
}

