interface Author {
  slug: string;
  name: string;
  id: number;
  "avatar-url": string | null;
  "avatar-s3-key": string | null;
}

interface Section {
  id: number;
  slug: string;
  name: string;
  "section-url": string;
  collection: {
    slug: string;
    name: string;
    id: number;
  };
}

export interface StoryCardData {
  id: string;
  url: string;
  headline: string;
  subheadline: string;
  slug: string;
  "published-at": number;
  "hero-image-s3-key": string;
  sections: Section[];
  authors: Author[];
}
