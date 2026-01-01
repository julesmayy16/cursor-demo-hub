"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useFilter } from "../context/FilterContext";
import { format, parse, differenceInDays, formatDistanceToNow } from "date-fns";
import Container from "./Container";
import Divider from "./Divider";
import TextLink from "./TextLink";

interface PostLinkProps {
  title: string;
  date: string;
  _id: string;
  tags: string[];
  readingTime: number | undefined;
}

function PostLink({
  _id,
  title,
  date,
  tags,
  readingTime,
}: PostLinkProps) {
  const { setFilter } = useFilter();
  const [showAllTags, setShowAllTags] = useState(false);
  
  // Use a stable initial format that doesn't depend on current time
  // This prevents hydration mismatches - we'll update it in useEffect
  const parsedDate = parse(date, "yyyy.MM.dd", new Date());
  const stableInitialDate = format(parsedDate, "MMM d, yyyy");
  
  const [formattedDate, setFormattedDate] = useState<string>(stableInitialDate);

  useEffect(() => {
    const parsedDate = parse(date, "yyyy.MM.dd", new Date());
    const currentYear = new Date().getFullYear();
    const postYear = parsedDate.getFullYear();
    const daysAgo = differenceInDays(new Date(), parsedDate);

    const isToday = new Date().toDateString() === parsedDate.toDateString();

    const formatted = isToday
      ? "today"
      : daysAgo < 14
        ? formatDistanceToNow(parsedDate, { addSuffix: true })
        : currentYear === postYear
          ? format(parsedDate, "MMM d")
          : format(parsedDate, "MMM d, yyyy");

    setFormattedDate(formatted);
  }, [date]);

  return (
    <Container variant="post">
      <div>
        <Link
          href={`/posts/${title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
        >
          <div className="flex items-center justify-between gap-2 md:gap-5">
            <h4 className="text-lg leading-tight text-white decoration-white hover:underline md:text-xl">
              {title}
            </h4>
            <Image
              className="flex-shrink-0"
              src="/arrow-forward.svg"
              alt="arrow"
              width={12}
              height={12}
            />
          </div>
        </Link>
      </div>
      <div className="text-xs text-white md:text-sm">
        {formattedDate} {readingTime ? `• ${readingTime} min read` : ""}
      </div>
      <div className="flex flex-wrap gap-1 text-xs text-white md:gap-2 md:text-sm">
        {tags &&
          tags.map((tag, index) => (
            <TextLink
              key={tag}
              variant="underline"
              className={
                !showAllTags
                  ? index >= 3
                    ? "hidden"
                    : index >= 2
                      ? "hidden md:inline"
                      : ""
                  : ""
              }
              onClick={() => setFilter(tag.toLowerCase())}
            >
              {tag.toLowerCase()}
            </TextLink>
          ))}

        {/* Mobile "more" indicator */}
        {tags.length > 2 && !showAllTags && (
          <TextLink
            variant="underline"
            className="text-sm md:hidden"
            onClick={() => setShowAllTags(true)}
          >
            + {tags.length - 2} more
          </TextLink>
        )}

        {/* Desktop "more" indicator */}
        {tags.length > 3 && !showAllTags && (
          <TextLink
            variant="underline"
            className="text-sm hidden md:inline"
            onClick={() => setShowAllTags(true)}
          >
            + {tags.length - 3} more
          </TextLink>
        )}

        {/* Show less button */}
        {showAllTags && tags.length > 2 && (
          <TextLink
            className="text-sm font-bold"
            onClick={() => setShowAllTags(false)}
          >
            show less
          </TextLink>
        )}
      </div>
      <Divider />
    </Container>
  );
}

export default PostLink;
