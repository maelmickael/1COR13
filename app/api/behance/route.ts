import { NextResponse } from 'next/server';

const BEHANCE_PROFILE_URL = 'https://www.behance.net/1cor13studio?tracking_source=search_projects%7C1cor13';

function inferCategory(title: string) {
  const normalized = title.toLowerCase();

  if (normalized.includes('motion') || normalized.includes('video') || normalized.includes('spot') || normalized.includes('bande')) {
    return 'Motion';
  }

  if (normalized.includes('web') || normalized.includes('site') || normalized.includes('digital')) {
    return 'Web';
  }

  if (normalized.includes('brand') || normalized.includes('identit') || normalized.includes('graphique')) {
    return 'Branding';
  }

  if (normalized.includes('edit') || normalized.includes('montage')) {
    return 'Editing';
  }

  return 'Création';
}

function slugToTitle(slug: string) {
  const cleanSlug = decodeURIComponent(slug)
    .replace(/-/g, ' ')
    .replace(/_/g, ' ')
    .trim();

  if (!cleanSlug) return 'Projet Behance';

  return cleanSlug
    .split(' ')
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

function extractProjects(html: string) {
  const projectLinks = Array.from(
    html.matchAll(/https:\/\/www\.behance\.net\/gallery\/\d+\/[^"'\s<>]+/g),
    (match) => match[0]
  );

  const imageUrls = Array.from(
    html.matchAll(/https:\/\/mir-s3-cdn-cf\.behance\.net\/projects\/[^"'\s<>]+/g),
    (match) => match[0]
  );

  return projectLinks
    .slice(0, 12)
    .map((url, index) => {
      const slug = url.split('/').filter(Boolean).pop() || 'project';
      const title = slugToTitle(slug);
      const image = imageUrls[index] || imageUrls[0] || '';

      return {
        id: url,
        title,
        url,
        image,
        category: inferCategory(title),
      };
    })
    .filter((project) => project.image);
}

export async function GET() {
  try {
    const response = await fetch(BEHANCE_PROFILE_URL, {
      headers: {
        'User-Agent': 'Mozilla/5.0',
      },
      next: { revalidate: 300 },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch Behance profile');
    }

    const html = await response.text();
    const projects = extractProjects(html);

    return NextResponse.json({ projects });
  } catch (error) {
    return NextResponse.json({ projects: [] }, { status: 200 });
  }
}
