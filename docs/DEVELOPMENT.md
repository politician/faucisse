# Development Guide

This document provides detailed instructions for developing the Faucisse website.

## Development Environment

### Requirements

- Node.js 18.x or higher
- npm or yarn
- Git

### Setup

1. Clone the repository:
   \`\`\`bash
   git clone https://github.com/your-username/faucisse.com.git
   cd faucisse.com
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   npm install
   # or
   yarn install
   \`\`\`

3. Start the development server:
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   \`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Development Workflow

### Branch Strategy

- `main`: Production-ready code
- `develop`: Integration branch for features
- Feature branches: Named as `feature/feature-name`
- Bug fix branches: Named as `fix/bug-name`

### Commit Messages

Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

\`\`\`
feat: add new recipe
fix: correct typo in manifesto
docs: update README
style: format code
refactor: reorganize component structure
test: add tests for recipe component
chore: update dependencies
\`\`\`

## Adding New Features

### Adding a New Recipe

1. Add the recipe image to `public/images/recipes/`
2. Add the recipe data to the `recipes` array in `lib/recipes.ts`
3. The recipe will automatically appear in the recipes list and have its own page

### Adding a New Page

1. Create a new directory in the `app` folder
2. Add a `page.tsx` file with the page content
3. Use the `PageLayout` component for consistent styling
4. Add metadata for SEO

### Modifying Styles

1. Global styles are in `app/globals.css`
2. Component-specific styles use Tailwind classes
3. Custom colors and animations can be added to `tailwind.config.ts`

## Testing

### Manual Testing

Test the site on multiple devices and browsers to ensure responsiveness and compatibility.

### Accessibility Testing

Use tools like Lighthouse and axe to check for accessibility issues.

## Building for Production

\`\`\`bash
npm run build
# or
yarn build
\`\`\`

This will create an optimized production build in the `.next` directory.

## Deployment

The site is automatically deployed to Vercel when changes are pushed to the main branch.

### Environment Variables

No environment variables are currently required for this project.

## Troubleshooting

### Common Issues

- **Images not loading**: Check that the image paths in `lib/recipes.ts` match the actual file paths in `public/images/recipes/`
- **Styling issues**: Make sure Tailwind is properly configured and that the classes are correct
- **Build errors**: Check for TypeScript errors or missing dependencies
