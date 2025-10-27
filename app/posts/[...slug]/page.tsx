import { getPostData, getAllPostIds, PostData } from "@/lib/posts";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { format } from "date-fns";

interface PostProps {
  params: { slug: string[] };
}

export async function generateStaticParams() {
  const paths = getAllPostIds();
  return paths.map((post) => ({
    slug: [post.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")],
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const titleSlug = slug.join("-");
  const postData = await getPostData(titleSlug);
  if (!postData) {
    return {
      title: "Post not found",
    };
  }
  return {
    title: postData.title,
  };
}

const BackLink = () => (
  <div className="mb-8">
    <Link href="/">
      <span className="text-dev-accent cursor-pointer hover:text-dev-text">← Back to posts</span>
    </Link>
  </div>
);

const PostContent = ({ postData, formattedDate }: { postData: PostData; formattedDate: string }) => (
  <article className="w-full">
    <div className="mb-5 flex flex-col">
      <h1 className="mb-3 text-3xl lg:text-4xl text-dev-text">{postData.title}</h1>
    </div>
    <hr className="my-5" style={{ borderColor: 'rgba(6, 48, 43, 0.3)' }} />
    <div
      className="flex flex-col gap-5 text-dev-text prose max-w-none"
      dangerouslySetInnerHTML={{ __html: postData.contentHtml || "" }}
    />
    <hr className="my-5" style={{ borderColor: 'rgba(6, 48, 43, 0.3)' }} />
    <div className="text-dev-secondary">
      <p className="text-lg">{formattedDate}</p>
      {postData.tags && postData.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-3">
          {postData.tags.map((tag) => (
            <span key={tag} className="text-dev-accent">
              #{tag.toLowerCase()}
            </span>
          ))}
        </div>
      )}
    </div>
  </article>
);

const NavLink = ({ post, direction }: { post: PostData; direction: 'prev' | 'next' }) => {
  const isPrev = direction === 'prev';
  const slug = post.title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  
  return (
    <Link href={`/posts/${slug}`} className="flex-1 max-w-[45%]">
      <div className={`text-dev-text hover:text-dev-accent ${isPrev ? 'text-left' : 'text-right'}`}>
        <div className={`flex items-center gap-2 ${isPrev ? '' : 'justify-end'}`}>
          {isPrev && <span className="flex-shrink-0">←</span>}
          <span className="truncate">{post.title}</span>
          {!isPrev && <span className="flex-shrink-0">→</span>}
        </div>
      </div>
    </Link>
  );
};

const PostNavigation = ({ prevPost, nextPost }: { prevPost: PostData | null; nextPost: PostData | null }) => (
  <div className="flex w-full justify-between items-start mt-10 gap-8">
    {prevPost ? <NavLink post={prevPost} direction="prev" /> : <div className="flex-1 max-w-[45%]" />}
    {nextPost ? <NavLink post={nextPost} direction="next" /> : <div className="flex-1 max-w-[45%]" />}
  </div>
);

const Post = async ({ params }: { params: Promise<{ slug: string[] }> }) => {
  const { slug } = await params;
  const titleSlug = slug.join("-");
  const postData = await getPostData(titleSlug);
  const allPostsData = getAllPostIds();
  if (!postData) {
    notFound();
  }

  const currentIndex = allPostsData.findIndex(
    (post) =>
      post.title.toLowerCase().replace(/[^a-z0-9]+/g, "-") === titleSlug,
  );
  const prevPost: PostData | null = currentIndex > 0 ? allPostsData[currentIndex - 1] ?? null : null;
  const nextPost: PostData | null =
    currentIndex < allPostsData.length - 1
      ? allPostsData[currentIndex + 1] ?? null
      : null;

  const formattedDate = format(new Date(postData.date), "MMM d, yyyy");

  return (
    <div className="px-10 py-10 md:px-40 md:py-20 lg:px-80 xl:px-96">
      <BackLink />
      <div className="flex w-full flex-col items-start justify-start gap-5">
        <PostContent postData={postData} formattedDate={formattedDate} />
        <PostNavigation prevPost={prevPost} nextPost={nextPost} />
      </div>
    </div>
  );
};

export default Post;
