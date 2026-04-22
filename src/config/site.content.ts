import type { TaskKey } from '@/lib/site-config'

export const siteContent = {
  navbar: {
    tagline: 'Image + Social Profile platform',
  },
  footer: {
    tagline: 'Image + Social Profile platform',
  },
  hero: {
    badge: 'Image + social profile studio',
    title: ['A thoughtful home for', 'stories, visuals, and discovery.'],
    description: 'Earthskydesign is an image-led social profile platform—publish visuals, shape your public identity, and browse creators without the noise of unrelated formats.',
    primaryCta: {
      label: 'Open gallery',
      href: '/images',
    },
    secondaryCta: {
      label: 'Browse profiles',
      href: '/profile',
    },
    searchPlaceholder: 'Search people, visuals, and posts',
    focusLabel: 'Focus',
    featureCardBadge: 'latest cover rotation',
    featureCardTitle: 'Latest posts shape the visual identity of the homepage.',
    featureCardDescription:
      'Recent images and stories stay at the center of the experience without changing any core platform behavior.',
  },
  home: {
    metadata: {
      title: 'Image gallery & social profiles',
      description: 'Earthskydesign is an image-led social profile platform for publishing visuals and public creator identity.',
      openGraphTitle: 'Earthskydesign — image gallery & social profiles',
      openGraphDescription: 'Browse gallery posts, discover creators, and explore public profiles with a warm, media-first layout.',
      keywords: ['image gallery', 'social profile', 'creator profiles', 'visual posts', 'Earthskydesign'],
    },
    introBadge: 'About the platform',
    introTitle: 'Built for visuals-first publishing and profile-led discovery.',
    introParagraphs: [
      'Earthskydesign centers imagery and public profiles so visitors can scan beautiful media, then understand the people behind the work.',
      'The experience is tuned for portrait-led posts, cohesive identity surfaces, and fast browsing without generic template clutter.',
      'Search and direct links still reach every supported format when you need them—this homepage simply spotlights what matters most here.',
    ],
    sideBadge: 'At a glance',
    sidePoints: [
      'Warm studio hero with fanned previews and strong visual hierarchy.',
      'Primary lanes for gallery posts and social profiles.',
      'Lightweight motion, crisp typography, and mobile-friendly scanning.',
      'Fast loads with CSS-first presentation details.',
    ],
    primaryLink: {
      label: 'Open gallery',
      href: '/images',
    },
    secondaryLink: {
      label: 'View profiles',
      href: '/profile',
    },
  },
  cta: {
    badge: 'Start exploring',
    title: 'Publish visuals and grow your public profile in one connected studio.',
    description: 'Jump into the gallery, refine your profile presence, and keep discovery focused on imagery and identity.',
    primaryCta: {
      label: 'Explore visuals',
      href: '/images',
    },
    secondaryCta: {
      label: 'View profiles',
      href: '/profile',
    },
  },
  taskSectionHeading: 'Latest {label}',
  taskSectionDescriptionSuffix: 'Browse the newest posts in this section.',
} as const

export const taskPageMetadata: Record<Exclude<TaskKey, 'comment' | 'org' | 'social'>, { title: string; description: string }> = {
  article: {
    title: 'Articles and stories',
    description: 'Long-form reading on Earthskydesign when publishing includes editorial lanes.',
  },
  listing: {
    title: 'Listings and discoverable pages',
    description: 'Structured listings when business discovery is enabled for this site.',
  },
  classified: {
    title: 'Classifieds and announcements',
    description: 'Short-form offers and notices when classified publishing is available.',
  },
  image: {
    title: 'Gallery — portraits & visual posts',
    description: 'Browse image-led posts, editorial sets, and visual stories on Earthskydesign.',
  },
  profile: {
    title: 'Social profiles & creator pages',
    description: 'Explore public profiles, bios, and identity surfaces across Earthskydesign.',
  },
  sbm: {
    title: 'Curated links and saved resources',
    description: 'Bookmark-style collections when curation tasks are enabled.',
  },
  pdf: {
    title: 'PDFs and downloadable resources',
    description: 'Document library surfaces when PDF tasks are enabled.',
  },
}

export const taskIntroCopy: Record<
  TaskKey,
  { title: string; paragraphs: string[]; links: { label: string; href: string }[] }
