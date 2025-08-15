import { NextResponse } from 'next/server';
import { XMLParser } from 'fast-xml-parser';

// Simple YouTube channel uploads RSS (public). Replace with your channels.
const CHANNELS = [
  // e.g., AP News
  'https://www.youtube.com/feeds/videos.xml?channel_id=UCeY0bbntWzzVIaj2z3QigXg',
  // e.g., Reuters
  'https://www.youtube.com/feeds/videos.xml?channel_id=UChWtJey46brAatKp8vRJ9aA',
];

async function fetchFeed(url: string) {
  const res = await fetch(url, { next: { revalidate: 600 } });
  const xml = await res.text();
  const parser = new XMLParser({ ignoreAttributes: false, attributeNamePrefix: '' });
  const json = parser.parse(xml);
  const entries = Array.isArray(json.feed?.entry) ? json.feed.entry : json.feed?.entry ? [json.feed.entry] : [];
  return entries.map((e: any) => ({
    id: e['yt:videoId'],
    title: e.title,
    link: e.link?.href,
    publishedAt: e.published,
    author: e.author?.name,
    source: 'YouTube',
  }));
}

export async function GET() {
  try {
    const results = await Promise.allSettled(CHANNELS.map(fetchFeed));
    const items = results
      .flatMap((r) => (r.status === 'fulfilled' ? r.value : []))
      .sort((a: any, b: any) => (a.publishedAt > b.publishedAt ? -1 : 1))
      .slice(0, 12);
    return NextResponse.json({ items });
  } catch (err) {
    return NextResponse.json({ items: [], error: 'failed' }, { status: 500 });
  }
}


