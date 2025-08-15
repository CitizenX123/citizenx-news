import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

export type Brief = {
  slug: string;
  title: string;
  date: string;
  topics: string[];
  location?: string;
  sources: { name: string; url: string }[];
  whatHappened: string;
  whatItMeans: string[];
  whatToDo?: string;
  html?: string;
};

const briefsDir = path.join(process.cwd(), 'src', 'content', 'briefs');

export function getAllBriefs(): Brief[] {
  if (!fs.existsSync(briefsDir)) return [];
  const files = fs.readdirSync(briefsDir).filter((f) => f.endsWith('.md'));
  const briefs = files.map((file) => {
    const slug = file.replace(/\.md$/, '');
    const raw = fs.readFileSync(path.join(briefsDir, file), 'utf8');
    const { data, content } = matter(raw);
    return {
      slug,
      title: String(data.title || slug),
      date: String(data.date || new Date().toISOString()),
      topics: Array.isArray(data.topics) ? data.topics : [],
      location: data.location ? String(data.location) : undefined,
      sources: Array.isArray(data.sources) ? data.sources : [],
      whatHappened: String(data.whatHappened || ''),
      whatItMeans: Array.isArray(data.whatItMeans) ? data.whatItMeans : [],
      whatToDo: data.whatToDo ? String(data.whatToDo) : undefined,
      html: content ? undefined : undefined,
    } satisfies Brief;
  });
  return briefs.sort((a, b) => (a.date > b.date ? -1 : 1));
}

export async function getBrief(slug: string): Promise<Brief | null> {
  const file = path.join(briefsDir, `${slug}.md`);
  if (!fs.existsSync(file)) return null;
  const raw = fs.readFileSync(file, 'utf8');
  const { data, content } = matter(raw);
  const processed = await remark().use(html).process(content || '');
  const htmlContent = processed.toString();
  return {
    slug,
    title: String(data.title || slug),
    date: String(data.date || new Date().toISOString()),
    topics: Array.isArray(data.topics) ? data.topics : [],
    location: data.location ? String(data.location) : undefined,
    sources: Array.isArray(data.sources) ? data.sources : [],
    whatHappened: String(data.whatHappened || ''),
    whatItMeans: Array.isArray(data.whatItMeans) ? data.whatItMeans : [],
    whatToDo: data.whatToDo ? String(data.whatToDo) : undefined,
    html: htmlContent,
  };
}


