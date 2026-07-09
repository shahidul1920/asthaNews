import Image from "next/image";
import Link from "next/link";
import { fetchAPI } from "@/lib/api";

const GET_POST_BY_SLUG = `
  query GetPostBySlug($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      id
      slug
      title
      date
      content
      excerpt
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
      categories {
        nodes {
          name
          slug
        }
      }
    }
  }
`;

const GET_POST_BY_DATABASE_ID = `
  query GetPostByDatabaseId($postId: ID!) {
    post(id: $postId, idType: DATABASE_ID) {
      id
      slug
      title
      date
      content
      excerpt
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
      categories {
        nodes {
          name
          slug
        }
      }
    }
  }
`;

function formatPostDate(dateString) {
  if (!dateString) {
    return "";
  }

  return new Intl.DateTimeFormat("bn-BD", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(new Date(dateString));
}

function cleanHtml(htmlString = "") {
  return htmlString.replace(/<[^>]*>/g, "").trim();
}

export default async function PostPage({ params, searchParams }) {
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;
  const postSlug = resolvedParams.slug;
  const postId = resolvedSearchParams?.pid;

  let data = null;

  if (postId) {
    data = await fetchAPI(GET_POST_BY_DATABASE_ID, {
      variables: { postId },
    });
  }

  if (!data?.post) {
    data = await fetchAPI(GET_POST_BY_SLUG, {
      variables: { slug: postSlug },
    });
  }

  const post = data?.post;

  if (!post) {
    return (
      <main className="mx-auto max-w-4xl px-4 py-10 md:px-6">
        <Link href="/" className="mb-6 inline-flex text-sm text-gray-500 hover:text-black">
          Back to home
        </Link>

        <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          <h1 className="text-3xl font-bold text-gray-900">Post not found</h1>
          <p className="mt-3 text-gray-600">
            The article for this URL could not be loaded from WordPress.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-4xl px-4 py-10 md:px-6">
      <Link href="/" className="mb-6 inline-flex text-sm text-gray-500 hover:text-black">
        Back to home
      </Link>

      <article className="grid gap-6">
        <div className="space-y-3">
          <div className="flex flex-wrap gap-2 text-sm text-gray-500">
            {post.categories?.nodes?.map((category) => (
              <span key={category.slug} className="rounded-full bg-gray-100 px-3 py-1">
                {category.name}
              </span>
            ))}
          </div>
          <h1 className="text-3xl font-bold leading-tight md:text-5xl">{post.title}</h1>
          <p className="text-sm text-gray-500">{formatPostDate(post.date)}</p>
        </div>

        {post.featuredImage?.node?.sourceUrl && (
          <div className="relative aspect-video overflow-hidden rounded-2xl bg-gray-100">
            <Image
              src={post.featuredImage.node.sourceUrl}
              alt={post.featuredImage.node.altText || post.title}
              fill
              sizes="(max-width: 768px) 100vw, 896px"
              className="object-cover"
            />
          </div>
        )}

        <div className="prose max-w-none prose-headings:font-bold prose-p:leading-8">
          <p className="text-lg text-gray-600">{cleanHtml(post.excerpt || "")}</p>
          <div dangerouslySetInnerHTML={{ __html: post.content || "" }} />
        </div>
      </article>
    </main>
  );
}