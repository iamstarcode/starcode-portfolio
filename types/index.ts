export interface ICardProps {
  link: string;
  cover: string;
  color?: string;
  title?: string;
  subtitle: string;
  type: 'project' | 'blog';
}

export interface IProject {
  id: string;
  title: string;
  subtitle: string;
  about: string;
  live_url: string;
  color: string;
  link: string;
  stack: string[];
  platforms: string[];
  year: string;
  cover: string;
  images: string[];
  repo: string | null;
}

export interface BlogProps {
  brief: string;
  coverImage: { url: string };
  slug: string;
  title: string;
  publishedAt: string;
}
