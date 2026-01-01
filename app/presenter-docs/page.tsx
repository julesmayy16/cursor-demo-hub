import { getDocsTree } from "@/lib/presenter-docs";
import { DocsNav } from "./DocsNav";
import { Suspense } from "react";

export default function PresenterDocsIndex() {
  const docsTree = getDocsTree();

  return (
    <div className="px-10 py-10 md:px-20 md:py-16 lg:px-40 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold text-dev-text mb-2">Presenter Docs</h1>
      <p className="text-dev-secondary mb-8">
        Demo documentation for Cursor presentations. Click any document to
        view.
      </p>

      <Suspense fallback={<div className="text-dev-secondary">Loading...</div>}>
        <DocsNav entries={docsTree} />
      </Suspense>
    </div>
  );
}
