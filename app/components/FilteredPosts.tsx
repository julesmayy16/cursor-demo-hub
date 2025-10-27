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
import Container from "@/app/components/Container";
import TextLink from "@/app/components/TextLink";
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

function FilteredPosts({ allPostsData }: FilteredPostsProps) {
  const { filter, setFilter } = useFilter();
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 4;
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
        <Container variant="content">
          <TextLink onClick={clearFilter}>
            ← Back to all posts
          </TextLink>
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
        </Container>
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
        <div className="mt-4 flex gap-2 items-center">
          {currentPage > 1 && (
            <TextLink onClick={() => setCurrentPage(currentPage - 1)}>
              &laquo;
            </TextLink>
          )}

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => {
            const isInVisibleRange = pageNumber >= startPage && pageNumber <= endPage;
            
            if (isInVisibleRange) {
              return (
                <PaginationButton
                  key={pageNumber}
                  onClick={() => setCurrentPage(pageNumber)}
                  isActive={currentPage === pageNumber}
                >
                  {pageNumber}
                </PaginationButton>
              );
            } else {
              return (
                <span key={pageNumber} className="text-white">
                  {pageNumber}
                </span>
              );
            }
          })}

          {currentPage < totalPages && (
            <TextLink onClick={() => setCurrentPage(currentPage + 1)}>
              &raquo;
            </TextLink>
          )}
        </div>
      )}
    </div>
  );
}

export default FilteredPosts;
