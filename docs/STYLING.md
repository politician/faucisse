# Styling Guide

This document explains the styling approach used in the Faucisse website and provides guidelines for maintaining consistent styling.

## Styling Approach

The Faucisse website uses Tailwind CSS for styling, with:

- Custom colors defined in `tailwind.config.ts`
- Global styles in `app/globals.css`
- Custom animations for interactive elements
- Responsive design for all screen sizes

## Color Palette

The main colors used throughout the site are:

- Primary (pink/red): Used for buttons, accents, and important elements
- Secondary (green): Used for secondary elements and accents
- Accent (yellow): Used for tertiary elements and highlights
- Background (cream): Used for the page background
- Foreground (dark red): Used for text

These colors are defined as HSL values in the `tailwind.config.ts` file and can be accessed using Tailwind's utility classes.

## Typography

The site uses the Fredoka font for all text, with various weights:

- 400 (Regular): For body text
- 500 (Medium): For subheadings and emphasis
- 600 (SemiBold): For important text and buttons
- 700 (Bold): For headings and very important text

## Animations

Custom animations are defined in `app/globals.css` and include:

- `float`: For floating emoji elements
- `bounce-slow`: For slow bouncing elements
- `wiggle`: For wiggling elements
- `swing`: For the swinging sausage in the hero section

## Layout Components

### Page Layout

The `PageLayout` component in `components/page-layout.tsx` provides a consistent layout across all pages, including:
- The navigation bar
- The background pattern
- The footer

### Layout Wrapper

The `LayoutWrapper` component in `components/layout-wrapper.tsx` handles the background pattern and overlay.

## Responsive Design

The site is designed to be fully responsive, with breakpoints at:

- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

Use Tailwind's responsive prefixes to apply different styles at different screen sizes:

```jsx
<div className="text-lg md:text-xl lg:text-2xl">
  Responsive text
</div>
```

## Component Styling

Components use a combination of:

- Tailwind utility classes for most styling
- CSS variables for theme colors
- Custom animations for interactive elements

## Adding New Styles

When adding new styles:

1. Try to use existing Tailwind utility classes first
2. If needed, extend Tailwind in `tailwind.config.ts`
3. For complex animations, add them to `app/globals.css`
4. Maintain consistency with the existing design

## Best Practices

- Use semantic HTML elements
- Ensure sufficient color contrast for accessibility
- Test on multiple screen sizes
- Keep styles consistent across similar components
- Use the existing color palette
- Follow the playful and fun aesthetic of the brand
