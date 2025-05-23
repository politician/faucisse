# SEO Implementation Guide

This document explains how SEO is implemented in the Faucisse website and how to maintain good SEO practices when making changes.

## SEO Strategy

The Faucisse website implements a comprehensive SEO strategy including:

1. Semantic HTML structure
2. Proper metadata
3. Structured data
4. Performance optimization
5. Mobile responsiveness
6. XML sitemap
7. Robots.txt configuration

## Metadata Implementation

### Base Metadata

Base metadata is defined in `lib/metadata.ts` and includes:

- Title template
- Description
- Keywords
- Open Graph data
- Twitter card data
- Favicon information

### Page-Specific Metadata

Each page can override or extend the base metadata:

\`\`\`typescript
export const metadata: Metadata = {
  title: "Page Title",
  description: "Page-specific description",
  // Other metadata
}
\`\`\`

## Structured Data

Structured data is implemented using JSON-LD for:

1. Organization information on the homepage
2. Recipe data on recipe pages
3. ItemList for the recipes listing page

Example from a recipe page:

\`\`\`typescript
<Script
  id="schema-recipe"
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Recipe",
      name: recipe.title,
      // Other recipe data
    }),
  }}
/>
\`\`\`

## XML Sitemap

The sitemap is located at `public/sitemap.xml` and includes:

- Homepage
- Manifesto page
- Recipes listing page
- Individual recipe pages

When adding new pages, update the sitemap accordingly.

## Robots.txt

The robots.txt file is located at `public/robots.txt` and allows all crawlers to access all pages.

## Image Optimization

Images are optimized using Next.js Image component with:

- Proper `alt` text
- Responsive sizing with `sizes` attribute
- Priority loading for above-the-fold images

## Performance Considerations

Good performance is essential for SEO. The site implements:

- Efficient loading of fonts
- Optimized images
- Minimal JavaScript
- Efficient CSS with Tailwind

## SEO Checklist for New Content

When adding new content:

1. Add proper metadata
2. Use semantic HTML
3. Include structured data where appropriate
4. Optimize images
5. Update the sitemap if adding new pages
6. Ensure good performance
7. Test mobile responsiveness
