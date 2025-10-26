"use client";

import { useState, useMemo } from "react";
import { useFilter } from "@/app/context/FilterContext";
import PostLink from "@/app/components/PostLink";
import { PostData } from "@/lib/posts";
import {
  buildPostSearchIndex,
  searchPosts,
  IndexedPost,
} from "@/lib/searchIndex";
import PaginationButton from "@/app/components/PaginationButton";
import { parse, format } from "date-fns";

interface FilteredPostsProps {
  allPostsData: PostData[];
}

// Pre-process posts data for efficient filtering
interface ProcessedPostData extends IndexedPost {
  normalizedTitle: string;
  normalizedTags: string;
  parsedDate: Date;
  year: string;
  month: string;
}

function FilteredPosts({ allPostsData }: FilteredPostsProps): JSX.Element {
  const { filter, setFilter } = useFilter();
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;
  const maxPageButtons = 5;

  // Pre-process all posts data once with search index
  const processedPosts = useMemo(() => {
    const indexedPosts = buildPostSearchIndex(allPostsData);
    return indexedPosts.map((post) => {
      const parsedDate = parse(post.date, "yyyy.MM.dd", new Date());
      return {
        ...post,
        normalizedTitle: post.title.toLowerCase(),
        normalizedTags: post.tags.map((tag) => tag.toLowerCase()).join(" "),
        parsedDate,
        year: format(parsedDate, "yyyy"),
        month: format(parsedDate, "MMMM"),
      };
    });
  }, [allPostsData]);

  const isDateFilter = filter.startsWith("date:");
  const isTextFilter = filter.length > 0 && !isDateFilter;

  const filteredPosts = useMemo(() => {
    if (!filter) {
      return processedPosts;
    }

    if (isDateFilter) {
      const dateFilter = filter.replace("date:", "");
      const [year, month] = dateFilter.split("-");
      return processedPosts.filter(
        (post) => post.year === year && post.month === month,
      );
    }

    // Use search index for text filtering
    return searchPosts(processedPosts, filter);
  }, [filter, processedPosts, isDateFilter]);

  const paginatedPosts = useMemo(() => {
    if (isDateFilter || isTextFilter) {
      return filteredPosts;
    }
    const startIndex = (currentPage - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    return filteredPosts.slice(startIndex, endIndex);
  }, [currentPage, postsPerPage, filteredPosts, isDateFilter, isTextFilter]);

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const startPage = Math.max(1, currentPage - Math.floor(maxPageButtons / 2));
  const endPage = Math.min(totalPages, startPage + maxPageButtons - 1);
  const pageNumbers = Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i,
  );

  function clearFilter() {
    setFilter("");
    setCurrentPage(1);
  }

  return (
    <div className="flex w-full flex-col items-center justify-start gap-5 overflow-auto bg-dev-primary p-4 pt-10 md:w-2/3">
      {filteredPosts.length > 0 && !!filter.length && (
        <div className="box-border flex w-full flex-col items-start gap-10 px-20 pt-5">
          <button onClick={clearFilter} className="text-white hover:text-white/70">
            ← Back to all posts
          </button>
          <div className="text-3xl text-white">
            {isDateFilter ? (
              <>
                {`${filteredPosts.length} ${
                  filteredPosts.length === 1 ? "post" : "posts"
                } in ${filter.replace("date:", "").split("-")[1]} ${
                  filter.replace("date:", "").split("-")[0]
                }`}
              </>
            ) : (
              `${filteredPosts.length} ${
                filteredPosts.length === 1 ? "post" : "posts"
              } for "${filter}"`
            )}
          </div>
        </div>
      )}
      {paginatedPosts.map(({ id, title, date, tags, readingTime }) => (
        <PostLink
          key={id}
          id={id}
          title={title}
          date={date}
          tags={tags}
          readingTime={readingTime}
        />
      ))}
      {filteredPosts.length === 0 && (
        <div className="text-2xl text-white">{`No posts found for "${filter}"`}</div>
      )}

      {!isDateFilter && !isTextFilter && (
        <div className="mt-4 flex gap-2">
          {currentPage > 1 && (
            <PaginationButton onClick={() => setCurrentPage(currentPage - 1)}>
              &laquo;
            </PaginationButton>
          )}

          {pageNumbers.map((pageNumber) => (
            <PaginationButton
              key={pageNumber}
              onClick={() => setCurrentPage(pageNumber)}
              className={
                currentPage === pageNumber ? "border border-white" : ""
              }
            >
              {pageNumber}
            </PaginationButton>
          ))}

          {currentPage < totalPages && (
            <PaginationButton onClick={() => setCurrentPage(currentPage + 1)}>
              &raquo;
            </PaginationButton>
          )}
        </div>
      )}
    </div>
  );
}

export default FilteredPosts;
