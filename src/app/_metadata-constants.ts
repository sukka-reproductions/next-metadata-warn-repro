import type { Metadata } from "next";

export const TITLE_SUFFIX = ' | Sukka';
export const DESCRIPTION_SUFFIX = ' | Description Description Description';

export function makeSharedMetadata({
  title,
  description,
  /** @example '/' '/stun' */
  urlPath
}: {
  title: string,
  description: string,
  urlPath: string
}) {
  return {
    alternates: {
      // https://github.com/vercel/next.js/discussions/50189#discussioncomment-10826632
      canonical: '.' + urlPath
    },
    title: title + TITLE_SUFFIX,
    description: description + DESCRIPTION_SUFFIX,
    openGraph: {
      title: title + TITLE_SUFFIX,
      url: 'https://example.com' + urlPath,
      siteName: 'Example Site Name',
      description: description + DESCRIPTION_SUFFIX
    }
  } satisfies Metadata;
}
