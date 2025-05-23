# Faucisse Architecture

This document provides an overview of the Faucisse website architecture, explaining the key components and how they interact.

## Technology Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel

## Project Structure

\`\`\`
faucisse.com/
├── app/                  # Next.js App Router
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout component
│   ├── manifest.ts       # PWA manifest
│   ├── page.tsx          # Homepage
│   ├── manifeste/        # Manifesto page
│   ├── recettes/         # Recipes section
│   └── not-found.tsx     # 404 page
├── components/           # Reusable React components
├── lib/                  # Utility functions and data
│   ├── metadata.ts       # SEO metadata configuration
│   └── recipes.ts        # Recipe data
├── public/               # Static assets
│   ├── icons/            # Favicon and app icons
│   └── images/           # Images used throughout the site
└── docs/                 # Documentation
\`\`\`

## Key Components

### App Router

The project uses Next.js App Router for routing. Each route is defined by a directory in the `app` folder with a `page.tsx` file.

### Page Layout

The `PageLayout` component in `components/page-layout.tsx` provides a consistent layout across all pages, including:
- The navigation bar
- The background pattern
- The footer

### Data Management

Recipe data is centralized in `lib/recipes.ts` to avoid duplication and make updates easier.

### SEO

SEO metadata is managed through:
- Base metadata in `lib/metadata.ts`
- Page-specific metadata in each page file
- Structured data using JSON-LD for recipes

### Styling

The project uses Tailwind CSS with:
- Custom colors defined in `tailwind.config.ts`
- Global styles in `app/globals.css`
- Custom animations for interactive elements

## Data Flow

1. Static data (recipes, metadata) is defined in the `lib` directory
2. Components import this data as needed
3. Pages compose components to create the full UI
4. The App Router handles navigation between pages

## Progressive Web App

The site implements PWA features through:
- Web app manifest in `app/manifest.ts` and `public/site.webmanifest`
- Various icon sizes in the `public/icons` directory
- Proper metadata for installation prompts

## Performance Considerations

- Images are optimized using Next.js Image component
- Fonts are properly loaded with display swap
- Critical CSS is inlined
- Animations use hardware acceleration where possible
