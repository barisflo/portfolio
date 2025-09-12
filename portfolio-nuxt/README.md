# Florent Baris Portfolio - Nuxt 3

A modern, performant portfolio website built with Nuxt 3, showcasing projects and professional information.

## 🚀 Key Improvements from Vue 2 Version

### Architecture Improvements
- **Proper Separation of Concerns**: Data layer separated from presentation components
- **Composable State Management**: Reactive language switching with `useLanguage` composable
- **Type Safety**: Full TypeScript integration with proper interfaces
- **File-based Routing**: Nuxt's automatic routing system instead of manual Vue Router setup
- **Component Organization**: Modular, reusable components with clear responsibilities

### Technical Enhancements
- **SSR/SSG Ready**: Server-side rendering and static site generation support
- **Image Optimization**: Nuxt Image module for automatic image optimization
- **Better Performance**: Lazy loading, code splitting, and optimized bundles
- **SEO Optimized**: Proper meta tags and structured data
- **Modern CSS**: Tailwind CSS with custom design system
- **Accessibility**: Improved keyboard navigation and screen reader support

### Code Quality
- **No Direct DOM Manipulation**: Replaced `document.getElementById` with proper Vue reactivity
- **Proper Event Handling**: Clean modal system with Teleport and keyboard support
- **Consistent API**: Unified data access patterns through composables
- **Better Error Handling**: Proper TypeScript interfaces prevent runtime errors

## 🛠 Tech Stack

- **Framework**: Nuxt 3
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Image Optimization**: @nuxt/image
- **State Management**: Vue 3 Composition API with composables

## 📁 Project Structure

```
portfolio-nuxt/
├── assets/
│   ├── css/main.css          # Global styles and Tailwind imports
│   └── images/               # Optimized images
├── components/
│   ├── AboutSection.vue      # About/intro section
│   ├── AppNavigation.vue     # Main navigation with language toggle
│   ├── ContactSection.vue    # Contact information
│   ├── ProjectCard.vue       # Individual project card
│   ├── ProjectModal.vue      # Project detail modal
│   └── ProjectsSection.vue   # Projects grid layout
├── composables/
│   ├── useLanguage.ts        # Language state management
│   └── useProjects.ts        # Project data access
├── data/
│   └── projects.ts           # Project data with proper typing
├── layouts/
│   └── default.vue           # Main layout wrapper
├── pages/
│   └── index.vue             # Main page
└── public/
    ├── pdfs/                 # Resume files
    └── favicon.ico
```

## 🌟 Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Bilingual Support**: English/Korean language toggle
- **Interactive Project Gallery**: Modal-based project details
- **Smooth Scrolling**: Anchor-based navigation
- **Performance Optimized**: Lazy loading and image optimization
- **SEO Ready**: Meta tags and structured data

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Generate static site
npm run generate
```

## 🔧 Configuration

The project uses:
- **Nuxt Config**: `nuxt.config.ts` for module configuration
- **Tailwind Config**: `tailwind.config.js` for custom design tokens
- **TypeScript**: Full type safety with proper interfaces

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 🎨 Design System

Custom color palette defined in Tailwind config:
- **Primary**: Celadon Blue (#457B9D)
- **Secondary**: Prussian Blue (#1D3557)
- **Accent**: Azure (#eef9fa)
- **Background**: Cultured (#FAF9F9)

## 📈 Performance Features

- **Image Optimization**: Automatic WebP conversion and lazy loading
- **Code Splitting**: Automatic route-based code splitting
- **Tree Shaking**: Unused code elimination
- **CSS Purging**: Remove unused Tailwind classes in production

## 🌐 Deployment

Ready for deployment on:
- **Vercel** (recommended for SSR)
- **Netlify** (for SSG)
- **GitHub Pages** (for SSG)
- Any static hosting service

## 🔄 Migration Notes

This project replaces the old Vue 2 version with significant improvements:

1. **Eliminated Anti-patterns**: Removed direct DOM manipulation and mixed concerns
2. **Improved State Management**: Reactive language switching without cookies dependency
3. **Better Component Architecture**: Separated data from presentation
4. **Modern Development Experience**: Full TypeScript support and better tooling
5. **Performance Gains**: SSR/SSG support and optimized assets

The migration maintains all original functionality while providing a much better foundation for future development.