> = {
  listing: {
    title: 'Listings, services, and structured pages',
    paragraphs: [
      'Explore listings, services, brands, and discoverable pages across categories. Each entry is organized to make browsing clearer and help visitors quickly understand what a post offers.',
      'Listings connect naturally with articles, images, resources, and other content types so supporting information stays easy to reach from the same platform.',
      'Browse by category to compare posts in context, discover related content, and move between formats without losing your place.',
    ],
    links: [
      { label: 'Read articles', href: '/articles' },
      { label: 'Explore classifieds', href: '/classifieds' },
      { label: 'View profiles', href: '/profile' },
    ],
  },
  article: {
    title: 'Articles, stories, and long-form reading',
    paragraphs: [
      'This section is built for stories, explainers, guides, and long-form reading across topics and interests.',
      'Articles connect with listings, images, resources, and other content types so deeper reading can lead naturally into related discovery.',
      'Use this section to browse thoughtful posts, revisit useful writing, and move into supporting content when you want more context.',
    ],
    links: [
      { label: 'Explore listings', href: '/listings' },
      { label: 'Open images', href: '/images' },
      { label: 'Browse resources', href: '/pdf' },
    ],
  },
  classified: {
    title: 'Classifieds, offers, and timely updates',
    paragraphs: [
      'Classified posts help surface offers, notices, deals, and time-sensitive opportunities in a faster-scanning format.',
      'They work well alongside articles, listings, and profiles, making it easier to connect short-term posts with more structured content.',
      'Browse by category to find announcements quickly, then continue into related sections when you need more detail.',
    ],
    links: [
      { label: 'Business listings', href: '/listings' },
      { label: 'Read articles', href: '/articles' },
      { label: 'View profiles', href: '/profile' },
    ],
  },
  image: {
    title: 'Gallery posts, portraits, and visual-first stories',
    paragraphs: [
      'This lane is tuned for imagery that leads—portraits, editorial sets, campaign drops, and visual narratives with strong cover presence.',
      'Cards favor large media, calm metadata, and quick jumps into the creators behind the work.',
      'Use it as the front door for aesthetic discovery, then follow profiles when you want identity and context.',
    ],
    links: [
      { label: 'Social profiles', href: '/profile' },
      { label: 'Search', href: '/search' },
      { label: 'Home', href: '/' },
    ],
  },
  profile: {
    title: 'Social profiles, presence, and public identity',
    paragraphs: [
      'Profiles are the trust anchor for Earthskydesign—bios, avatars, highlights, and the story behind each visual post.',
      'The layout reads more like a creator dossier than a business directory: identity first, supporting media second.',
      'Jump into gallery posts from the same voices when you want deeper browsing without leaving the ecosystem.',
    ],
    links: [
      { label: 'Gallery', href: '/images' },
      { label: 'Search people & posts', href: '/search' },
      { label: 'Home', href: '/' },
    ],
  },
  sbm: {
    title: 'Curated links and bookmarked resources',
    paragraphs: [
      'This section collects useful links, references, tools, and saved resources in a text-first browsing format.',
      'Bookmarks stay connected to the rest of the platform, making it easier to move from a saved link into related stories, listings, or resources.',
      'Use this section to organize helpful sources and discover connected content without leaving the broader site experience.',
    ],
    links: [
      { label: 'Browse articles', href: '/articles' },
      { label: 'Explore listings', href: '/listings' },
      { label: 'Open PDFs', href: '/pdf' },
    ],
  },
  pdf: {
    title: 'PDFs, documents, and downloadable files',
    paragraphs: [
      'The PDF library hosts reports, guides, downloadable files, and longer-form document resources that support reading and discovery.',
      'These resources work alongside stories, listings, and profiles, helping document-style content stay connected to the rest of the platform.',
      'Browse by category to find relevant files quickly, then continue into related sections when you want more context.',
    ],
    links: [
      { label: 'Read articles', href: '/articles' },
      { label: 'See listings', href: '/listings' },
      { label: 'Explore profiles', href: '/profile' },
    ],
  },
  social: {
    title: 'Short updates and community signals',
    paragraphs: [
      'Short updates add quick signals that keep activity flowing across the platform.',
      'They work well with stories, listings, and resources by helping visitors move from brief updates into deeper content.',
      'Use these posts as lightweight entry points into the broader site experience.',
    ],
    links: [
      { label: 'Open listings', href: '/listings' },
      { label: 'Read articles', href: '/articles' },
      { label: 'View PDFs', href: '/pdf' },
    ],
  },
  comment: {
    title: 'Comments and contextual responses',
    paragraphs: [
      'Comments surface responses connected directly to articles and help keep discussion close to the writing it belongs to.',
      'This layer adds perspective and reaction without needing a separate standalone content format.',
      'Use comments as supporting context beneath stories, then continue exploring related content from the same topic area.',
    ],
    links: [
      { label: 'Explore articles', href: '/articles' },
      { label: 'View listings', href: '/listings' },
      { label: 'See classifieds', href: '/classifieds' },
    ],
  },
  org: {
    title: 'Organizations, teams, and structured entities',
    paragraphs: [
      'Organization pages provide structured identity surfaces for teams, brands, communities, and agencies.',
      'Used with listings, stories, profiles, and resources, they help create stronger structure across the platform.',
      'Connect organization pages with related content to build a clearer and more unified site presence.',
    ],
    links: [
      { label: 'Business listings', href: '/listings' },
      { label: 'Read articles', href: '/articles' },
      { label: 'PDF library', href: '/pdf' },
    ],
  },
}
